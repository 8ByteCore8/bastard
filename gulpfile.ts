import { dest, parallel, series, src, task } from "gulp"

import GulpUglify from "gulp-uglify"
import { createProject } from "gulp-typescript"
import merge2 from "merge2"
import { rm } from "fs/promises"
import sourcemap from "gulp-sourcemaps"

task("build:clear", () => {
    return rm("./build/", { force: true, recursive: true })
}
)

task("build:ts",
    () => {
        const ts = createProject("tsconfig.json")
        const tsRes = src("./src/**/*.ts")
            .pipe(sourcemap.init())
            .pipe(ts())

        return merge2(
            tsRes.dts,
            tsRes.js
                .pipe(GulpUglify())
                .pipe(sourcemap.write("./"))
        )
            .pipe(dest("./build/"))
    }
)

task("build:copy meta",
    () => {
        return src("package.json").pipe(dest("./build/"))
    }
)

task("build",
    series(
        "build:clear",
        parallel(
            "build:ts",
            "build:copy meta"
        )
    )
)