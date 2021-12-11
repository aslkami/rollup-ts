// 字符串转换为元组类型
type StringToTuple<T> =  T extends `${infer F}${infer R}` ? [F, ...StringToTuple<R>] : []

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []

export {}