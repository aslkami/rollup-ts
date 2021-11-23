// 普通类型兼容性
let temp: string | number;
let num!: number;

// temp = num
// num = temp //  Type 'string' is not assignable to type 'number'

// 接口兼容性
interface IAnimal {
  name: string,
  age: number
}
interface IPerson {
  name: string,
  age: number,
  address: string
}
let animal: IAnimal;
let person: IPerson = {
  name: 'zf',
  age: 11,
  address: '回龙观'
};
animal = person;
// person = animal; // 错误 Property 'address' is missing in type 'IAnimal' but required in type 'IPerson'


// 函数兼容性
// 赋值函数的参数要少于等于被赋值的函数
let sum1 = (a: string, b: string) => a + b;
let sum2 = (a: string) => a;
sum1 = sum2
// sum2 = sum1 // Type '(a: string, b: string) => string' is not assignable to type '(a: string) => string'

type sum1 = () => string | number
type sum2 = () => string;

let fn1: sum1;
let fn2!: sum2;
fn1 = fn2;
// fn2 = fn1 // Type 'number' is not assignable to type 'string'


// 协变和逆变
// 函数的参数是逆变的，返回值是协变的 （在非严格模式下函数的参数是双向协变的）
// 通过这个案例可以说明，函数参数可以接收父类，返回值可以返回子类
class Parent {
  address: string = '回龙观'
}
class Child extends Parent {
  money: number = 100
}
class Grandsom extends Child {
  name: string = '吉姆';
}
type Callback = (person: Child) => Child
function execCallback(cb: Callback) { }
let fn = (person: Parent) => new Grandsom;
execCallback(fn);


enum USER1 {
  role = 1
}
enum USER2 {
  role = 1
}
let user1!: USER1
let user2!: USER2
// user1 = user2 // 错误语法 Type 'USER2' is not assignable to type 'USER1'