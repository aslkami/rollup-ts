// 得到对象中的值访问字符串, 其实就是对象转 联合类型

const obj = {
  home: {
    topBar: {
      title: '顶部标题',
      welcome: '欢迎登录'
    },
    bottomBar: {
      notes: 'XXX备案，归XXX所有',
    },
  },
  login: {
    username: '用户名',
    password: '密码'
  }
}

type KEYOF_OBJ = keyof typeof obj // home | login , keyof 就有种 遍历 味道，然后最终以 联合类型返回，下面的 也一样， 只不过递归了而已

type RemoveFirstDot<T> = T extends `.${infer R}` ? R : T
type ObjectAccessPaths<T, P extends string = '', K = keyof T> =
  K extends keyof T ?
    K extends string ? 
      T[K] extends Record<string, any> ?
        ObjectAccessPaths<T[K], `${P}.${K}`>
      : RemoveFirstDot<`${P}.${K}`>
    : never
  : never

type path = ObjectAccessPaths<typeof obj>

// 完成 createI18n 函数中的 ObjectAccessPaths<Schema>，限制函数i18n的参数为合法的属性访问字符串
function createI18n<Schema>(schema: Schema): ((path: ObjectAccessPaths<Schema>) => string) { return [{ schema }] as any }

// i18n函数的参数类型为：home.topBar.title | home.topBar.welcome | home.bottomBar.notes | login.username | login.password
const i18n = createI18n({
  home: {
    topBar: {
      title: '顶部标题',
      welcome: '欢迎登录'
    },
    bottomBar: {
      notes: 'XXX备案，归XXX所有',
    },
  },
  login: {
    username: '用户名',
    password: '密码'
  }
})

i18n('home.topBar.title')           // correct
i18n('home.topBar.welcome')         // correct
i18n('home.bottomBar.notes')        // correct

// i18n('home.login.abc')              // error，不存在的属性
// i18n('home.topBar')                 // error，没有到最后一个属性


export {}

// 简单来说，就是根据如下对象类型：
  /*
  {
    home: {
      topBar: {
        title: '顶部标题',
        welcome: '欢迎登录'
      },
      bottomBar: {
        notes: 'XXX备案，归XXX所有',
      },
    },
    login: {
      username: '用户名',
      password: '密码'
    }
  }
  */
  // 得到联合类型：
  /*
  home.topBar.title | home.topBar.welcome | home.bottomBar.notes | login.username | login.password
  */