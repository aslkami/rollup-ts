// 不能访问unknown类型上的属性，不能作为函数、类来使用
let unknown: unknown;
unknown = 'zf';
unknown = 11;

// 联合类型与unknown都是unknown类型
type UnionUnknown = null | string | number | unknown

// 交叉类型与unknown都是其他类型
type inter = unknown & null


// never是unknown的子类型
type isNever = never extends unknown ? true : false

// keyof unknown 是never
type key = keyof unknown

// unknown类型不能被遍历
// unknown类型不能和number类型进行 +运算,可以用于等或不等操作
type IMap<T> = {
  [P in keyof T]: number
}
type t = IMap<unknown>;