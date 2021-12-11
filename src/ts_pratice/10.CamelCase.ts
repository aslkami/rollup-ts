// 横杠命名转化为驼峰命名

export type CamelCase<T extends string, S extends string = ''> = T extends `${infer L}-${infer R}`
  ? CamelCase<R, `${S}${Capitalize<L>}`> : `${S}${Capitalize<T>}`

type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag