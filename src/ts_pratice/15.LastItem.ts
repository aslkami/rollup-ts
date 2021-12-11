// 得到元组类型中的最后一个元素
type LastItem<T> = T extends [...infer F, infer L] ? L : never


type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never


export {}