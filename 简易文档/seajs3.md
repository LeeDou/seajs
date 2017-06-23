# seajs3

## seajs.cache Object

通过seajs.cache，可以查阅当前模块系统中的所有模块信息。

比如打开seajs.org，然后在webkit Developer Tools的Console面板中输入seajs.cache，可以看到：

```
Object
> http: //seajs.org/docs/assets/main.js:x
> https://a.alipayjects.com/jquery/jquery.js:x
> __proto__: object
```

这些就是文档首页用到的模块。展开某一项可以看到模块的具体信息，含义可以参考：cmd模块定义中的module小节。

### seajs.resolve Function

类似require.resolve， 会利用模块系统内部机制对传入的字符串参数进行路径解析。

```
seajs.resolve('jquery');
// => http://path/to/jquery.js

seajs.resolve('./a', 'http://example.com/to/b.js');
// => http://example.com/to/a.js
```

> seajs.resolve 方法不光可以用来调试路径解析是否正确，还可以用在插件开发环境中。









通过seajs.data， 可以看到seajs所有配置以及一些内部变量的值，可用于插件开发。当加载遇到问题时，也可用于调试。

