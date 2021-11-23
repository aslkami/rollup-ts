/**
 * 上一个执行结果的返回值，作为下一个函数的参数
 */
const { SyncWaterfallHook } = require("tapable")
class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncWaterfallHook(["name"])
    }
  }
  tap() {
    this.hooks.arch.tap("node", name => {
      console.log("node", name)
      return "学习完node，学react"
    })
    this.hooks.arch.tap("react", name => {
      console.log("react", name)
      return "学习完react，学vue"
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
