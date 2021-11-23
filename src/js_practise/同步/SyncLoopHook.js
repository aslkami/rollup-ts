/**
 * 不返回 undefined 的时候 一直执行该函数，直到返回值为 undefined 为止
 */
const { SyncLoopHook } = require("tapable") 
class Lesson {
  constructor() {
    this.index = 0
    this.hooks = {
      arch: new SyncLoopHook(["name"])
    }
  }
  tap() {
    this.hooks.arch.tap("node", name => {
      console.log("node", name)
      return ++this.index === 3 ? undefined : '继续学习node'
    })
    this.hooks.arch.tap("react", name => {
      console.log("react", name)
    })
    this.hooks.arch.tap("vue", name => {
      console.log("vue", name)
    })
  }
  start() {
    this.hooks.arch.call("saber")
  }
}

let l = new Lesson()
l.tap()
l.start()
