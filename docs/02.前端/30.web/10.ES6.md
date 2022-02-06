---
title: ES6
date: 2022-02-06 16:40:32
permalink: /pages/40d285/
---
# ES6 整理最新

> 参考文章：[ES6 入门教程](https://es6.ruanyifeng.com/#README)
>
> 个人看法：因前端技术更新速度过快，实体书内容已部分过时，所以建议直接看电子版。如果想支持下阮一峰老师还是可以买一本的。
>
> 参考文章：[1.5万字概括ES6全部特性(已更新ES2020)](https://juejin.cn/post/6844903959283367950)
>



## 基本概念和版本兼容

**概念**

ES6 既是一个历史名词，也是一个泛指。

历史名词指的是 ES2015 版本，而泛指则是 ES2015 及之后的所有版本。

**版本兼容情况**：[Juriy Zaytsev | ECMAScript兼容性表格](https://kangax.github.io/compat-table/es5/)



**ES6 语法转 ES5 （提高兼容性）**

> 目的：提高代码的兼容性，使代码支持低端浏览器。需要的第三方工具为 **babel**。

**1.建立工程目录**

（1）建立一个空的工程目录 `ES6Demo`，并在目录下建立两个文件夹 `src`和 `dist`：

- `src`：书写 ES6 代码，我们写的 javascript 程序都放在这里。
- `dist`：利用 Babel 编译生成的 ES5 代码。**我们在 HTML 页面需要引入 dist 里的 javascript 文件**。

（2）在 src 里新建文件 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <!-- 我们引入 ES5 中的 javascript 文件，而不是引入 ES6 中的 javascript 文件。 -->
        <script src="./dist/index.javascript"></script>
    </head>
    <body></body>
</html>
```

注意：引入的是`dist`目录下的 javascript 文件。因为打包并不会动态修改引入的目录



**2.安装第三方插件**

**全局安装 babel-cli**

```bash
	npm install -g babel-cli
```

**局部安装 babel-preset-es2015 和 babel-cli**

```bash
	npm install --save-dev babel-preset-es2015 babel-cli
```



**3.配置文件 .babelrc**

```bash
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```



**4.配置命令行操作**

在文件 `package.javascripton` 中修改键 `scripts`内容。

注释：命令行操作或者查看都在这里配置或查看。

```bash
  "scripts": {
    "build": "babel src/index.javascript -o dist/index.javascript"
  },
```



## 1 变量声明(const & let)

> 重点掌握：const & let 的使用和特点，`var` 的缺点。

ES5 中，使用 `var` 定义变量（ `var` 是 variable 的简写）。

ES6 中，新增了 let 和 const 来定义变量：

- `let`：定义**变量**，替代 `var`。
- `const`：定义**常量**（定义后，不可修改）。



let/const 声明的特点

* **只在声明所在的块级作用域内有效**

* **不存在变量提升**

> 变量提升：变量可以在声明之前使用，值为`undefined`。
>
> 知识补充：
>
> 变量提升原理：https://juejin.cn/post/6844903607066689550
>
> 简述：javascript引擎 会在正式执行代码之前进行一次”**预编译**“，预编译简单理解就是在内存中开辟一些空间，存放一些变量和函数。（变量提升和函数提升原理)
>
> 脚本文件加载流程：加载代码 - 语法分析 - 预编译 - 执行代码
>
> 函数的提升是直接将整个函数整体提升到作用域的最开始位置。

* **暂时性死区**

> 在代码块内，使用`let` / `const` 命令声明变量之前，该变量都是不可用的。

* **不可重复声明**

> 不允许在相同作用域内，重复声明同一个变量。



const 常量声明补充

**特性**

* `const`声明一个只读的常量。一旦声明，常量的值就不能改变。

* `const` 必须初始化值，否则会报错。

```javascript
const foo;// SyntaxError: Missing initializer in const declaration
```



**const本质**

JavaScript栈内存和堆内存存储示意图：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img461976-20180823211511434-1707579794.png)



**对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针。**

**所以简单数据类型保证值不变，对象保证指针不变即可**。

关于 const 的使用规则：**能使用 const 就使用 const。** 



## 2 块级作用域和顶层对象

### 2.1 块级作用域

**为什么需要块级作用域？**

ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

场景一：变量提升导致覆盖变量

```javascript
var tmp = new Date();
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}
f(); // undefined
```

场景二：函数循环变量泄露为全局变量

```javascript
var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i); // 5
```



**ES6 块级作用域**

> 任何一对花括号（｛和｝）中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。
>
> **备注：从上面对块级作用域的定义可以知道，() 中的代码也是块级作用域，且优先级比 {} 要高。**

块级作用域的出现使得匿名立即执行函数表达式（匿名 IIFE）不再必要了。

匿名 IIFE：

```javascript
// IIFE 写法
(function () {  var tmp = ...;  ...}());
// 块级作用域写法
{  let tmp = ...;  ...}
```

**备注：这可能在上古代码中频繁出现。**



**在严格模式下，变量声明和函数声明都只能在当前作用域的顶层**。

> 关于当前作用域顶层的解释：[什么是作用域顶层？](https://blog.csdn.net/weixin_37745913/article/details/96977595)
>
> 作用域的顶层一般是指执行体层而不是判断体层

特殊案例：没有花括号则不存在作用域的顶层

```javascript
// 第一种写法，报错
if (true) let x = 1;
if (true) const x = 1;
// 第二种写法，不报错
if (true) {  let x = 1;}
if (true) {  const x = 1;}
```

**条件语句的作用域结构**：



<img src="https://img-blog.csdnimg.cn/20190723114012556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNzc0NTkxMw==,size_16,color_FFFFFF,t_70" alt="img" style="zoom: 67%;" />





### 2.2 顶层对象

**顶层对象属性**

顶层对象，在浏览器环境指的是`window`对象，在 Node 指的是`global`对象。ES5 之中，顶层对象的属性与全局变量是等价的。



**ES6 的改动**

* `var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性。

* `let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。

```javascript
var a = 1;window.a // 1
let b = 1;window.b // undefined
```

**总结：在全局作用域中，还是不要使用函数声明（function） 比较好。使用函数表达式（let/const）。**



**globalThis 顶层对象**

解决方案：

```javascript
// 方法一 能力检测
(typeof window !== 'undefined'
      ? window
      : typeof process === 'object' && typeof require === 'function' && typeof global === 'object'
      ? global
      : this;)
// 方法二 (推荐) 能力检测
var getGlobal = function () {  
    if (typeof self !== 'undefined') { return self; } 
    if (typeof window !== 'undefined') { return window; }  
    if (typeof global !== 'undefined') { return global; }  
    throw new Error('unable to locate global object');
	};
```



设计原理：

顶层对象在各种实现环境里面是不统一的。

- 浏览器里面，顶层对象是`window`，但 Node 和 Web Worker 没有`window`。
- 浏览器和 Web Worker 里面，`self`也指向顶层对象，但是 Node 没有`self`。
- Node 里面，顶层对象是`global`，但其他环境都不支持。





## 3 解构赋值

> 在ES6中可以从数组和对象中提取值，对变量进行赋值，称为解构赋值。

**解构赋值的分类：**

* 数组的解构赋值

* 对象的解构赋值

* 字符串，数字和布尔值的解构赋值

* 函数参数的解构赋值



**对象和数组的解构赋值特点：**

1、未匹配到内容为 `undefined`，称为不完全解构。

2、允许指定默认值。结合特点一也可以理解为默认值是undefined，但需要**注意的是null 不等于 undefined**。

举例：

```javascript
let [x = 1] = [undefined];
console.log(x) // 1
let [y = 1] = [null];
console.log(y)// null
```



### 3.1 数组

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
// 可用于嵌套情况
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo) // 1
console.log(bar) // 2
console.log(baz) // 3
let [x, y, ...z] = ['a']; 
console.log(x) // a
console.log(y) // undefinded
console.log(z) // []
```



### 3.2 对象

```javascript
// 变量名一致
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
// 变量名不一致
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
```

**解析：在解构赋值中，foo是匹配的模式（匹配的属性），baz才是变量。真正被赋值的是变量baz，而不是模式foo。**



**特殊情况需注意：**

```javascript
// 错误的写法
let x;
{x} = {x: 1};// SyntaxError: syntax error
// 正确的写法
let x;
({x} = {x: 1});
```

**难点： JavaScript 引擎会将`{x}`理解成一个代码块，从而发生语法错误。大括号写在行首，JavaScript 就会将其解释为代码块。**



###  3.3 字符串、数值和布尔值

**字符串**

对字符串解构赋值，字符串被转换成了一个类似数组的对象。

```javascript
const [a, b, c, d, e] = 'hello';
console.log(a) // h
console.log(b) // e
console.log(c) // l
console.log(d) // l
console.log(e) // o
```

类数组的对象都有一个`length`属性，因此还可以对这个属性解构赋值。

```javascript
let {length : len} = 'hello';
console.log(len) // 5
```



**数值和布尔值**

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```javascript
let {toString: s} = 123;s === Number.prototype.toString // true
let {toString: s} = true;s === Boolean.prototype.toString // true
```



**总结：解构赋值的规则**

> 只要等号右边的值不是对象或数组，就先将其转为对象。由于`undefined`和`null`无法转为对象，所以对它们进行解构赋值，都会报错。

```javascript
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```



### 3.4 函数参数

函数的参数支持解构赋值，如果是对象或者数组也支持默认值。

```javascript
function move({ x = 0, y = 0 } = {}) { return [x, y]; }
console.log(move({ x: 3, y: 8 })); // [3,8]
console.log(move({ x: 3 })); // [3,0]
console.log(move({})); //[0,0]
console.log(move()); //[0,0]
```



### 3.5 圆括号的问题

> ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

**不可以使用圆括号的三种情况**

**1.变量声明语句**

```javascript
// 全部报错
let [(a)] = [1];
let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};
let { o: ({ p: p }) } = { o: { p: 2 } };
```

**2.函数参数**

函数参数也属于变量声明，因此不能带有圆括号。

```javascript
function f([(z)]) { return z; }// 报错
function f([z,(x)]) { return x; }// 报错
```

**3.赋值语句的模式**

```javascript
// 全部报错
({ p: a }) = { p: 42 };([a]) = [5];
// 部分放入括号中也不行
[({ p: a }), { x: c }] = [{}, {}];
```



**重点：**

**可以使用圆括号的一种情况**

赋值语句的非模式部分，可以使用圆括号。

```javascript
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
```

**总结：记能使用园括号的情况即可,即只有值可以用圆括号。**



## 4 字符串

### **4.1 拓展**

* **Unicode表示法**：`大括号包含`表示Unicode字符(`\u{0xXX}`或`\u{0XXX}`)
* 为字符串添加了 Iterator（遍历器接口），可以使用for ... of 遍历
* 模板字符串
* 标签模板
* 对 U+2028（行分隔符） 和 U+2029（段分隔符） 进行校正。（ES2019)
* 修复 `JSON.stringify()` 的行为。(ES2019)



