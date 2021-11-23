function toUpperCase(target: any, key: string) {
  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value.toUpperCase();
    },
    set(newValue) {
      value = newValue
    }
  })
}
function double(target: any, key: string) {
  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value * 2;
    },
    set(newValue) { value = newValue }
  })
}
class Person {
  @toUpperCase
  name: string = 'JiangWen'
  @double
  static age: number = 10;
  getName() {
    return this.name;
  }
}
let person = new Person();
console.log(person.getName(), Person.age)

export { }