# 安装tntjs
虽然tntjs是一个更倾向于原生开发的前端框架，但是你仍然可以使用包管理器来安装他们，就像使用其他框架

首先我们需要一个项目目录，假设你在Linux环境下开发，我们来新建`MyFirstTNTJsProject`
```shell
$ mkdir MFTJP #这里是缩写啦
$ cd MFTJP
$ code ./
```

然后我们来安装它
```shell
$ npm install tntjs #npm
$ yarn add tntjs #yarn
$ pnpm install tntjs #pnpm
```
或者你也可以使用cdn上的文件
```url
https://cdn.jsdelivr.net/npm/tntjs@latest/dist/src/index.js
```

现在你就可以用tntjs快乐的控制多页面啦！

# 快速入门
## Hello world

接下来我们来写一个最简单的Hello world,tntjs使用`<v>`来实现响应式变量与页面的双向绑定，也就是说页面上绑定的值会随着变量的改变而变化
```html
<v data="variableName"/>
```
`data`属性里面填写表达式

js部分需要现实例化一个TNTApp
```js
export const app = new TNTApp();
```

然后使用`page`预置页面：
```js
// App.js
export const app = new TNTApp();

app.page({
  data: {
    x: "Hello world!"
  },
  mount: document.getElementById("app")
}, "page")
```
* 每一个html文件都有一个单独的pageid，你可以使用`<page-id>`来在`<head>`中设置它，这是tntjs多页面编程的页面标识符
```html
<page-id>page1</page-id>
```
* 第一项参数中使用data来设置响应式变量的初始值
* 第一项参数使用mount指定tntjs应用的作用域的Element对象(指定的节点只能有一个子节点)

## 响应式变量计算
使用computed来进行响应式变量的计算方式

```js
export const app = new TNTApp();

app.page({
  data: {
    x: "Hello world!"
  },
  mount: document.getElementById("app"),
  computed: {
    number() {
      return data.x + 1
    }
  }
}, "page")
```

这里有几个强调的点：
* tntjs响应式变量的值就存放在`window.data`里，你也可以直接用`data`来访问响应式变量的值
* computed里定义的函数名就是变量名，函数返回的就是他的值，每当某个变量改变了值，这个变量就会被重新计算
* computed里定义的函数计算出的值可以以`data.name`访问

## demo:计数器
现在你已经学会了基本使用，让我们来创建一个计数器，并且判断这个数是奇数还是偶数

<!-- tabs:start -->

### **App.js**
[App.js](../demos/comput/App.js ':include :type=code js')

### **index.html**
[index.html](../demo/../demos/comput/index.html ':include :type=code html')

<!-- tabs: end -->

效果:
<iframe src="../demos/comput/index.html" height="300px"></iframe>


## mounted
当TNTApp加载完毕后将会调用mounted你可以设置
```js
export const app = new TNTApp();

app.page({
  data: {
    x: "Hello world!"
  },
  mounted() {
    console.log("load!");
  },
  mount: document.getElementById("app"),
}, "page")
```

## effect
你可以将`effect`作为主程序使用
```js
export const app = new TNTApp();

app.page({
  data: {
    x: "Hello world!"
  },
  effect() {
    console.log(data.x);
  },
  mount: document.getElementById("app"),
}, "page")
```

当变量`x`改变时,就会调用一次effect,可以监听变量的变化

# 模板语法

## `<t-for>`
`t-for`标签可以循环遍历一个数组并且以"局部响应式变量"的方式来访问
```html
<t-for data="i in array"></t-for>
```
比如我们可以用他打印一个可以自由添加的名单

<!-- tabs:start -->

### **index.html**
[index.html](../demos/t-for-demo/index.html ':include :type=code html')

### **App.js**
[App.js](../demos/t-for-demo/App.js ':include :type=code js')

<!-- tabs:end -->

效果:

<iframe src="../demos/t-for-demo/index.html" height="600px"></iframe>

## 条件判断模板

`<t-if>`以及`<t-else>`和`<t-elif>`用于判断条件

```html
<t-if cond="xxx === xxx"></t-if>
```


<!-- tabs:start -->

### **index.html**
[index.html](../demos/t-if-demo/index.html ':include :type=code html')

### **login.html**
[login.html](../demos/t-if-demo/login.html ':include :type=code html')

### **App.js**
[App.js](../demos/t-if-demo/App.js ':include :type=code js')

<!-- tabs:end -->

我们需要两个页面，那么就用tntjs注册两个吧！

如果用户输入密码正确就回到`index.html`并且传入参数`?login=true`

这里假设账号为`useradmin`,密码为`123456`

```text
温馨提示：请保护好自己的隐私，在现实中密码不能设的那么简单哦！
```

效果：

<iframe src="../demos/t-if-demo/index.html" hieght="300px"></iframe>

## `<t-get>`

`<t-get>`方便用户从后端取得数据并且快捷的用`<v>`渲染到页面上

```html
<t-get src="api" data="?x=233333" type="json">
```

* `src` 指定api
* `data` 附加参数
* `type` 请求数据类型，默认为text,目前可选项有(text | json)

这里我们有一个json文件保存的是Alice的个人信息

<!-- tabs:start -->

### **index.html**
[index.html](../demos/t-get-demo/index.html ':include :type=code html')

### **data.json**
[login.html](../demos/t-get-demo/data.json ':include :type=code json')

### **App.js**
[App.js](../demos/t-get-demo/App.js ':include :type=code js')

<!-- tabs:end -->

效果：

<iframe src="../demos/t-get-demo/index.html" height="120px"></iframe>
