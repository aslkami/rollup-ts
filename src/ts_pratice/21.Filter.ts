// 保留元组类型T中的A类型

// type Filter<O, T, P extends any[] = []> = O extends [infer L, ...infer R]
//   ? Filter<R, T, L extends T ? [...P, L] : P> : P

type Filter<T extends any[], K, P extends any[] = []> = 
  T extends [infer L, ...infer R] 
    ? Filter<R, K, ([L] extends [K] ? [...P, L] : P)> : P

type A = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']

export { }