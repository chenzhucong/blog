---
title: JavaScript (1) 基本概念
date: 2022-02-06 16:40:41
permalink: /pages/9b7225/
---
# JavaScript (1)  基本概念

> 本文参考：
>
> 《JavaScript高级程序设计（第三版）》
>
> [千古一号的JavaScript笔记](https://github.com/qianguyihao/Web/tree/master/04-JavaScript%E5%9F%BA%E7%A1%80)

## 1 语法

**区分大小写**

JavaScript 中一切都区分大小写。**无论是变量、函数名还是操作符，都区分大小写。**



**标识符**

**标识符**：变量、函数、属性或函数参数的名称。**JavaScript 标识符使用驼峰命名法。**

**驼峰命名法**：第一个单词的首字母小写，后面每个单词的首字母大写。

**下划线命名法**：单词之间用下划线连接。

注释：关键字、保留字、true、false 和null 不能作为标识符。



**关键字和保留字**

ECMA-262 描述了一组保留的关键字，这些关键字有特殊用途。按照规定，**保留的关键字不能用作标识符或属性名**。ECMA-262 第6 版规定的所有关键字如下：

```javascript
break       do          in            typeof
case        else        instanceof    var
catch       export      new           void
class       extends     return        while
const       finally     super         with
continue    for         switch        yield
debugger    function    this
default     if          throw
delete      import      try
```

ECMA-262第6版为将来保留的所有词汇

```js
// 始终保留:
enum
 
// 严格模式下保留:
implements  package     public
interface   protected   static
let         private
 
// 模块代码中保留:
await
```



**注释**

```js
// 单行注释
/* 这是多行注释 */
```



**use strict 严格模式**

> 详细资料可以参考：[《Javascript 严格模式详解》](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)

use strict 严格模式是对 JavaScript 运行的优化，减少运行的问题。

严模模式的区别

- 禁止使用 with 语句。
- **禁止 this 关键字指向全局对象。**
- 对象不能有重名的属性。



## 2 数据类型

### 2.0 变量

JavaScript变量是松散类型的，意思是变量可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的命名占位符。变量声明在 es5 使用 var （已废弃）,在 es6 使用 let 和 const。

**注释：未声明的直接定义的变量为全局变量，严格模式已禁止该行为。**



### 2.1 数据类型

**数据类型分类**

**简单数据类型（也称为基本数据类型）：**

* Undefined	未定义
* Null	空值
* Boolean	布尔值
* Number	数值
* String	字符串

**复杂数据类型（也叫引用数据类型）：**

* Object	对象

**注意：内置对象 Function、Array、Date、RegExp、Error等都是属于 Object 类型。**



**区别**

- 基本数据类型：参数赋值的时候，传数值。
- 引用数据类型：参数赋值的时候，传地址（修改的同一片内存空间）。

**注释：**

**基本数据类型的赋值：指的是将新值赋予给变量，原来的值不变。（原来的值会被js自动收集垃圾机制处理掉）**



知识补充：

**栈内存和堆内存**

我们首先记住一句话：JS中，所有的**变量**都是保存在**栈内存**中的。

然后来看看下面的区别。

**基本数据类型**：

基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。

**引用数据类型**：

对象是保存到**堆内存**中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而**变量保存了对象的内存地址**（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。

---

详细资料可以参考：https://segmentfault.com/a/1190000015118062

堆内存和栈内存结构图：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img1460000015118067)

总结：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img1460000015118070)



### 2.2  Undefined 和 Null

**Undefined**

Undefined 类型只有一个值，就是特殊值undefined。未初始化的变量会被自动赋予 undefined 值。

**Null**

Null 类型同样只有一个值，即特殊值 null。null 值表示一个空对象

注释：

* 使用 typeof 检查一个 null 值时，会返回 object。

```js
  console.log(null instanceof Object)  // false
  // null是一个特殊值null,并不属于对象
  console.log(null == undefined)  // true 
  // undefined 值是由null 值派生而来的
```

  

### 3.3 Boolean

