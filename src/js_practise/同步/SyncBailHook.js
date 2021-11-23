/**
 * 除非返回 undefined，不然执行过程中遇到 返回值为非 undefined 的时候会停止
 */
const { SyncBailHook } = require("tapable") 
class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncBailHook(["name"])
    }
  }
  tap() {
    this.hooks.arch.tap("node", name => {
      console.log("node", name)
      return 'stop to learn'
    })
    this.hooks.arch.tap("react", name => {
      console.log("react", name)
    })
  }
  start() {
    this.hooks.arch.call("saber")
  }
}

let l = new Lesson()
l.tap()
l.start()
