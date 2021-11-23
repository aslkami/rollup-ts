/**
 * 异步串行
 */
const { AsyncSeriesHook } = require("tapable")
class Lesson {
  constructor() {
    this.hooks = {
      arch: new AsyncSeriesHook(["name"])
    }
  }
  tap() {
    this.hooks.arch.tapAsync("node", (name, callback) => {
      setTimeout(() => {
        console.log("node", name)
        callback()
      }, 1000)
    })
    this.hooks.arch.tapAsync("react", (name, callback) => {
      setTimeout(() => {
        console.log("react", name)
        callback()
      }, 1000)
    })
  }
  start() {
    this.hooks.arch.callAsync("saber", () => {
      console.log("执行完毕")
    })
  }
}

let l = new Lesson()
l.tap()
l.start()
