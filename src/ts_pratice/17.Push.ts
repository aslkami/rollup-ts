// 在元组类型T中添加新的类型
type Push<T, S> = T extends [...infer O] ? [...O, S] : T

type A = Push<[1,2,3], 4> // [1,2,3,4]
type B = Push<[1], 2> // [1, 2]

export {}