// 2、FirstChar

type FirstChar<T> = T extends `${infer T}${any}` ? T : never

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never

export {}