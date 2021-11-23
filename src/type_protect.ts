// 1. typeof 
function double(val: number | string) {
  if (typeof val === 'number') {
    val
  } else {
    val
  }
}

// 2. instanceof
class Cat { }
class Dog { }

const getInstance = (clazz: { new(): Cat | Dog }) => {
  return new clazz();
}
let r = getInstance(Cat);
if (r instanceof Cat) {
  r
} else {
  r
}

// 3. in 类型保护
interface Fish {
  swiming: string,
}
interface Bird {
  fly: string,
  leg: number
}
function getType(animal: Fish | Bird) {
  if ('swiming' in animal) {
    animal // Fish
  } else {
    animal // Bird
  }
}


// 4. 可辨识联合类型
interface WarningButton {
  class: 'warning'
}
interface DangerButton {
  class: 'danger'
}
function createButton(button: WarningButton | DangerButton) {
  if (button.class == 'warning') {
    button // WarningButton
  } else {
    button // DangerButton
  }
}

// 5. null 保护
const addPrefix = (num?: number) => {
  num = num || 1.1;
  function prefix(fix: string) {
    return fix + num?.toFixed()
  }
  return prefix('zf');
}
console.log(addPrefix());




// 6. 自定义类型保护
interface Fish {
  swiming: string,
}
interface Bird {
  fly: string,
  leg: number
}
function isBird(animal: Fish | Bird): animal is Bird {
  return 'swiming' in animal
}
function getAniaml(animal: Fish | Bird) {
  if (isBird(animal)) {
    animal
  } else {
    animal
  }
}

// 7. 完整性保护
interface ICircle {
  kind: 'circle',
  r: number
}
interface IRant {
  kind: 'rant',
  width: number,
  height: number
}
interface ISquare {
  kind: 'square',
  width: number
}
type Area = ICircle | IRant | ISquare
const isAssertion = (obj: never) => { }
const getArea = (obj: Area) => {
  switch (obj.kind) {
    case 'circle':
      return 3.14 * obj.r ** 2
    default:
    // return isAssertion(obj); // 必须实现所有逻辑
  }
}

export { }