#### 模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识。

**模板字符串的使用规则**

* **表示反引号则使用转义字符**

```javascript
let greeting = `\`Yo\` World!`;
```

* **表示多行字符串，所有的空格和缩进都会被保留在输出之中**
* **变量和表达式放在 `${}` 中**
* **可以嵌套使用**

```javascript
const tmpl = addrs => `  <table>  ${addrs.map(addr => `    <tr><td>${addr.first}</td></tr>    <tr><td>${addr.last}</td></tr>  `).join('')}  </table>`;
```



实战用途：

* 普通字符串
* 多行字符串
* 字符串中嵌入变量

```javascript
// 普通字符串
`In JavaScript '\n' is a line-feed.`
// 多行字符串
`In JavaScript this is not legal.`console.log(`string text line 1string text line 2`);
// 字符串中嵌入变量
let name = "Bob", time = "today";`Hello ${name}, how are you ${time}?`
```



#### 标签模板

可以理解为函数调用的特殊形式

```js
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
```



### 4.2 新增方法

* **`String.fromCodePoint`** ：返回码点的对应字符，取代之前的`String.fromCharCode()`。
* **`codePointAt()`**：返回字符对应的码点。取代之前的`charCodeAt()`。
* **`String.raw()`**：返回一个斜杠被转义的字符，通常用于处理模板字符串。

```js
String.raw`Hi\\n` === "Hi\\\\n" 
```

* **`normalize()`**：字符 Unicode 正规化。
* **`includes(), startsWith(), endsWith()`**：查找方法，均返回布尔值，分别表示是否包含，是否开头，是否结尾。
* **`repeat()`**：重复字符串。
* **`padStart()，padEnd() `**：补全字符串。用途如下

```js
 // 数值补全指定位数
