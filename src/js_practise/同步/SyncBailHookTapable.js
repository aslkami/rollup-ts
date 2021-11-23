/**
 * SyncBailHook 的实现
 */
class SyncBailHook {
  constructor(args) {  // args => [name]
    this.tasks = []
  }
  tap(name, fn) {
    this.tasks.push(fn)
  }
  call(...args) {
    let ret
    let index = 0
    do {
      ret = this.tasks[index++](args)
    } while (ret === undefined && index < this.tasks.length)
  }
}

let Sync_Bail_Hook = new SyncBailHook(["name"])
Sync_Bail_Hook.tap('node', name => {
  console.log('node', name);  // node [ 'saber', 'berserker' ]
  return 'stop to learn'
})
Sync_Bail_Hook.tap("react", name => {
  console.log("react", name) // 不执行
})
Sync_Bail_Hook.call('saber', 'berserker')