// 将字符串类型的元素转换为字符串字面量类型

type TupleToString<T> =  T extends [`${infer L}`, ...infer R] ? `${L}${TupleToString<R>}` : ''

type A = TupleToString<['a', 'b', 'c']> // 'abc'
type B = TupleToString<[]>              // ''
type C = TupleToString<['a']>           // 'a'