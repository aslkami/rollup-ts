// 找出E类型在元组类型T中的下标
type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (keyof T extends keyof K ? keyof K extends keyof T ? true : false : false) : false : false;

/*倒叙查找，有问题，如果有重复的，得到的index不是第一个出现的index*/
// type FindIndex<T extends any[], K> = T extends [...infer left, infer last] ? Equal<K, last> extends true ? left["length"] : FindIndex<left, K> : never

/*顺序查找*/
export type FindIndex<T extends any[], K, TT extends any[] = []> = T extends [infer L, ...infer R] ? (Equal<L, K> extends true ? TT["length"] : FindIndex<R, K, [...TT, L]>) : never

type index1 = FindIndex<[1, string, 2, 3, 5], string>
type index2 = FindIndex<[1, 2, string, 3, 5], string>
type index3 = FindIndex<[1, 2, 3, string, 5], string>
type index4 = FindIndex<[1, 2, 3, 5, string], string>

type index5 = FindIndex<[any, never, 1, '2', true, true], true>
type index6 = FindIndex<[any, never, 1, '2', false, false], true>

type A = [any, never, 1, '2', true]
type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never

export {}

// https://www.bilibili.com/video/BV1db4y1B7ca?spm_id_from=333.851.dynamic.content.click