/**
 * 异步串行的计数器思想实现
 */
class AsyncSeriesHook {
  constructor(args) {
    // args => [name]
    this.index = 0
    this.tasks = []
  }
  tapAsync(name, fn) {
    this.tasks.push(fn)
  }
  callAsync(...args) {
    let finalCallbcak = args.pop()
    let next = () => {
      if (this.index === this.tasks.length) {
        return finalCallbcak()
      }
      this.tasks[this.index++](args, next)
    }
    next()
  }
}

let ASync_Series_Hook = new AsyncSeriesHook(["name"])
ASync_Series_Hook.tapAsync("node", (name, callback) => {
  setTimeout(() => {
    console.log("node", name)
    callback()
  }, 3000)
})
ASync_Series_Hook.tapAsync("react", (name, callback) => {
  setTimeout(() => {
    console.log("react", name)
    callback()
  }, 1000)
})
ASync_Series_Hook.callAsync("saber", "berserker", () => {
  console.log("执行完毕")
})