'123456'.padStart(10, '0') // "0000123456"
// 提示字符串格式
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12" 
```

* **`trimStart()，trimEnd()`**：和trim() 相同，用于去除空格。（ES2019)
* **`replaceAll()`**：替换全部，相当于replace()的拓展，replece要替换全部必须使用正则模式。
* **`at()`**：同数组 at 方法。（ES2021)



## 5 数值

* 二进制（0b）和八进制（0o）表示法。
* **`Number.isFinite(), Number.isNaN()`**：是否有限和是否非数值。
* **`Number.parseInt(), Number.parseFloat()`**，同全局`parseInt()`和`parseFloat()`。主要是为了功能模块化。
* **`Number.isInteger`**：是否为整数。
* **`Number.EPSILON`**：浮点数运算的最小误差。
* **`Number.MAX_SAFE_INTEGER`、`Number.MIN_SAFE_INTEGER` 和`Number.isSafeInteger()`**：安全整数上下限和是否在该范围内。
* 数值分隔符 `_` (ES2021)



Math拓展：

用到就自己查，常用了也就上下取整和随机数。

https://www.w3school.com.cn/jsref/jsref_obj_math.asp



## 6 函数

* 可指定参数的默认值。
* rest 参数（形式为`...变量名`），用于获取函数的多余参数。主要是替换原有的arguments对象（类数组），且rest参数是一个数组。
* 函数内部可以有严格模式。
* 新增name属性，返回函数名。
* 箭头函数（重点）。
* 函数参数允许尾逗号。
* `toString()` 方法可以返回注释。
* 尾调用优化。底层调用优化调用栈。只有 Safari 浏览器支持尾调用优化，Chrome 和 Firefox 都不支持。
* `try ... catch` 允许省略catch的参数。（ES2019)



### 箭头函数

ES6 允许使用「箭头」（=>）定义函数

```js
//普通函数写法
let fn = function(a,b){};
//箭头函数写法
let fn = (a,b) =>{}
```



下面为箭头函数的优化：

* 只有一个参数时可以省略圆括号。

```js
var f = v => v
```

* 执行语句为一句时，可以省略括号，且默认返回值为该执行语句的返回值。

```js
var f = v => {return 5+4}
var f = v => 5+4
console.log(f()) // 9
```

* 返回`{}`就要用圆括号包裹。因为JavaScript引擎无法识别是代码块还是对象。

```js
let getTempItem = id => { id: id, name: "Temp" };// 报错
let getTempItem = id => ({ id: id, name: "Temp" });// 不报错
```

* 不需要返回值则使用 voild 运算符即可。

```
let fn = void () => {};
```



**注意点**

1. this指向是静态的，this始终指向函数声明时所在作用域下的this值（不能通过call等方法改变this指向）

2. 不能作为构造函数实例化对象

```js
let Person = (name, age) => {
             this.name = name;
             this.age = age;
         }
         let me = new Person('xiao',30);
         console.log(me);
