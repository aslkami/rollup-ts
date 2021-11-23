/**
 * SyncWaterfallHook 的实现
 */
class SyncWaterfallHook {
  constructor(args) {
    // args => [name]
    this.tasks = []
  }
  tap(name, fn) {
    this.tasks.push(fn)
  }
  call(...args) {
    let [first, ...others] = this.tasks
    let ret = first(args)
    others.reduce((prev, next) => {
      return next(prev)
    }, ret)
  }
}

let Sync_Waterfall_Hook = new SyncWaterfallHook(["name"])
Sync_Waterfall_Hook.tap("node", name => {
  console.log("node", name)
  return "学习完node，学react"
})
Sync_Waterfall_Hook.tap("react", data => {
  console.log("react", data)
  return "学习完react，学vue"
})
Sync_Waterfall_Hook.tap("vue", data => {
  console.log("vue", data)
})
Sync_Waterfall_Hook.call("saber", "berserker")
