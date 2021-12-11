// 首字母大写
type CapitalizeString<T> = T extends `${infer T}${infer R}` ? `${Uppercase<T>}${R}` : T

type a1 = CapitalizeString<'handler'>       // Handler
type a2 = CapitalizeString<'parent'>        // Parent
type a3 = CapitalizeString<233>             // 233

export {}