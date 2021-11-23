export namespace zoo {
  export class Dog { eat() { console.log('zoo dog'); } }
  export namespace bear {
    export const name = '熊'
  }
}
console.log(zoo.bear.name);