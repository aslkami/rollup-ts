// import './enum'
import './class'






type Record<K extends keyof any, T> = { [P in K]: T }
let person: Record<string, any> = { name: 'zf', age: 11 };


function map<T extends keyof any, K, U>(obj: Record<T, K>, callback: (item: K, key: T) => U) {
  let result = {} as Record<T, U>
  for (let key in obj) {
    result[key] = callback(obj[key], key)
  }
  return result
}
const r = map({ name: 'zf', age: 11 }, (item, key) => {
  return item
});


let person1 = {
  name: 'zhufeng',
  age: 11,
  address: '回龙观'
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type OmitAddress = Omit<typeof person1, 'address'>