//报错；Person is not a constructor
```

3. 不能使用 arguments 对象，但是可以使用 rest 参数代替。

4. 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。



## 7 数组

* 扩展运算符

* **`Array.from()`** ：将类数组对象转化为数组。
* **`Array.of()`** ：将值转化为数组。主要是替换`Array()` 或 `new Array()`。

```js
Array(3) // [, , ,]
Array.of(3) //[3]
```

实例方法：

* **`copyWithin(target,start,end)`**：复制指定成员到其他位置。

* **`find()` 和 `findIndex()`**  ：查询。
* **`fill()`** ：填充。
* **`entries()`，`keys()` 和 `values()`**：同Set,Map对象的方法 。
* **`includes()`**：是否包含。**主要取代`indexOf()`,该方法存在算法问题：无法判断`NaN`。**（ES2016)
* **`flat()，flatMap()`**：数组拉平，数组拉平并遍历。
* **`at()`**：索引，主要支持负索引（倒数）。（ES2021)

其他：

* ES6所有方法会将数组空位识别成`undefined`。

* 将sort方法规定为稳定排序的方法，即有固定的统一的规律。

  

## 8 对象

拓展：

* 扩展运算符

* 简洁表达式
* 属性名表示式，即可以将表示式作为对象的属性名。

```js
let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

* name 属性返回变量名。
* 引入可枚举性。目的是过滤内部属性和方法。

* super 关键字，指向当前对象的原型对象。



新增方法

* `Object.is()` 比较两个对象是否相等。与严格比较运算符（===）的行为基本一致。

不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身。

```js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```



* `Object.assign(target,source1,source2,...)`： 合并对象。
* `Object.getOwnPropertyDescriptors()` ：返回指定对象的所有自身属性的描述对象。
* `__proto__` 属性：用于读取和设置当前对象的原型对象。
* `Object.setPrototypeOf()，Object.getPrototypeOf()`：设置/读取当前对象的原型属性
* `Object.keys()，Object.values()，Object.entries()`：同上
* `Object.fromEntries()`：是`Object.entries()`的逆操作，用于将一个键值对数组转为对象。



## 9 运算符

### 扩展运算符 `...`

该运算符会调用 Iterator 接口，将数组或对象进行展开。

该运算符直接取代了传统函数 `apply` 方法的使用。

```js
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);
```



实战运用：

**!浅拷贝数组和对象**

```js
const newArr =[...oldArr]
const newObj =[...oldObj]
```

**合并数组和对象**

```js
const newArr =[...oldArr1,...oldArr2]
const newObj =[...oldObj1,,...oldObj2]
```

**数组的解构赋值**

```js
const [first, ...rest] = [1, 2, 3, 4, 5];
```



**指数运算符 `**` （ES2016)**

```js
2 ** 3 // 8
```



### **链判断运算符 `?. `(ES2020)**

```js
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
// 等价于
const firstName = message?.body?.user?.firstName || 'default';
```

**实战中使用情况较多**



### **Null 判断运算符`??  `(ES2020)**

可以看做是 || 运算符的功能缩小版，仅判断undefined 和 Null。

```js
const a = b || 300;
const a = b ?? 300;
```

