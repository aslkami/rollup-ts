// 获取字符串字面量中的最后一个字符
type LastChar<T, R = never> = T extends `${infer T}${infer R}` ? LastChar<R, T> : R 

// 1. T = 'BFE', R = never => R = 'FE', T = 'BFE'
// 2. T = 'FE', R = 'BFE' => T = 'F', R = 'E'
// 3. T = 'E', R = 'F' => T = 'E', R = ''

type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never

export {}