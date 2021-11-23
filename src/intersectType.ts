interface IPerson1 {
  name: string,
  age: number
}

interface IPerson2 {
  name: number
  age: number
}
type person = IPerson1 & IPerson2
let name!: never
let person: person = { name, age: 11 };  // 两个属性之间 string & number的值为never

export { }