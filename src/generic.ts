type TArray = <T, K>(tuple: [T, K]) => [K, T];
const getArray: TArray = <T, K>(tuple: [T, K]): [K, T] => {
  return [tuple[1], tuple[0]]
}

// const createClass = <T>(clazz: new (name1: string, age: number) => T): T => {
//   return new clazz(name1, age);
// }
// createClass<Person2>(Person2)