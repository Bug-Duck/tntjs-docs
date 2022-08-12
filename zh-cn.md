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
* 每一个html文件都有一个单独的pageid，你可以使用`<page-id>`来在`<head>`中设置它
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

## 其他
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

