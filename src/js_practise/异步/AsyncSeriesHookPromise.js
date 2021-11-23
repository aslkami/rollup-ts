/**
 * 异步串行 Promise 版本
 */
const { AsyncSeriesHook } = require("tapable")
class Lesson {
  constructor() {
    this.hooks = {
      arch: new AsyncSeriesHook(["name"])
    }
  }
  tap() {
    this.hooks.arch.tapPromise("node", name => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("node", name)
          resolve()
        }, 4000)
      })
    })
    this.hooks.arch.tapPromise("react", name => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("react", name)
          resolve()
        }, 1000)
      })
    })
  }
  start() {
    this.hooks.arch.promise("saber").then(() => {
      console.log("执行完毕")
    })
  }
}

let l = new Lesson()
l.tap()
l.start()