Boolean（布尔值）类型有两个字面值：true 和false。主要用来做逻辑判断： true 表示真，false 表示假。

 不同类型与布尔值之间的转换规则:

|   数据类型   | 转换为true 的值 | 转换为false 的值 |
| ---- | ---- | ---- |
| Boolean | true | false |
| String | 非空字符串 | ""（空字符串） |
| Number | 非零数值（包括无穷值） | 0、NaN |
| Object | 任意对象 | null |
| Undefined | N/A（不存在） | undefined |



### 3.4 String

字符串可以使用双引号（"）、单引号（'）或反引号（`）标示。



<u>**引号的注意事项**</u>

1. 单引号和双引号不能混用。比如下面这样写是不可以的：

```js
var str = 'hello";  // 报错：Uncaught SyntaxError: Invalid or unexpected token
```

2. 同类引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。

3. 单引号里可以嵌套双引号；双引号里可以嵌套单引号。

4. 使用转义字符即可嵌套同类引号。



 <u>**`\`转义字符**</u>

在字符串中我们可以使用`\`作为转义字符，当表示一些特殊符号时可以使用`\`进行转义。

- `\"` 表示 `"` 双引号
- `\'` 表示 `'` 单引号
- `\\` 表示`\`
- `\r` 表示回车
- `\n` 表示换行。n 的意思是 newline。
- `\t` 表示缩进。t 的意思是 tab。
- `\b` 表示空格。b 的意思是 blank。



<u>**字符串拼接**</u>

多个字符串之间可以使用加号 `+` 进行拼接。

**拼接语法**：

```js
字符串 + 任意数据类型 = 拼接之后的新字符串;
```

不同类型与字符串之间的转换规则:

| 数据类型  | 转换为String的值  |
| --------- | ----------------- |
| Boolean   | "true"/"false"    |
| Number    | Number，如"9"     |
| Object    | "[object Object]" |
| Undefined | "undefined"       |
| Null      | "null"            |

注释：

* es6 出现模板字符串的写法。建议使用模板字符串的方式代替es5中的字符串拼接。
* 优点：减少数据类型报错，提高代码的可读性。



### 3.5 Number

在JS中所有的数值都是 Number 类型，包括整数和浮点数（小数）。



<u>**数值的范围**</u>

由于内存的限制，JavaScript并不能保存世界上所有的数值。

- 最大值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
- 最小值：`Number.MIN_VALUE`，这个值为： 5e-324

如果使用 Number 表示的变量超过了最大值，则会返回Infinity。

- 无穷大（正无穷）：Infinity
- 无穷小（负无穷）：-Infinity

注意：`typeof Infinity`的返回结果是number。



**<u>NaN</u>**

**NaN**：是一个特殊的数字，表示Not a Number，非数值。

```js
console.log("abc" / 18);  //结果是NaN

console.log("abc" * "abcd"); //按理说，字符串相乘是没有结果的，但如果你非要让JS去算，它就一定会给你一个结果。结果是NaN
```
注意：`typeof NaN`的返回结果是 number。



**<u>浮点数运算误差</u>**

**出现原因**

计算机编程语言里浮点数计算会存在精度丢失问题（或称舍入误差），其根本原因是二进制和实现位数限制有些数无法有限表示.
 * 以下是十进制小数对应的二进制表示
 *      0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
 *      0.2 >> 0.0011 0011 0011 0011…（0011无限循环）
 * 计算机里每种数据类型的存储是一个有限宽度，比如 JavaScript 使用 64 位存储数字类型，因此超出的会舍去。舍去的部分就是精度丢失的部分。

**解决办法**

简单的精度问题，可以使用 `toFix()` 方法进行小数的截取。

实战开发中使用开源库进行解决：

- [Math.js](https://github.com/josdejong/mathjs)：属于很全面的运算库，文件很大，压缩后的文件就有500kb。如果你的项目涉及到大型的复杂运算，可以使用 Math.js。
- [decimal.js](https://github.com/MikeMcl/decimal.js/)：属于轻量的运算库，压缩后的文件只有32kb。大多数项目的数学运算，使用 decimal.js 足够了。



<u>**其他进制的数字**</u>

- 16 进制的数字，以`0x`开头
- 8 进制的数字，以`0`开头
- 2 进制的数字，`0b`开头（不是所有的浏览器都支持：chrome 和火狐支持，IE 不支持）

比如`070`这个字符串，如果我调用 parseInt()转成数字时，有些浏览器会当成 8 进制解析，有些会当成 10 进制解析。

所以，比较建议的做法是：可以在 parseInt()中传递第二个参数，来指定当前数字的进制。例如：

```
var a = "070";

