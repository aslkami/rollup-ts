// 判断是否为any类型
// type IsAny<T> = [T] extends [keyof any] ? [keyof any] extends [T] ? true : false : false

// unknown 只能赋值给 any或者unknown
// any可以赋值给string，但是unknown不可以赋值给string
type IsAny<T> = [unknown] extends [T] ? ([T] extends [string] ? true : false) : false

type A = IsAny<string> // false
type B = IsAny<any> // true
type C = IsAny<unknown> // false
type D = IsAny<never> // false

export {}
