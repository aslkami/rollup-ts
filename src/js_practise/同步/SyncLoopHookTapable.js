/**
 * SyncLoopHook 的实现
 */
class SyncLoopHook {
  constructor(args) {
    // args => [name]
    this.tasks = []
  }
  tap(name, fn) {
    this.tasks.push(fn)
  }
  call(...args) {
    let ret
    this.tasks.forEach(task => {
      do {
        ret = task(args)
      } while (ret !== undefined);
    })
  }
}

let Sync_Loop_Hook = new SyncLoopHook(["name"])
let total = 0
Sync_Loop_Hook.tap("node",  name => {
  console.log("node", name)
  return ++total === 3 ? undefined : '继续学node'
})
Sync_Loop_Hook.tap("react",  name => {
  console.log("react", name)
})
Sync_Loop_Hook.tap("vue",  name => {
  console.log("vue", name)
})
Sync_Loop_Hook.call("saber", "berserker")