a = parseInt(a, 8); //将 070 当成八进制来看待，转换结果为十进制。
console.log(a); // 打印结果：56。这个地方要好好理解。
```



### 3.6 typeof 运算符

`typeof()`表示“**获取变量的数据类型**”，返回的值是**小写的数据类型字符串**。，语法为：（两种写法都可以）

```javascript
// 写法1
typeof 变量;

// 写法2
typeof(变量);
```

返回结果：

| typeof 的代码写法 | 返回结果  |
| ----------------- | --------- |
| typeof 数字       | number    |
| typeof 字符串     | string    |
| typeof 布尔型     | boolean   |
| typeof 对象       | object    |
| typeof 方法       | function  |
| typeof null       | object    |
| typeof undefined  | undefined |

**注释：需要区分数组和对象需要用到 instanceof ，后面会详细介绍**

```js
console.log([] instanceof Array); // 打印结果：true
console.log({} instanceof Array); // 打印结果：false
```



### 3.7 变量的数据类型转换⭐️

---

> 将一种数据类型转换为另外一种数据类型。

通常有三种形式的类型转换：

- 转换为字符串类型
- 转换为数字型
- 转换为布尔型

通常有两种分类转换的方式

* 显示类型转换

* 隐式类型转换。

**注释：这里为了逻辑清晰，先形式分再按方式分**



#### 3.7.1 转化为字符串

**显示类型转换：**

- toString()
- String()

语法：

```javascript
变量.toString()
String(变量)
```

**隐式类型转换：**

字符串拼接：变量+"" 或者 变量+"abc"



不同类型与布尔值之间的转换规则:

| 数据类型  | 转换为String的值  |
| --------- | ----------------- |
| Boolean   | "true"/"false"    |
| Number    | Number，如"9"     |
| Object    | "[object Object]" |
| Undefined | "undefined"       |
| Null      | "null"            |

总结：实现字符串类型转化最快的方法是使用 `+ ''`



#### 3.7.2 转化为数字

**显示类型转换：**

- Number()
- parseInt()
- parseFloat()



**详解parseInt() 和parseFloat()**

* **parseInt()的作用是将字符串中的有效的整数内容转为数字**

* **parseFloat()的作用是将字符串转换为浮点数。**
* **以上两个方法实战中仅对字符串使用**

**parseInt()函数特性：**

1. **只保留字符串最开头的数字**，后面的中文自动消失。
2. **如果对非 String使用 parseInt()或 parseFloat()，它会先将其转换为 String 然后再操作。**
3. 自动带有截断小数的功能：**取整，不四舍五入**。
4. 带两个参数时，表示在转换时，包含了进制转换。

与parseInt()特性基本相同，不同的是：parseFloat()可以获得有效的小数部分。



语法：

```js
Number(变量)
parseInt(String变量)
parseFloat(String变量)
```

**隐式类型转换：**

* 自增/自减运算符：`++`、`--`

* 正号/负号：`+a`、`-a`
* 运算符：`-`、`*`、`/`



不同类型与数值之间的转换规则:

| 数据类型  | 转换为Number的值 |
| --------- | ---------------- |
| Boolean   | 1/0              |
| String    | 1/0/NaN          |
| Object    | NaN              |
| Undefined | NaN              |
| Null      | 0                |

注释：

**字符串转数字**

1. 如果字符串中是纯数字，则直接将其转换为数字。

2. 如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0。

3. 只要字符串中包含了其他非数字的内容（`小数点`按数字来算），则转换为 NaN。



总结：实现数字类型转化最快的方法是使用 `+`



#### 3.7.3 转化为布尔值

**显示类型转换：**

- Boolean()

语法：

```js
Boolean(变量)
```

**隐式类型转换：**

- isNaN ()

**隐式类型转换（特殊）：**

* 逻辑运算符：`&&`、`||`、`！` 。非布尔值进行**与或**运算时，会先将其转换为布尔值，然后再运算，但运算结果是**原值**。

* 关系运算符：`<`、`>` `<=` `>=`等。关系运算符，得到的运算结果都是布尔值。



不同类型与布尔值之间的转换规则:

| 数据类型  | 转换为true 的值        | 转换为false 的值 |
| --------- | ---------------------- | ---------------- |
| Boolean   | true                   | false            |
| String    | 非空字符串             | ""（空字符串）   |
| Number    | 非零数值（包括无穷值） | 0、NaN           |
| Object    | 任意对象               | null             |
| Undefined | N/A（不存在）          | undefined        |



总结：实现布尔类型转化最快的方法是使用 `!!`



## 4 运算符

### 4.1 运算法的定义和分类

**定义**

**运算符**：也叫操作符，是一种符号。通过运算符可以对一个或多个值进行运算，并获取运算结果。

**表达式**：由数字、运算符、变量的组合（组成的式子）。

表达式最终都会有一个运算结果，我们将这个结果称为表达式的**返回值**。

比如：`+`、`*`、`/`、`(` 都是**运算符**，而`（3+5）/2`则是**表达式**。



**分类**

JS 中的运算符，分类如下：

- 算数运算符
- 自增/自减运算符
- 一元运算符
- 逻辑运算符
- 赋值运算符
- 比较运算符
- 三元运算符（条件运算符）



### 4.2 算数运算符

**算术运算符**：用于执行两个变量或值的算术运算。

常见的算数运算符有以下几种：

| 运算符 | 描述                   |
| ------ | ---------------------- |
| +      | 加、字符串连接         |
| -      | 减                     |
| *      | 乘                     |
| /      | 除                     |
| %      | 获取余数（取余、取模） |



**运算规则**

（1）先算乘除、后算加减。

（2）小括号`( )`：能够影响计算顺序，且可以嵌套。没有中括号、没有大括号，只有小括号。

（3）百分号：取余。只关心余数。



补充：

**加法运算符运算情况：**

* 字符串 + 字符串 = 字符串

* 字符串 + 数组 = 字符串

* 数字 + 数字 = 数字



**取余，取模的区别**：

- **取余，商向0靠近取整**

```js
// 取余
5 mod 3 = 2  // 5 / 3 = 1.67 取 1
-5 mod 3 = - 2  // 5 / -3 = -1.67 取 -1
5 mod -3 = 2  // 5 / -3 = -1.67 取 -1
-5 mod -3 = -2 // -5 / -3 = 1.67 取 1
```

- **取模，商向无穷小处取整**

```js
// 取模
5 mod 3 = 2  //  5 / 3 = 1.67 取1
-5 mod 3 = 1 // -5 / 3 = -1.67 取 -2
5 mod -3 = -1  // 5 / -3 = -1.67 取 -2 
-5 mod -3 = -2 // -5 / -3 = 1.67 取 1
```

详情看下面这篇文章：[取模和取余的区别](https://blog.csdn.net/coder_panyy/article/details/73743722?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)



### 4.3 自增和自减

**自增** `++`

自增分成两种：`a++`和`++a`。

（1）一个变量自增以后，原变量的值会**立即**自增1。也就是说，无论是 `a++` 还是`++a`，都会立即使原变量的值自增1。

（2）**我们要注意的是**：`a`是变量，而`a++`和`++a`是**表达式**。

那这两种自增，有啥区别呢？区别是：`a++` 和 `++a`的值不同：（也就是说，表达式的值不同）

- `a++`这个表达式的值等于原变量的值（a自增前的值）。你可以这样理解：先把 a 的值赋值给表达式，然后 a 再自增。
- `++a`这个表达式的值等于新值 （a自增后的值）。 你可以这样理解：a 先自增，然后再把自增后的值赋值给表达式。



**自减** `--`

原理同上。

**开发时，大多使用后置的自增/自减，并且代码独占一行，例如：`num++`，或者 `num--`。**



案例：

```js
var n1 = 10;
var n2 = 20;

var result1 = n1++;

console.log(n1); // 11
console.log(result1); // 10

result = ++n1;
console.log(n1); //12
console.log(result); //12

var result2 = n2--;
console.log(n2); // 19
console.log(result2); // 20

result2 = --n2;
console.log(n2); // 18
console.log(result2); // 18
```



### 4.4 一元运算符

一元运算符，只需要一个操作数。



**typeof**

typeof就是典型的一元运算符，因为后面只跟一个操作数。



**正号** `+`

1. 正号不会对数字产生任何影响。比如说，`2`和`+2`是一样的。

2. 我们可以对一个其他的数据类型使用`+`，来将其转换为number。（非常重要）⭐️



**负号** `-`

负号可以对数字进行取反。



### 4.5 逻辑运算符

`!` **非**

> 对一个布尔值进行取反。

注释：常用于转换布尔值。



`&&` **与（且）**

>  两个都为真，结果才为真。

| 第一个操作数 | 第二个操作数 | 结 果 |
| ------------ | ------------ | ----- |
| true         | true         | true  |
| true         | false        | false |
| false        | true         | false |
| false        | false        | false |

返回结果：

- 如果第一个值为false，则执行第一条语句，并直接返回第一个值；不会再往后执行。

* 如果第一个值为true，则继续执行第二条语句，并返回第二个值（如果所有的值都为true，则返回的是最后一个值）



**实战开发中的应用（非常重要）**

#### **容错处理**⭐️

```js
if (result.resultCode == 0) {
	var a = result && result.data && result.data.imgUrl;
}		
```



 **`||` 或：**

> 只要有一个是真，结果就是真。

| 第一个操作数 | 第二个操作数 | 结 果 |
| ------------ | ------------ | ----- |
| true         | true         | true  |
| true         | false        | true  |
| false        | true         | true  |
| false        | false        | false |

返回结果：

- 如果第一个值为true，则执行第一条语句，并直接返回第一个值；不会再往后执行。
- 如果第一个值为false，则继续执行第二条语句，并返回第二个值（（如果所有的值都为false，则返回的是最后一个值）。



**实战开发中的应用（非常重要）**

#### **兜底处理**⭐️

```js
if (result.resultCode == 0) {
	var a = result.data.imgUrl || 'http://img.smyhvae.com/20160401_01.jpg';
}
```



#### 短路运算⭐️

JS中的`&&`属于**短路**的与：

- 如果第一个值为false，则不会执行后面的内容。
- 如果第一个值为 true，则继续执行第二条语句，并返回第二个值。

举例

```js
const a1 = 'qianguyihao';
//第一个值为true，会继续执行后面的内容
a1 && alert('看 a1 出不出来'); // 可以弹出 alert 框

const a2 = undefined;
//第一个值为false，不会继续执行后面的内容
a2 && alert('看 a2 出不出来'); // 不会弹出 alert 框
```

JS中的`||`属于**短路**的或：

- 如果第一个值为true，则不会执行后面的内容。
- 如果第一个值为 false，则继续执行第二条语句，并返回第二个值。

```js
const result; // 请求接口时，后台返回的内容
let errorMsg = ''; // 前端的文案提示

if (result && result.retCode != 0) {
	// 接口返回异常码时
	errorMsg = result.msg || '活动太火爆，请稍后再试'; // 文案提示信息，优先用 接口返回的msg字段，其次用 '活动太火爆，请稍后再试' 这个文案兜底。
}

if (!result) {
	// 接口挂掉时
	errorMsg = '网络异常，请稍后再试';
}
```



实战案例

```js
let code = 0 / 1
if(code){return '返回成功'}

code && '返回成功'

if(!code){return '返回失败'}

code || '返回失败'
```



### 4.6 赋值运算符

>  可以将符号右侧的值赋值给符号左侧的变量。

举例：

- `=` 直接赋值。比如 `var a = 5`
- `+=`。a += 5 等价于 a = a + 5
- `-=`。a -= 5 等价于 a = a - 5
- `*=`。a *= 5 等价于 a = a * 5
- `/=`。a /= 5 等价于 a = a / 5
- `%=`。a %= 5 等价于 a = a % 5



### 4.7 比较运算符

> 比较运算符可以比较两个值之间的大小关系，如果关系成立它会返回true，如果关系不成立则返回false。

比较运算符有很多种，比如：

```
>	大于号
<	小于号
>= 	大于或等于
<=  小于或等于
== 	等于
=== 全等于
!=	不等于
!== 不全等于
```



**非数值的比较**

1. 对于非数值进行比较时，会将其转换为数字然后再比较。

2. 特殊情况：如果符号两侧的值都是字符串时，**不会**将其转换为数字进行比较。比较两个字符串时，比较的是字符串的**Unicode编码**。比较字符编码时，是一位一位进行比较。如果两位一样，则比较下一位。

案例：

```js
// 1
console.log(1 > true); //false
console.log(1 >= true); //true
console.log(1 > "0"); //true
// 2
// 比较两个字符串时，比较的是字符串的字符编码，所以可能会得到不可预期的结果
console.log("56" > "123");  // true
```



**`==`符号的强调**

1. 该符号可以验证字符串是否相同。

2. 该符号并不严谨，会做隐式转换，将不同的数据类型，**转为相同类型**进行比较（大部分情况下，都是转换为数字）。

3. undefined 衍生自 null，所以这两个值做相等判断时，会返回true。
4. NaN不和任何值相等，包括他本身。

案例：

```js
// 1
console.log("我爱你中国" == "我爱你中国");		// 输出结果为true
// 2
console.log("6" == 6);		// 打印结果：true。这里的字符串"6"会先转换为数字6，然后再进行比较
console.log(true == "1");   // 打印结果：true
console.log(0 == -0);       // 打印结果：true
// 3
console.log(undefined == null);  //打印结果：true。
// 4
console.log(NaN == NaN); //false
```



**`===`全等符号的强调**

**全等在比较时，不会做类型转换**。如果要保证**绝对等于（完全等于）**，我们就要用三个等号`===`。

案例：

```js
console.log("6" === 6);		//false
	console.log(6 === 6);		//true
```



### 4.8 三元运算符

> 三元运算符也叫条件运算符。
>

语法：

```
条件表达式 ? 语句1 : 语句2;
```

**执行的流程**：

条件运算符在执行时，首先对条件表达式进行求值：

- 如果该值为true，则执行语句1，并返回执行结果
- 如果该值为false，则执行语句2，并返回执行结果

如果条件的表达式的求值结果是一个非布尔值，会将其转换为布尔值然后再运算。



### 4.9 运算符的优先级

运算符的优先级如下：（优先级从高到低）

- `.`、`[]`、`new`
- `()`
- `++`、`--`
- `!`、`~`、`+`（单目）、`-`（单目）、`typeof`、`void`、`delete`
- `%`、`*`、`/`
- `+`（双目）、`-`（双目）
- `<<`、`>>`、`>>>`
- 关系运算符：`<`、`<=`、`>`、`>=`
- `==`、`!==`、`===`、`!==`
- `&`
- `^`
- `|`
- `&&`
- `||`
- `?:`
- `=`、`+=`、`-=`、`*=`、`/=`、`%=`、`<<=`、`>>=`、`>>>=`、`&=`、`^=`、`|=`
- `,`

注意：逻辑与 `&&` 比逻辑或 `||` 的优先级更高。

备注：你在实际写代码的时候，如果不清楚哪个优先级更高，可以把括号运用上。



## 5 语句if 语句

### 5.1 if 条件语句

**1. 条件判断语句**

> 条件成立才执行。如果条件不成立，那就什么都不做。

格式：

```js
if (条件表达式) {
    // 条件为真时，做的事情
}
// 推荐
if(条件表达式)  执行语句
```



**2. 条件分支语句**

格式 1：

```js
if (条件表达式) {
    // 条件为真时，做的事情
} else {
    // 条件为假时，做的事情
}
```

格式 2：（多分支的 if 语句）

```js
if (条件表达式1) {
    // 条件1为真时，做的事情
} else if (条件表达式2) {
    // 条件1不满足，条件2满足时，做的事情
} else if (条件表达式3) {
    // 条件1、2不满足，条件3满足时，做的事情
} else {
    // 条件1、2、3都不满足时，做的事情
}
```



### 5.2 switch ... case 条件语句

> 条件分支语句

```js
switch(表达式) {
	case 值1：
		语句体1;
		break;

	case 值2：
		语句体2;
		break;

	...
	...

	default：
		语句体 n+1;
		break;
}
```

**解释**：switch 可以理解为“开关、转换” 。case 可以理解为“案例、选项”。



**switch 语句的结束条件【非常重要】**

- 情况 a：遇到 break 就结束，而不是遇到 default 就结束。（因为 break 在此处的作用就是退出 switch 语句）
- 情况 b：执行到程序的末尾就结束。



所以

```js
var num = 4;

//switch判断语句
switch (num) {
    case 3:
        console.log('3');
        break;
    case 4:
        console.log('4');
    //break;
    case 5:
        console.log('5');
    //break;
    case 6:
        console.log('6');
        break;
    case 7:
        console.log('7');
        break;
    default:
        console.log('你输入的数据有误'); 
        break;
}
// 最后输出 4 5 6
```



总结：

当需要判断参数的值时，如果是判定属于多个值中的一个请使用 switch 来提高可读性

```js
let day = 2;

switch (day) {
    case 1:
        console.log('work');
        break;

    case 2:
        console.log('work');
        break;

    case 3:
        console.log('work');
        break;

    case 4:
        console.log('work');
        break;

    case 5:
        console.log('work');
        break;

    case 6:
        console.log('relax');
        break;

    case 7:
        console.log('relax');
        break;

    default:
        break;
}
```

但上面可以使用范围来优化代码:

```js
let day = 2;
if(1<= day <=5){
  console.log('work');
} else if {
  console.log('relax');
}
```



### 5.3 do-white 和 while 循环语句

**do-white**

> do-while 语句是一种后测试循环语句，即循环体中的代码执行后才会对退出条件进行求值。

```js
do { 
 statement 
} while (expression); 
```



**white**

> while 语句是一种先测试循环语句，即先检测退出条件，再执行循环体内的代码。

```js
while(expression) statement 
```



### 5.4 for 循环语句

> for 语句也是先测试语句，只不过增加了进入循环之前的初始化代码，以及循环执行后要执行的表 达式。

```js
for(①初始化表达式; ②条件表达式; ④更新表达式){
	③语句...
}
```

执行顺序

```js
①执行初始化表达式，初始化变量（初始化表达式只会执行一次）

②执行条件表达式，判断是否执行循环：
	如果为true，则执行循环③
	如果为false，终止循环

④执行更新表达式，更新表达式执行完毕继续重复②
```

案例：

```js
for (var i = 1; i <= 100; i++) {
    console.log(i);
}
```



### 5.5 for in 对象迭代语句

> for-in 语句用于迭代对象的非符号键属性。

```js
for (property in expression) statement 
```



### 5.6 break 和 continue 暂停和退出

**break**

- 退出 switch 语句或退出**整个**循环语句。（重要）
- break 会立即终止离它**最近**的那个循环语句。（重要）

**continue**

- continue 可以用来跳过**当次**循环，继续下一次循环。
- 同样，continue 默认只会离他**最近**的循环起作用。