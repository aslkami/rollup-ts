// 求两个对象不同的部分
let person1 = {
  name: 'zhufeng',
  age: 11,
  address: '回龙观'
}
let person2 = {
  address: '回龙观',
}
type Diff<T extends object, K extends Object> = Omit<T, keyof K>
type DiffPerson = Diff<typeof person1, typeof person2>


// 求交集
type InterSection<T extends object, K extends object> = Pick<T, Extract<keyof T, keyof K>>
type InterSectionPerson = InterSection<typeof person1, typeof person2>


// Overwrite 属性覆盖
type OldProps = { name: string, age: number, visible: boolean };
type NewProps = { age: string, other: string };
type d = Diff<OldProps, NewProps>
type i = InterSection<NewProps, OldProps>
type Overwrite<T extends object, K extends object, I = Diff<T, K> & InterSection<K, T>> = Pick<I, keyof I>
type ReplaceProps = Overwrite<OldProps, NewProps>


// Merge 对象合并
type Compute<A extends any> = { [K in keyof A]: A[K] };
type Merge<T, K> = Compute<Omit<T, keyof K> & K>;
type MergeObj = Merge<OldProps, NewProps>
export { }