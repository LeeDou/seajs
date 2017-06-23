# seajs 

## seajs.config Object

### alias Object

别名配置，配置之间可在模块中使用require调用 require（‘jQuery’);

```
seajs.config({
  alias: {'jquery': 'jquery/jquery2.0'}
});
```

```
define(function(require, exports, module){
  // 引用jQuery模块
  var $ = require('jquery');
});
```

### path Object

设置路径，方便跨目录调用。通过灵活设置path可以在不影响base的情况下指定到某个目录。

```
seajs.config({
  // 设置路径
  paths : {
    'gallery': 'https://a.alipayobjects.com/gallery'
  },
  // 设置别名，方便调用
  alias: {
    'underscore':'gallery/underscore'
  }
});
```

```
define(function(require, exports, module){
  var require('underscore');
  // => 加载的是 http://a.https://a.alipayobjects.com/gallery
})
```

### vars  Object

变量配置。有些场景下，模块路径在运行时才能确定，这时可以使用vars 变量来配置。vars 配置的是模块标识中的变量值，在模块标识中用{{key}}来表示变量。

```
seajs.config({
  // 变量配置
  vars: {
  'locale': 'zh-ch'
  }
});
```

```
define(function(require, exports,module) {
  var lang = require('./i18n/{locale}.js');
  // 加载的是path/to/il8n/zh-cn.js
})
```

### map Array

该配置可对模块路径进行映射修改，可用于路径转换、在线调试等。

```
seajs.config({
  map:[
    ['.js', '-debug.js']
  ]
})
```

```
define(function(require, exports, module){
  var a = require('./a');
  // => 加载的是path/to/a-debug.js
})
```

### preload Array

使用preload配置项，可以在普通模块加载前，提前加载并初始化好指定模块。

> preload 中的字符串会被忽略掉。

```
// 在老浏览器中，提前加载好es5 和 json模块
seajs.config({
  preload: [
    Function.prototype.bind ? '' : 'es5-safe',
    this.JSON ? '' : 'json'
  ]
});
```

> 注意： preload中的配置，需要等到use时才加载。比如：

```
seajs.config({
  preload: 'a'
});
// 在加载 b 之前，会确保模块 a 已经加载并执行好
seajs.use('./b');
```

> preload 配置不能放在模块文件里面：

```
seajs.config({
  preload: 'a'
});

define(function(require, exports){
  // 此处执行时，不能保证模块 a 已经加载并执行好
});
```

### debug Boolean

值为true 时，加载器不会删除动态插入的script标签。插件也可以根据debug配置，来决策log等信息的输出。

### base String

sea.js 在解析顶级标识时，会相对base路径来解析。

> 注意：一般不要配置base路径，把sea.js放在合适的路径往往更简单一致。

charset String | Function

获取文件时，<scrript>或<link>标签的charset属性。默认是utf-8

charset 还可以是一个函数：

```
seajs.config({
  charset: function(url){
  // *** 目录下的文件用gbk 编码加载
  if (url.indexOf('http://example.com/js/***') === 0){
    return 'gbk';
  }
  // 其他文件用 utf-8 编码
  return 'utf-8';
}
});
```

