// 驼峰命名转横杠命名

type RemoveFirst<T> = T extends `-${infer L}` ? L : T
type KebabCase<T extends string, S extends string = ''> = T extends `${infer L}${infer R}` 
  ?  KebabCase<R, `${S}${L extends Uppercase<L> ? `-${Lowercase<L>}` : L}`> : RemoveFirst<S>

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag

export {}