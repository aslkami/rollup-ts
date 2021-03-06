// 保留一个对象中的必须属性
// type ExcludeUndefined<T>= {[K in keyof T]:Exclude<T[K],undefined>}
// type OptionalKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ?never :  K) : never

import { RequiredKeys } from "./29.RequiredKeys"


// export type PickRequired<T> = Pick<T,OptionalKeys<T>>;
type PickRequired<T> = Pick<T, RequiredKeys<T>>

type a1 = PickRequired<{ foo: number | undefined, bar?: string, flag: boolean }>        // {foo:number|undefined,flag:boolean}
type a2 = PickRequired<{ foo: number, bar?: string }>                                   // {foo:number}
type a3 = PickRequired<{ foo: number, flag: boolean }>                                  // {foo:number,flag:boolean}
type a4 = PickRequired<{ foo?: number, flag?: boolean }>                                // {}
type a5 = PickRequired<{}>                                                              // {}

export {}