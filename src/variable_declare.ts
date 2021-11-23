// jquery通过外部CDN方式引入，想在代码中直接使用

// declare const $: (selector: string) => {
//   height(num?: number): void
//   width(num?: number): void
// };
// $('').height()


declare namespace jQuery {
  function ajax(url: string, otpions: object): void;
  namespace fn {
    function extend(obj: object): void
  }
}
jQuery.ajax('/', {});
jQuery.fn.extend({});




// 类型声明文件以.d.ts结尾。默认在项目编译时会查找所有以.d.ts结尾的文件
// jquery.d.ts
declare const $: (selector: string) => {
  height(num?: number): void
  width(num?: number): void
};

declare namespace jQuery {
  function ajax(url: string, otpions: object): void;
  namespace fn {
    function extend(obj: object): void
  }
}









// 编写第三方声明文件
// 配置tsconfig.json
// jquery声明文件

// "moduleResolution": "node",
// "baseUrl": "./",
// "paths": {
//   "*": ["types/*"]
// },

// types/jquery/index.d.ts

declare function jQuery(selector: string): HTMLElement;
declare namespace jQuery {
  function ajax(url: string): void
}
// export = jQuery;


// events模块声明文件
// export type Listener = (...args: any[]) => void;
// export type Type = string | symbol

// export class EventEmitter {
//   static defaultMaxListeners: number;
//   emit(type: Type, ...args: any[]): boolean;
//   addListener(type: Type, listener: Listener): this;
//   on(type: Type, listener: Listener): this;
//   once(type: Type, listener: Listener): this;
// }


// import { EventEmitter } from "zf-events";
// var e = new EventEmitter();
// e.on('message', function (text) {
//   console.log(text)
// })
// e.emit('message', 'hello');


// import $ from 'jquery'  // 只适用于 export default $

// const $ = require('jquery'); // 没有声明文件可以直接使用 require语法

// import * as $ from 'jquery'  // 为了支持 Commonjs规范 和 AMD规范 导出时采用export = jquery

// import $ = require('jquery')  // export = jquery 在commonjs规范中使用


// npm install @types/jquery -S
// 当使用jquery时默认会查找 node_modules/@types/jquery/index.d.ts 文件
// node_modules / jquery / package.json 中的types字段
// node_modules / jquery / index.d.ts
// node_modules /@types/jquery/index.d.ts