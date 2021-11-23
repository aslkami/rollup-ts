/**
 * 异步串行的 Promise 实现
 */
class AsyncParallelHook {
  constructor(args) {
    // args => [name]
    this.index = 0
    this.tasks = []
  }
  tapPromise(name, fn) {
    this.tasks.push(fn)
  }
  promise(...args) {
    let map = this.tasks.map(task => task(args))
    return Promise.all(map)
  }
}

let ASync_Parallel_Hook = new AsyncParallelHook(["name"])
ASync_Parallel_Hook.tapPromise("node", name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("node", name)
      resolve()
    }, 3000)
  })
})
ASync_Parallel_Hook.tapPromise("react", name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("react", name)
      resolve()
    }, 1000)
  })
})
ASync_Parallel_Hook.promise("saber", "berserker").then(() => {
  console.log("执行完毕")
})