**实际使用情况更多，因为范围更小更准确。**



### **逻辑赋值运算符 (ES2021)**

先进行逻辑运算，然后根据运算结果，再视情况进行赋值运算。

```js
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)
```

用途：为变量或属性赋默认值。

```js
// 老的写法
user.id = user.id || 1;

// 新的写法
user.id ||= 1;
user.id ??= 1;
```



## 10 symbol 唯一值

ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。是一种类似于字符串的数据类型。



**生成 Symbol**

使用`Symbol()`函数生成。`Symbol()`函数接受一个字符串作为参数，该参数作为 description 属性（描述属性）保存在数据结构中。

```javascript
const sym = Symbol('foo');
sym.description // "foo"
```



**作为对象属性名**

```javascript
let mySymbol = Symbol();
let a = {};
a[mySymbol] = 'Hello!'; // [] 赋值

let a = {  [mySymbol]: 'Hello!'}; // 需注意有 []

// 对象的方法
let a = {};Object.defineProperty(a, mySymbol, { value: 'Hello!' });
```



**属性名的遍历**

`Object.getOwnPropertySymbols()`方法可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

注意：

symbol属性不会被 **`for...in` 循环和 `Object.getOwnPropertyNames()`**遍历到，

但是可以被新的 API  **`Reflect.ownKeys()`** 遍历到。**所以可被用于非私有的内部方法。**



**当前代码作用域搜索 Symbol 变量** 

 **`Symbol.for()`** 方法接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。有则返回，没有则新建。

**`Symbol.keyFor()`** 同上，只是没有则返回undefined。



## 11 Set 和 Map 数据结构

### 11.1 Set

> Set 数据结构是类数组，但是成员的值是唯一的，没有重复的值。

**生成新的 Set 数据**

`Set`本身是一个构造函数，用来生成 Set 数据结构。该函数可接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数。

```javascript
const set = new Set([2, 3, 5, 4, 5, 2, 2]);
```

**总结：所以Set 数据结构主要用于数组/字符串的去重。**

**例子：**

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]// [1, 2, 3, 4]
// 例子二
const set = new Set('12344');[...set]// 1,2,3,4
```



### 11.2 Map

Map 数据结构是类对象，键名的值可以是各种类型的值。

**生成新的 Map数据**

定义同 Set 数据结构。但是接受的数组的数据结构和 Set 不同，有固定的结构要求。

```javascript
const arr = [  ['name', '张三'],  ['title', 'Author']]const map = new Map(arr);console.log(map.get('name')) // 张三
```



**Set & Map **

**成员个数**

size **大小，规模**



**增删改查方法**

delete **删除**，has **有无**，clear **清空**。

对于Set的添加操作是add(value)，而Map是set(keu,value)设置和get(value)获取。



**遍历方法**

* keys：返回所有键名的数组

* values：返回所有键值的数组

* entries：获取所有键名和键值的数组。

> entries n. 入口entry的复数形式，译为条目

* forEach 遍历所有键和值。



**备注：Set数据结构 键值和键名是相等的，即key和value是相等的。**



**对象 和 Map数据结构 之间的转换 ( 了解 ) **

对象 转 Map

> 通过 entries 方法获取对象的键名和键值的数组，再生成 Map 数据结构。

```javascript
let map = new Map(Object.entries(obj));
```



**Map 转 对象**

> 使用遍历方法，给新对象重新赋值。

```javascript
function strMapToObj(strMap) {  let obj = Object.create(null);  for (let [k,v] of strMap) {    obj[k] = v;  }  return obj;}
```

备注：关于存在非字符串的键名，实际上这种情况转换也使用不到，可以不做考虑。



### 11.3 weak

> weak adj. 弱的

weakSet，weakMap，waekRef （ES2021)为删减版的数据结构，只有增删改查的方法。实际使用较少，但做模块/架构基于性能会考虑使用。

该类型的对象是弱引用，即垃圾回收机制不考虑回收对象。

**weakMap 用途**

* 存储 DOM 节点

* 部署私有属性

waekRef 的出现实际上能取代 weakMap 中部署私有属性的功能，使得使用起来更方便。



## 12 Proxy 代理 和 Reflect 反射

Proxy 用于修改某些操作的默认行为。

Reflect 用于表示明显是语言内部的行为。也可以理解为原生对象的行为。

语法：

```js
var proxy = new Proxy(target, handler);
```

target 表示目标对象，handler表示修改的行为。

案例：修改对象的get/set 行为。

```js
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
```



## 13 class 类

**class 的本质：是构造函数的语法糖。**

最简单的案例：

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

constructor 是构造函数的方法，在创建实例时调用并传入参数，constructor 中的 this 指向实例对象 。

toString 是自定义函数的内部方法。



**class 的特性**

```js
class Point { constructor(x, y) {    // ...  }  toString() {    // ...  }}typeof Point // "function"Point === Point.prototype.constructor // trueObject.keys(Point.prototype) //[]Object.getOwnPropertyNames(Point.prototype) // ["constructor","toString"]
```

* 类的数据类型就是函数，类本身就指向构造函数。

* 类的内部所有定义的方法，都是不可枚举的，因为是定义在其原型上。



**constructor** 

可以为空，JavaScript 引擎加载时自动添加上构造函数。

默认返回实例对象。也就是返回 this 。

使用构造函数之后必须使用 new 方法调用，否则会报错。



**getter 取值/ setter 存值**

构造函数允许对对象的取值和存值的行为做操作

```js
  get prop() {
    return this.prop;
  }
  set prop(value) {
    this.prop = value
  }
```



**属性表达式**

类的属性名，可以采用表达式。实战中使用较少。

```js
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }
  [methodName]() {
    // ...
  }
}
```



注意事项：

* 使用严格模式
* 不存在变量提升
* name属性为类名称
* Generator 方法使用相同
* this 指向调用对象，如果单独抽出来使用会使 this 指向当前作用域。

解决方案：

```js
constructor() {
  // 对象的绑定方法
   this.printName = this.printName.bind(this);
  // 箭头函数
   this.getThis = () => this;
  }
