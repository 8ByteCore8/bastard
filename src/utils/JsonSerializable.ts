
type JsonSerializableTypes = number | string | boolean | bigint | null | JsonSerializableArray | JsonSerializableObject;
type JsonSerializableObject = { [K in string]: JsonSerializableTypes; };
type JsonSerializableArray = JsonSerializableTypes[]
export type JsonSerializable = JsonSerializableObject | JsonSerializableArray;
