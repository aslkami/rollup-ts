// 装包
type Proxy<T> = {
  get(): T,
  set(value: T): void
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
let props = {
  name: 'zhufeng',
  age: 11
}
function proxify<T>(obj: T): Proxify<T> {
  let result = {} as Proxify<T>;
  for (let key in obj) {
    let value = obj[key];
    result[key] = {
      get() {
        return value
      },
      set: (newValue) => value = newValue
    }
  }
  return result
}
let proxpProps = proxify(props);


// 拆包
function unProxify<T>(proxpProps: Proxify<T>): T {
  let result = {} as T;
  for (let key in proxpProps) {
    let value = proxpProps[key];
    result[key] = value.get()
  }
  return result
}
let proxy = unProxify(proxpProps)