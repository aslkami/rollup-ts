/**
 * 异步并行的循环实现
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
  callAsync(...args) {
    let finalCallbcak = args.pop()
    let done = () => {
      this.index++
      if(this.index === this.tasks.length) {
        finalCallbcak()
      }
    }
    this.tasks.forEach(task => {
      task(args, done)
    })
  }
}

let ASync_Parallel_Hook = new AsyncParallelHook(["name"])
ASync_Parallel_Hook.tapPromise("node", (name, callback) => {
  setTimeout(() => {
    console.log("node", name)
    callback()
  }, 4000)
})
ASync_Parallel_Hook.tapPromise("react", (name, callback) => {
  setTimeout(() => {
    console.log("react", name)
    callback()
  }, 1000)
})
ASync_Parallel_Hook.callAsync("saber", "berserker", () => {
  console.log('执行完毕');
})
