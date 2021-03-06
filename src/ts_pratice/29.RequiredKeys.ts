// 获取对象类型中的必须属性的联合类型
// type ExcludeUndefined<T> = {[K in keyof T]:Exclude<T[K],undefined>}
// export type RequiredKeys<T, K = keyof T> = K extends keyof T ? (undefined extends ExcludeUndefined<T>[K] ? never : K) : never

import { PickOptional } from "./28.PickOptional"
import { OptionalKeys } from '27.OptionalKeys';

export type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>

type a1 = RequiredKeys<{ foo: number | undefined, bar?: string, flag: boolean }>        // foo|flag
type a2 = RequiredKeys<{ foo: number, bar?: string }>                                   // foo
type a3 = RequiredKeys<{ foo: number, flag: boolean }>                                  // foo|flag
type a4 = RequiredKeys<{ foo?: number, flag?: boolean }>                                // never
type a5 = RequiredKeys<{}>                                                              // never

export {}