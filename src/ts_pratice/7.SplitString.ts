
// 将字符串字面量类型按照指定字符，分割为元组。无法分割则返回原字符串字面量

type SplitString<S, F extends string, A extends any[] = []> = S extends `${infer L}${F}${infer R}` ? SplitString<R, F, [...A, L]> : [...A, S] 

type A1 = SplitString<'handle-open-flag', '-'>        // ["handle", "open", "flag"]
type A2 = SplitString<'open-flag', '-'>               // ["open", "flag"]
type A3 = SplitString<'handle.open.flag', '.'>        // ["handle", "open", "flag"]
type A4 = SplitString<'open.flag', '.'>               // ["open", "flag"]
type A5 = SplitString<'open.flag', '-'>               // ["open.flag"]


export {}