# seajs2

## seajs.use Function

用来在页面中加载一个或多个模块。 seajs.use(id, callback?)

```
// 加载一个模块
seajs.use('./a');
// 加载一个模块，在加载完成时，执行回调
seajs.use('./a', function(a){
  a.doSomething();
})
// 加载多个模块，在加载完成时，执行回调
seajs.use(['./a','./b'], function(a, b){
  a.doSomething();
  b.doSomething();
});
```

> 注意： seajs.use 与DOM ready 事件没有任何关系。如果某些操作要确保在DOM ready后执行，需要用jquery等类库来保证。比如：

```
seajs.use(['jquery','./main'], function($, main){
  $(document).ready(function(){
  main.init();
})
})
```

> 注意： use方法的第一个参数一定要有，但可以是null，也可以是一个变量

```
var bootstrap = ['bootstrap.css', 'bootstrap-responsive.css', 'bootstrap.js'];
seajs.use(bootstrap, function(){
  // do something
})
```

