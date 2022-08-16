# Install tntjs
Although tntjs is a more native front-end framework, you can still install them using a package manager just like any other framework

First we need a project directory, assuming you are developing in a Linux environment, let's create a new `MyFirstTNTJsProject`
```shell
$ mkdir MFTJP #here is the abbreviation
$ cd MFTJP
$ code ./
```

Then let's install it
```shell
$ npm install tntjs #npm
$ yarn add tntjs #yarn
$ pnpm install tntjs #pnpm
```
Or you can also use the files on the cdn
```url
https://cdn.jsdelivr.net/npm/tntjs@latest/dist/src/index.js
```

Now you can happily control multiple pages with tntjs!

# quick start
## Hello world

Next, let's write the simplest Hello world. tntjs uses `<v>` to realize the two-way binding of responsive variables and pages, that is to say, the value bound on the page will change as the variable changes.
```html
<v data="variableName"/>
```
Fill in the expression in the `data` attribute

The js part needs to instantiate a TNTApp
```js
export const app = new TNTApp();
```

Then use `page` to preset the page:
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
* Each html file has a separate pageid, you can use `<page-id>` to set it in `<head>`, which is the page identifier for tntjs multi-page programming
```html
<page-id>page1</page-id>
```
* Use `data` in the first parameter to set the initial value of the responsive variable
* The first parameter uses `mount` to specify the Element object of the scope of the tntjs application (the specified node can only have one child node)

## Responsive variable calculation
Use computed to calculate reactive variables

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

Here are a few highlights:
* The value of the tntjs reactive variable is stored in `window.data`, you can also use `data` to access the value of the reactive variable directly
* The function name defined in computed is the variable name, and the function returns its value. Whenever a variable changes its value, the variable will be recalculated
* The value calculated by the function defined in computed can be accessed as `data.name`

## demo:counter
Now that you've learned the basics, let's create a counter and determine if the number is odd or even

<!-- tabs:start -->

### **App.js**
[App.js](../demos/comput/App.js ':include :type=code js')

### **index.html**
[index.html](../demo/../demos/comput/index.html ':include :type=code html')

<!-- tabs: end -->

Effect:
<iframe src="../demos/comput/index.html" height="300px"></iframe>


## mounted
When TNTApp is loaded, mounted will be called. You can set
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
You can use `effect` as the main program
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

When the `x` changes, the effect will be called once, which can monitor the change of the variable

# Template syntax

## `<t-for>`
The `t-for` tag can loop through an array and access it as a "local reactive variable"

```html
<t-for data="i in array"></t-for>
```

For example, we can use him to print a list that can be added freely

<!-- tabs:start -->

### **index.html**
[index.html](../demos/t-for-demo/index.html ':include :type=code html')

### **App.js**
[App.js](../demos/t-for-demo/App.js ':include :type=code js')

<!-- tabs:end -->

Effect:

<iframe src="../demos/t-for-demo/index.html" height="600px"></iframe>

## Conditional judgment template

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

We need two pages, so register two with tntjs!

If the user enters the correct password, go back to `index.html` and pass the parameter `?login=true`

Here it is assumed that the account is `useradmin` and the password is `123456`

````text
Reminder: Please protect your privacy. In reality, the password cannot be set so simple!
````

Effect:

<iframe src="../demos/t-if-demo/index.html" hieght="300px"></iframe>

## `<t-get>`

`<t-get>` is convenient for users to get data from the backend and quickly render it on the page with `<v>`

```html
<t-get src="api" data="?x=233333" type="json">
```

* `src` specifies the api
* `data` additional parameters
* `type` request data type, the default is text, the current options are (text | json)

Here we have a json file that holds Alice's personal information

<!-- tabs:start -->

### **index.html**
[index.html](../demos/t-get-demo/index.html ':include :type=code html')

### **data.json**
[login.html](../demos/t-get-demo/data.json ':include :type=code json')

### **App.js**
[App.js](../demos/t-get-demo/App.js ':include :type=code js')

<!-- tabs:end -->

Effect:

<iframe src="../demos/t-get-demo/index.html" height="120px"></iframe>
