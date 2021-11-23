interface Fish {
  name1: string
}
interface Water {
  name2: string
}
interface Bird {
  name3: string
}
interface Sky {
  name4: string
}
type Condition<T> = T extends Fish ? Water : Sky;
let con1: Condition<Fish> = { name2: '水' }
let con2: Condition<Fish | Bird> = { name4: '111' }

type c1 = Condition<Fish>;
type c2 = Condition<Bird>;
type c = c1 | c2



// type Exclude<T, U> = T extends U ? never : T;
type MyExclude = Exclude<'1' | '2' | '3', '1' | '2'>

// type Extract<T, U> = T extends U ? T : never;
type MyExtract = Extract<'1' | '2' | '3', '1' | '2'>

// type NonNullable<T> = T extends null | undefined ? never : T
type MyNone = NonNullable<'a' | null | undefined>



function getUser(a: number, b: number) {
  return { name: 'zf', age: 10 }
}
// type ReturnType<T> = T extends (...args: any) => infer R ? R : never
type MyReturn = ReturnType<typeof getUser>


// type Parameters<T> = T extends (...args: infer R) => any ? R : any;
type MyParams = Parameters<typeof getUser>;


class Person {
  constructor(name: string, age: number) { }
}
// type ConstructorParameters<T> = T extends { new(...args: infer R): any } ? R : never
type MyConstructor = ConstructorParameters<typeof Person>

// type InstanceType<T> = T extends { new(...args: any): infer R } ? R : any
type MyInstance = InstanceType<typeof Person>


type ElementOf<T> = T extends Array<infer E> ? E : never;
type TupleToUnion = ElementOf<[string, number, boolean]>;


// 表示要把T1、T2赋予给x，那么x的值就是T1、T2的交集。（参数是逆变的可以传父类）
// TS的类型：TS主要是为了代码的安全性来考虑。所以所有的兼容性问题都要从安全性来考虑!
type T1 = { name: string };
type T2 = { age: number };
type ToIntersection<T> = T extends ([(x: infer U) => any, (x: infer U) => any]) ? U : never;
type t3 = ToIntersection<[(x: T1) => any, (x: T2) => any]>