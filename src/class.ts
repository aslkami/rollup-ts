class Animal {
  static type = '哺乳动物'; // 静态属性
  static getName() { // 静态方法
    return '动物类';
  }
  private _name: string = 'Tom';

  get name() { // 属性访问器
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}

class Cat extends Animal {

}

let c = new Cat()
// console.log(Cat.getName())

export { }