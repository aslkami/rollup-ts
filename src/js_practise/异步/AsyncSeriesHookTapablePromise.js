/**
 * 异步串行的 Promise 实现
 */
class AsyncSeriesHook {
  constructor(args) {
    // args => [name]
    this.index = 0
    this.tasks = []
  }
  tapPromise(name, fn) {
    this.tasks.push(fn)
  }
  promise(...args) {
    let [first, ...others] = this.tasks
    return others.reduce((prev_promise, next_promise) => {
      return prev_promise.then(() => next_promise(args))
    }, first(args))
  }
}

let ASync_Parallel_Hook = new AsyncSeriesHook(["name"])
ASync_Parallel_Hook.tapPromise("node", name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("node", name)
      resolve()
    }, 4000)
  })
})
ASync_Parallel_Hook.tapPromise("react", name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("react", name)
      resolve()
    }, 2000)
  })
})
ASync_Parallel_Hook.promise("saber", "berserker").then(() => {
  console.log("执行完毕")
})
