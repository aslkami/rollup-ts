interface ICounter {
  (): number; // 限制函数类型
  count: 0 // 限制函数上的属性
}
let fn: any = () => {
  fn.count++;
  return fn.count;
}
fn.count = 0;
let counter: ICounter = fn;


interface Clazz {
  new(name: string): any
}
function createClass(target: Clazz, name: string) {
  return new target(name); // 传入的是一个构造函数
}
class Animal {
  constructor(public name: string) {
    this.name = name;
  }
}
let r = createClass(Animal, 'Tom');
let a = new Animal('age')

export { }