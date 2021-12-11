type Equal<T, K> = [T] extends [K] 
  ? [K] extends [T] 
    ? (keyof T extends keyof K ? keyof K extends keyof T ? true : false : false) : false : false;

type A = Equal<any, any> // true
type B = Equal<any, 1> // false
type C = Equal<never, never> // true
type D = Equal<'BFE', 'BFE'> // true
type E = Equal<'BFE', string> // false
type F = Equal<1 | 2, 2 | 1> // true
type G = Equal<{a : number}, {a: number}> // true


export {}