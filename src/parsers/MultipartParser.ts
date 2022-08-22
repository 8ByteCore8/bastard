import busboy, { BusboyConfig, FieldInfo, FileInfo } from 'busboy';
import { createReadStream, createWriteStream } from 'fs';

import { AsClass } from "../utils/class-or-function";
import { Parser } from "../common/Parser";
import { Readable } from 'stream';
import { Request } from '../common/Request';
import { SyncAsync } from '../utils/sync-async';
import { join } from 'path';
import { randomBytes } from 'crypto';
import { rm } from 'fs';
import { tmpdir } from 'os';

type File = Readable & FileInfo;
type Field = { value: any; } & FieldInfo;

export class MultipartParser implements AsClass<Parser> {
    constructor(tempDir?: string, options?: BusboyConfig) {
        this.tempDir = tempDir || tmpdir();
        this.options = options || {};
    }

    private tempDir: string;
    private options: BusboyConfig;

    private static getTempFileName(tempDir: string): string {
        return join(tempDir, `${randomBytes(6).toString("hex")}`);
    }

    public call(request: Request): SyncAsync<Request<Record<string, File | Field>>> {
        return new Promise((res, rej) => {
            try {
                let body: Record<string, File | Field> = {};

                request.rawContent.pipe(busboy(this.options)
                    .on('error', (error) => {
                        rej(error);
                    })
                    .on('file', (name, file, info) => {
                        const tempFileName = MultipartParser.getTempFileName(this.tempDir);
                        file.pipe(createWriteStream(tempFileName))
                            .on('close', () => {
                                body[name] = Object.assign(createReadStream(tempFileName)
                                    .on('close', () => {
                                        rm(tempFileName, () => { });
                                    }), info);
                            });
                    })
                    .on('field', (name, value, info) => {
                        body[name] = Object.assign({ value: value }, info);
                    })
                    .on('close', () => {
                        (request as any).content = body;
                        res(request as any);
                    }));
            } catch (error) {
                rej(error);
            }
        });
    }
}
