/**
 * 发布订阅模式
 */
const { SyncHook } = require("tapable")
class Lesson {
  constructor () {
    this.hooks = {
      arch: new SyncHook(['name'])
    }
  }
  tap() {
    this.hooks.arch.tap('node', name => {
      console.log('node', name);
    })
    this.hooks.arch.tap("react", name => {
      console.log("react", name)
    })
  }
  start() {
    this.hooks.arch.call('saber')
  }
}

let l = new Lesson()
l.tap()
l.start()