```



**static 静态方法**

案例：

```js
class Foo {  static classMethod() {    return 'hello';  }}class Bar extends Foo {  static classMethod() {    return super.classMethod() + ', too';  }}console.log(Bar.classMethod()) // "hello, too"console.log((new Bar).classMethod) // undefined
```

类对象的私有方法，在创建实例时不会被继承。

但可以被父类的静态方法可以被子类继承。



**类的属性也可以定义在顶层**

```js
class Bar {  constructor() {    this._count = 0;  }  // 等价于  _count  = 0}console.log((new Bar)._count)  // 0
```

所以直接使用该方法和箭头函数，可以直接绑定当前的this。

```js
_count = () =>{ ... }
```



**extends 继承**

super 函数用于调用父函数构造函数，也可用于调用父类构造的实例/父类的。



**为什么不调用 super 方法就报错？**

子类的 this 是在父类的 this上面添加实例属性和方法加工而成。所以没有父类的 this 就会报错。

**子类没有构造函数则直接继承父类的构造函数。**



**super作为对象的使用情况**

在普通方法中指向父类的原型对象，也就是完全无法使用父类的属性和方法。

在静态方法中指向父类。



ES6对此作出规定：在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。

简单而言，

如果是需要创建实例的方法的对象，super关键字基本用不上。

如果是用类创建方法集合，super则可用于分割父类和子类。



## 14 Module 模块

ES6 之前模块化实现方案是服务器（node.js）使用Common.js，浏览器使用AMD。

common.js暴露和引包方式**（熟练）**：

```javascript
//moudle-a.jsmoudle.exports = {    a: 1};// exports 对象指向 moudle.exportsexports.xxx = {}//moudle-b.jsvar ma = require('./moudle-a');var b = ma.a + 2;module.exports ={    b: b};
```



AMD 暴露和引包方式（了解）：

```javascript
// [dependencies],字符串数组，模块的依赖数组// mod1.jsdefine('mod1',[dependencies],function(dependencies){    // ...    return {        // ...    }})require([dependencies], function(){})// require(['mod1','mod2'],function(mod1, mod2){}
```



ES6 模块化的实现是 module。随着node.js的更新。应该后面会逐渐使用该方式来代替原来的模块化的方案。

```javascript
// ES6模块// 暴露一个或多个export fsexport { stat, exists, readFile }export default xxx// 导入一个或多个import fs from 'fs';import { stat, exists, readFile } from 'fs';
```

`import` 需要知道加载的变量名或函数名。

`export default` 可以为模块指定默认输出，该输出可在加载时定义名称。好处是不用阅读文档也能加载模块。

`as` 可以为加载模块指定别名。其实用改名来形容更准确。



## 15 Promise 状态容器

Promise 是异步编程的一种解决方案，比传统的回调函数和事件，更合理和更强大。

所谓 Promise ，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

**Promise 对象有以下两个特点。**

1. 对象的状态不受外界影响。
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。



Promise 对象的状态：

* Promise对象代表一个异步操作，有三种状态：`pending`（进行中）、fulfilled（已成功）和 rejected（已失败）。
* Promise对象的状态改变，只有两种可能：
  * 成功：从 pending 变为 fulfilled
  * 失败：从 pending 变为 rejected。



**创造了 Promise 实例**

```javascript
const promise = new Promise(function(resolve, reject) {  
    	if (/* 异步操作成功 */){    resolve(value);  } else {    reject(error);  }
	});
```

参数说明：

- resolve ：异步操作执行成功后的回调函数。
- reject：异步操作执行失败后的回调函数。（注意：reject 会报错导致 javascript 代码停止运行，单线程）



**面试重点内容：**

**新建 Promise 构造函数中的参数（回调函数）会立即执行一次。**

```javascript
let promise = new Promise(function (resolve, reject) {
      console.log('Promise');
      resolve();
    });
    promise.then(function () {
      console.log('resolved.');
    });
    console.log('Hi!');
// 执行结果： Promise > Hi! > resolved
```



**then 方法**

主要用于绑定状态的回调函数，且默认会返回一个新的 Promise 对象方便链式调用。

参数：第一个参数为 resolve 回调，第二个参数为 reject 回调

```javascript
Promise().then(resolve =>{},reject =>{})
```



**catch 方法**

主要用于指定发生错误时的回调函数。该方法存在则修改报错方法（抛出错误），实现绑定抛出错误。

```javascript
Promise().catch(error =>{})
```

注意：catch 方法仅捕获一次错误。



**关于 Promise 会吃掉错误的说法**

> Promise 内部的错误不会影响到 Promise 外部的代码。

例子：

```javascript
const someAsyncThing = function () {
  return new Promise((resolve, reject) => {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
someAsyncThing().then(function () {
  console.log('everything is great');
});
setTimeout(() => { console.log(123);}, 2000); // 验证线程是否中断
// Uncaught (in promise) ReferenceError: x is not defined
// 123
```

总结：弹出错误但是扔能打印 123 ，证明线程并没有并中断。



**finally 方法**

用于指定不管 Promise 对象最后状态如何，都会执行的操作。（ ES2018 )

```javascript
Promise().finally(() => {···});
```



finally 方法注意事项：

* **finally 方法本质是 then 方法的特例**

```javascript
promise.then( result => {    /* 语句 */   return result;  },  
             	error => {    /* 语句  */  throw error; }
            			);
```

* **finally 方法不影响返回值**

```javascript
Promise.resolve(2).then(() => {}, () => {})    // resolve 的值是 undefined   
Promise.resolve(2).finally(() => {})    // resolve 的值是 2
Promise.reject(3).then(() => {}, () => {})   // reject 的值是 undefined
Promise.reject(3).finally(() => {})     // reject 的值是 3
```





**修改 Promise 对象状态的方法**

**resolve & reject 方法**

修改 Promise 状态（ fulfilled / rejected）并返回该值。

```javascript
const p = Promise.resolve('成功了');
// 等同于 
const p = new Promise((resolve, reject) => resolve('成功了'))

const p = Promise.reject('出错了');
// 等同于 
const p = new Promise((resolve, reject) => reject('出错了'))
```



**处理多个 Promise 对象的方法**

以下方法接受参数均为数组（具有 Iterator 接口的数据），成员为 Promise实例。

**all 方法 n.全部**

```javascript
const p = Promise.all([p1, p2, p3]);
```

解释：仅全部成员为 `fulfilled` 时，p的状态才为 `fulfilled`。否则返回状态为`rejected`。  

**any 方法 adj.任意的**

```javascript
const p = Promise.any([p1, p2, p3]);
```

解释：任意一个成员为 `fulfilled` 时，返回状态为 `fulfilled`。否则，返回状态为 `rejected`并抛出错误。                   

**race 方法 n. 赛跑** 

```javascript
const p = Promise.race([p1, p2, p3]);
```

解释：执行第一个状态为 `fulfilled` 的 `promise` 成员。否则返回状态为`rejected`。  

**allSettled 方法 adj. 全部结束**

```javascript
const p = Promise.any([p1, p2, p3]);
```

解释：执行全部成员，完成后返回状态为 `fulfilled`。



## 16 Iterator 遍历器

> 设计初衷（理念）：为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员



**Iterator 的本质：**

通过不断调用 next 方法来实现数据的遍历。

模拟 next 方法返回值的例子：

```javascript
    var it = makeIterator(['a', 'b']);
    it.next(); // { value: "a", done: false }
    it.next(); // { value: "b", done: false }
    it.next(); // { value: undefined, done: true }
    function makeIterator(array) {
      var nextIndex = 0;
      return {
        next: function () {
          return nextIndex < array.length
            ? { value: array[nextIndex++], done: false }
            : { value: undefined, done: true };
          // done:false 和 value: undefined 无意义，可优化为下面代码
          return nextIndex < array.length ? { value: array[nextIndex++] } : { done: true };
        }
      };
    }
```

next 方法返回一个对象，其中属性 value 为该值，属性 done 表示是否结束。



**Iterator 接口**

> ES6 规定，默认的 Iterator 接口部署在数据结构的`Symbol.iterator`属性。

打印的数组的原型可以看到该接口：

![image-20211217205451465](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20211217205451465.png)



**原生具备 Iterator 接口的数据结构如下：**

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象



**调用 Iterator 接口的场合**

**1、数组和 Set 结构的解构赋值**

```
let set = new Set().add('a').add('b').add('c');let [x,y] = set;
```

**2、扩展运算符**

```javascript
var str = 'hello';[...str] //  ['h','e','l','l','o']
```

**3、yield***

yield* 则会调用后面表达式的 Iterator 接口并依次执行该 yieId 的操作，可以视为 yieId 的多个操作。

```javascript
    let generator = function* () {      yield 1;      yield 2;      yield 3;      yield* [1, 2, 3];    };    var iterator = generator();    console.log(iterator.next()); //{"value":1,"done":false}    console.log(iterator.next()); //{"value":2,"done":false}    console.log(iterator.next()); //{"value":3,"done":false}    console.log(iterator.next()); //{"value":1,"done":false}    console.log(iterator.next()); //{"value":2,"done":false}    console.log(iterator.next()); //{"value":3,"done":false}    console.log(iterator.next()); //{"done":true}
```



**4、其他场合**

* for ... of

* Array.from 将类数组转成数组。其实直接使用扩展运算符更快[...Set]。

- Map(), Set(), WeakMap(), WeakSet()（比如`new Map([['a',1],['b',2]])`）

- Promise.all() && Promise.race()

  

## 17 Generator 遍历器生成函数

> 初衷：
>
> 1.方便创建 iterator（遍历器），所以该函数的返回值是一个 iterator 对象。（遍历器对象）
>
> 2.配合 yieId 使用，可作为一个状态机，封装多个内部状态。

案例：

```javascript
let generator = function* () {  yield 1;  yield 2;  yield 3;};var iterator = generator();console.log(iterator.next()) //{"value":1,"done":false}console.log(iterator.next()) //{"value":2,"done":false}console.log(iterator.next()) //{"value":3,"done":false}console.log(iterator.next()) //{"done":true} 
```

备注：

* Generator 函数只是在普通函数后面添加一个 * 。

* yieId 关键字将生成器函数暂停并返回关键字后面的表达式的值，可以看成是一种特殊的return，但不影响代码的执行。

**异步应用**

以读取文件为例，Generator 实现异步的案例：

```js
function* asyncJob() {  // ...其他代码  var f = yield readFile(fileA);  // ...其他代码}
```

yield 命令会交出函数的执行权并暂停，直到执行权回归，再从暂停位置继续执行。**也可以理解为交出线程（单线程，交出线程意味着暂停）**。该代码的好处就是非常像同步的代码，不用太在意代码的层级问题。

thunk 函数

> thunk  函数是一种自动执行 Generator 函数的思路。因为暂时用不到，这里暂时跳过。后续需要用到再补充

co 模式

> 一种自动执行器模式，后续补充。



## 18 `async` (ES2017)

> `async` 函数是 Generator 函数的语法糖。

以异步依次读取两个文件为例：

```js
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

替换成 `async` 函数的写法如下：

```js
const gen = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

可以看出，`async` 函数就是将 Generator 函数的星号（*）替换成 `async`，将yield替换成await。

`async`函数对 Generator 函数的改进:

1. 自带执行器。Generator 函数的执行必须靠执行器，所以才有了`co`模块，而`async`函数自带执行器。
2. 语义更清晰。
3. 返回 Promise 对象（原始数据类型会调用 promise.resolve 方法），更方便调用。 Generator 函数的返回值是 Iterator 对象或原始的数据类型。



备注：

**第三条的意思是：`async` 函数的返回值也是一个promise对象。（面试重点）**



`async` 函数的特点：

* **返回 Promise对象**

* 默认在全部代码执行完毕后，改变 Promise 对象的状态为 resolved 。

* 只有在抛出错误时，才会改变 Promise 对象的状态为 rejected。



**await 命令**

同 yield。**需要注意的是 `await` 必须要在 `async` 函数的顶层作用域，否则会报错。**



**错误处理**

需在外部使用try...catch。实战中使用较少，一般在响应拦截处做错误处理较多。

如果实在是有 rejected 状态。下面提供一些较好的写法：

```js
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}
```

另外一种写法（推荐，代码紧凑，思路会更清晰）：

```js
async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  });
}
```



#### **优化：并发执行异步**

> 这是一种优化代码的方式，能有效较少接口响应的时间。
>
> 之前的操作是：异步请求>等待响应>接受响应 这个过程不断同步循环。
>
> 优化的原理：异步一次性发送请求，同步等待最慢的结果。这里需要用到 `Promise.all()`

具体写法如下：

```js
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));
  let results = await Promise.all(promises);
  console.log(results);
}
```

