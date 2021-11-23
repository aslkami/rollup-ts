/**
 * SyncHook 的实现
 */
class SyncHook {
  constructor(args) {  // args => [name]
    this.tasks = []
  }
  tap(name, fn) {
    this.tasks.push(fn)
  }
  call(...args) {
    this.tasks.forEach(task => task(args))
  }
}

let Sync_Hook = new SyncHook(["name"])
Sync_Hook.tap('node', name => {
  console.log('node', name);  // node [ 'saber', 'berserker' ]
})
Sync_Hook.tap("react", name => {
  console.log("react", name) // react [ 'saber', 'berserker' ]
})
Sync_Hook.call('saber', 'berserker')