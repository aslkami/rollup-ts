// 复制字符T为字符串类型，长度为C

// type RepeatString<
//   T extends string,
//   C extends number,
//   A extends string[] = [T]
//   > = C extends 0 ? '' : A['length'] extends C ? T : `${T}${RepeatString<T, C, [...A, T]>}`


type RepeatString<
  T extends string,
  C extends number,
  A extends 42[] = [],
  R extends string = ''
> = A['length'] extends C
  ? R
  : RepeatString<T, C, [42, ...A], `${T}${R}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''

export { }