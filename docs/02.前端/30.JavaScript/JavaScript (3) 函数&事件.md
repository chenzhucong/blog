---
title: JavaScript (3) 函数&事件
date: 2022-02-06 16:40:49
permalink: /pages/5ab6b8/
---
# JavaScript (3) 函数和事件

## 8 函数

### 8.1 函数

#### 8.1.1 函数的概念

**函数：**就是将一些功能或语句进行**封装**，在需要的时候，通过**调用**的形式，执行这些语句。

- **函数也是一个对象**
- 使用`typeof`检查一个函数对象时，会返回function

**函数的作用**：

- 将大量重复的语句抽取出来，写在函数里，以后需要这些语句的时候，可以直接调用函数，避免重复劳动。
- 简化编程，让编程模块化。高内聚、低耦合。



#### 8.1.2 函数的定义/声明

**1. 函数关键字自定义函数**（推荐）

```js
function 函数名([形参1,形参2...形参N]){  // 备注：语法中的中括号，表示“可选”
	语句...
}
```

**2. 函数表达式**

```js
var 变量名  = function([形参1,形参2...形参N]){
	语句....
}
```

**3.构造函数 new Function()**

```js
var 变量名/函数名  = new Function('形参1', '形参2', '函数体');
```



**总结：函数本质上都是通过 new Function 得到的。即方式3得到的，但是方式3的写法太啰嗦和麻烦了**



---

#### 8.1.3 函数的调用

**普通函数**

```js
函数名();
// 或者
函数名.call();
```



**立即执行函数**

* 函数定义完，立即被调用，这种函数叫做立即执行函数。

```js
(function() {
	console.log('我是立即执行函数');
})();
```



**绑定事件回调函数**

```js
var btn = document.getElementById('btn');
            //2.绑定事件
            btn.onclick = function() {
                console.log('点击按钮后，要做的事情');
            };
```



**定时器回调函数**

```js
let num = 1;
   setInterval(function () {
       num ++;
       console.log(num);
   }, 1000);
```



#### 8.1.4 函数的属性

**形参和实参**

形参：函数声明时的变量（已声明未赋值变量默认是undefined）

实参：调用该函数时传入的具体参数。



**函数的返回值**

* 不写return 则执行完毕默认返回 undefined

* return 的值将会作为函数的执行结果返回
* return 默认返回值为undefined
* 在函数中，return后的语句都不会执行。（停止并退出函数）



**函数名和函数体**

```js
//定义fn方法
function fn(){
	alert(1)
};
// fn 是函数名
// {	alert(1) }; 是函数体
```



**函数名 == 整个函数**

**fn() 和 fn 的区别【重要】**

- `fn()`：调用函数。调用之后，还获取了函数的返回值。
- `fn`：函数对象。相当于直接获取了整个函数对象。



**函数加载问题**⭐️

JS加载的时候，只加载函数名，不加载函数体。所以如果想使用内部的成员变量，需要调用函数。



**break、continue、return 的区别**

- break ：结束当前的循环体（如 for、while）
- continue ：跳出本次循环，继续执行下次循环（如 for、while）
- return ：1、退出循环。2、返回 return 语句中的值，同时结束当前的函数体内的代码，退出当前函数。



**对象的方法**

函数也可以成为对象的属性。**如果一个函数是作为一个对象的属性保存，那么，我们称这个函数是这个对象的方法**。**方法本质是函数。只是对对象里的函数的一种称呼。**



#### 8.1.5 类数组 arguments

在调用函数时，浏览器每次都会传递进两个隐含的参数：

- 1.函数的上下文对象 this
- 2.**封装实参的对象** arguments

**属性**

`arguments.length` ：实参的长度

`arguments.callee` ：当前正在执行的函数

**修改实参**

```js
function fn(a, b) {
    arguments[0] = 99; //将实参的第一个数改为99
    arguments.push(8); //此方法不通过，因为无法增加元素
}
```

**注释：**

在实际开发中，**arguments对象** 常用于获取不确定数量的参数



### 8.2 作用域

**作用域（Scope）的概念**

- **概念**：通俗来讲，作用域是一个变量或函数的作用范围。作用域在**函数定义**时，就已经确定了。
- **目的**：为了提高程序的可靠性，同时减少命名冲突。



**作用域的分类**

在 JS 中，一共有两种作用域：（ES6 之前）

- 全局作用域：作用于整个 script 标签内部，或者作用域一个独立的 JS 文件。
- 函数作用域（局部作用域）：作用于函数内的代码环境。



**作用域的访问关系**

在内部作用域中可以访问到外部作用域的变量，在外部作用域中无法访问到内部作用域的变量。



**全局变量**

* 定义/声明在全局作用域下的变量
* 在函数内未声明直接赋值的变量是全局变量

```js
(function foo() {
  a = 1;
})();
console.log(a); // 1
```

**局部变量**

* 定义/声明在函数作用域的变量



**作用域的上下级关系（作用域链）**

当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（**就近原则**）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错 ReferenceError。





**变量的申明提升**

使用var关键字声明的变量（ 比如 `var a = 1`），**会在所有的代码执行之前被声明**（但是不会赋值），但是如果声明变量时不是用var关键字（比如直接写`a = 1`），则变量不会被声明提前。



**函数的提前声明**

**函数声明**

使用`函数声明`的形式创建的函数`function foo(){}`，**会被声明提前**。

案例:

```js
fn1(); 
// 虽然 函数 fn1 的定义是在后面，但是因为被提前声明了， 所以此处可以调用函数
function fn1() {
  console.log("我是函数 fn1");
}
```

**函数表达式**

使用`函数表达式`创建的函数`var foo = function(){}`，**不会被声明提前**，所以不能在声明前调用。

很好理解，因为此时foo被声明了（这里只是变量声明），且为undefined，并没有把 `function(){}` 赋值给 foo。

```js
fn1(); 
const fn1 = function() {
  console.log("我是函数 fn1");
};
```

![image-20210829232629656](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210829232629656.png)



**函数的预编译**

（1）创建AO对象。AO即 Activation Object 活跃对象，其实就是「执行期上下文」。

（2）找形参和变量声明，将形参名和变量作为 AO 的属性名，值为undefined。

（3）将实参值和形参统一，实参的值赋给形参。

（4）查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体。

案例：

```js
function fn(a) {
    console.log(a); // ƒ a() {}

    var a = 666;

    console.log(a); //666

    function a() {}

    console.log(a); //666

    var b = function() {};

    console.log(b); //ƒ () {}

    function c() {}
}

fn(1);
```



**参数a变化**

```js
undefined > 1 > ƒ () {} > 666
```



### 8.3 this指向

#### 8.3.1 执行期上下文⭐️

当**函数执行**时（准确来说，是在函数发生预编译的前一刻），会创建一个执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境。

每调用一次函数，就会创建一个新的上下文对象，他们之间是相互独立且独一无二的。当函数执行完毕，它所产生的执行期上下文会被销毁。



#### 8.3.2 函数内 this 的指向⭐️⭐️⭐️

函数内的this指向为谁调用指向谁。默认就是window调用。

根据函数的调用方式的不同，this 会指向不同的对象：

1. 以函数的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`

2. 以方法的形式调用时，this 指向调用方法的那个对象

3. 以构造函数的形式调用时，this 指向实例对象

4. 以事件绑定函数的形式调用时，this 指向**绑定事件的对象**

5. 使用 call 和 apply 调用时，this 指向指定的那个对象



**补充**

**ES6 中的箭头函数**

ES6 中的箭头函数并不会使用上面的准则，而是会继承外层函数调用的 this 绑定。



#### 8.3.3 改变函数内部指向的方法⭐️

**call()**

调用函数并改变这个函数内部的 this 指向。

可以实现继承

```
fun.call(thisArg, arg1, arg2, ...)
```

* fun:调用对象
* thisArg：在fun函数运行时指定的this值
* arg1，arg2：传递的其他参数



备注：第一个参数中，如果不需要改变 this 指向，则传 null。



**案例：实现继承**

```js
// 给 Father 增加 name 和 age 属性
function Father(myName, myAge) {
    this.name = myName;
    this.age = myAge;
}

function Son(myName, myAge) {
    // 【下面这一行，重要代码】
    // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
    Father.call(this, myName, myAge);
}

const son1 = new Son('千古壹号', 28);
console.log(JSON.stringify(son1)); 
// {"myName":"千古壹号","myAge":28}

```



**apply()**

同`call()`，但是传递的是数组

```js
fun.apply(thisArg, [argsArray])
```



案例巧用：求数组中多个元素的最大值

```js
const arr1 = [3, 7, 10, 8];

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1); 
// 求数组 arr1 中元素的最大值
console.log(maxValue);

const minValue = Math.min.apply(Math, arr1); 
// 求数组 arr1 中元素的最小值
console.log(minValue);
```

扩展运算符优化版

```js
Math.min(...[1,2,3])
Math.max(...[1,2,3])
```



**bind()**

bind() 方法**不会调用函数**，但是可以改变函数内部的 this 指向。所以在实际开发中，`bind()`是使用最频繁的。

```js
const newFun = fun.bind(thisArg, arg1, arg2, ...) 
```



### 8.4 高阶函数和函数柯里化

---

#### 8.4.1 高阶函数

当 函数 A 接收函数 B 作为**参数**，或者把函数 C 作为**返回值**输出时，我们称 函数 A 为高阶函数。

常见的高阶函数有:Promise、setTimeout、arr.map()等等

**把其他函数作为参数**

```js
function fn(callback) {
    callback()
}
```

**把其他函数作为返回值**

```js
function fn() {
    return function () {
        console.log(a);
    };
}
```



#### 8.4.2 函数柯里化

**将其他函数作为返回值并调用的方式成为函数柯里化。可以说函数柯里化是高阶函数中的一种。**

```js
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
sum(a)(b)(c);
```



### 8.5 闭包

**为什么会有闭包的概念？**

因为有时候**我们需要函数外部访问函数内的局部变量。**



**闭包的概念**

**闭包**（closure）：指有权**访问**另一个函数作用域中**变量**的**函数**。

简而言之：如果**这个作用域可以访问另外一个函数内部的局部变量**，那就产生了闭包（此时，你可以把闭包理解成是一种现象）；而另外那个作用域所在的函数称之为**闭包函数**。

案例：

```js
function fn1() {
    let a = 10;
    function fn2() {
        console.log(a);
    }
    fn2();
}
fn1();
```



**在 chrome 浏览器控制台中，调试闭包**

上面的代码中，要怎么验证，确实产生了闭包呢？我们可以在 chrome 浏览器的控制台中设置断点，当代码执行到 `console.log(a)`这一行的时候，如下图所示：

[![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303230303730335f323035352e706e67)](https://camo.githubusercontent.com/d7d0055e9c540ca6e8562cf49e8881b36bb68fe913894988812617480641a325/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303730335f323035352e706e67)

上图中， Local 指的是局部作用域，Global 指的是 全局作用域；而 Closure 则是**闭包**，fn1 是一个闭包函数。



**闭包的作用：延伸变量的作用范围**

案例：

```js
function fn(){
  let a = 5
  return a
}
const a = fn()
```

* 变量的作用域扩展到函数内部的闭包。

* 当外部变量不再引用闭包内的变量时，闭包才会消失。



## 9 面向对象

### 9.1 概念

**面向过程**：先分析好的具体步骤，然后按照步骤，一步步解决问题。

优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。

缺点：没有面向对象易维护、易复用、易扩展。



**面向对象**（OOP，Object Oriented Programming）：以对象功能来划分问题，而不是步骤。

优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护。

缺点：性能比面向过程低。



**面向对象的编程思想 **

对代码和数据进行封装，并以对象调用的方式，对外提供统一的调用接口。

 

**面向对象的特性**

- 封装性
- 继承性
- 多态性



**js中的面向对象**

JS 中的面向对象，是基于**原型**的面向对象。

另外，在ES6中，新引入了 类（Class）和继承（Extends）来实现面向对象。



**基于原型的面向对象**

JS 中的对象（Object）是依靠构造器（constructor）和原型（prototype）构造出来的。



### 9.2 对象的创建和构造函数

**创建自定义对象的方式**

**1. 对象字面量**

```js
var obj = {};
```



**2. 工厂模式 new Object()**

```js
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");
```



**3. 利用构造函数**

```js
function Person(name, age, job){ 
 this.name = name; 
 this.age = age; 
 this.job = job; 
 this.sayName = function() { 
 console.log(this.name); 
 }; 
} 
let person1 = new Person("Nicholas", 29, "Software Engineer"); 
let person2 = new Person("Greg", 27, "Doctor"); 
```



**构造函数**

**构造函数**：是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义。



**构造函数和普通函数的区别**

1. 构造函数习惯首字母大写。

2. 普通函数函数使用 `fun()` ，对象的方法使用 `obj.fun()` 调用，构造函数使用 `new` 调用

3. 普通函数this指向window ，对象的方法指向当前对象，构造函数this指向创建的实例对象。



**构造函数的执行流程**

1. 开辟内存空间，在内存中创建一个新的空对象。

2. 让 this 指向这个新的对象。

3. 执行构造函数里面的代码，给这个新对象添加属性和方法。

4. 返回这个新对象（所以构造函数里面不需要 return）。



**静态成员和实例成员**

- **静态成员：**在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问。
- **实例成员：**在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问。



**类、实例**

使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个**类**。

通过一个构造函数创建的对象，称为该类的**实例**。



**instanceof**

使用 instanceof 可以检查**一个对象是否为一个类的实例**。

```js
对象 instanceof 构造函数;
```



### 9.3 浅拷贝和深拷贝

**浅拷贝：**只拷贝最外面一层的数据；更深层次的对象，只拷贝引用。

**深拷贝：**拷贝多层数据；每一层级别的数据都会拷贝。



**浅拷贝的实现方式**⭐️

**1.  for in 实现浅拷贝（太繁琐，使用较少）**

```js
function shallowCopy(object) {
  const newObject ={}
  for (const key in object) {
    newObject[key] = object[key]
  }
  return newObject
}
```



**2. Object.assgin() 实现浅拷贝（推荐）**

```js
const obj2 = Object.assign({},obj1)
Object.assign(目标对象, 源对象1, 源对象2...);
// Object.assign方法不会改变目标对象的指向
```

注释：将 obj1 的值追加到新的空对象中。



**3. 展开运算法（es6）最推荐做法**

```js
const obj2 ={...obj1}
```

注释：将obj1的属性展开到一个新的对象当中。



## 10 BOM

> 参考文章：
>
> https://juejin.cn/post/6923112227012608014
>

### 10.1 概念

BOM：Browser Object Model，浏览器对象模型。

**BOM的结构图：**

[![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230315f323035322e706e67)](https://camo.githubusercontent.com/9dfaa6771ec5c7aabd61bff9b97ab4aa57d071d29a0e9bfee0cbc1c6a1fc8853/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230315f323035322e706e67)

从上图也可以看出：

- **window对象是BOM的顶层(核心)对象**，所有对象都是通过它延伸出来的，也可以称为window的子对象。
- DOM越是BOM的一部分。

**window对象：**

- **window对象是JavaScript中的顶级对象**。
- 全局变量、自定义函数也是window对象的属性和方法。
- window对象下的属性和方法调用时，可以省略window。



### 10.2 window 对象

#### 10.2.1 global 全局作用域

在全局作用于下，所有使用 `var` 声明的变量和函数都会成为 `window` 对象的属性和方法。并且浏览器API 和 多数构造函数 都会以 `window` 对象的属性。

> 不同浏览器 `window` 对象的属性可能不同。



#### 10.2.2 窗口关系

`window` 对象的 `top` 属性始终指向最外层的窗口，及浏览器窗口本身。

`window` 对象的 `parent` 属性始终指向当前窗口的父窗口，如果当前窗口就是最外层窗口，则 `top` 等于 `parent`。

`window` 对象的 `self` 属性始终指向自身。



#### 10.2.3 窗口属性

包含窗口位置、大小、像素比等。

```js
window.screenLeft // 窗口相对于屏幕左侧的距离, number (单位 px)
window.screenTop  // 窗口相对于屏幕顶部的距离, number (单位 px)

window.moveTo(x, y) // 移动到 (x, y) 坐标对应的新位置
window.moveBy(x, y) // 相对当前位置在两个方向上分别移动 x/y 个像素的距离
```

浏览器窗口大小不好确认，但是可以用 `document.documentElement.clientWidth` 和 `document.documentElement.clientHeight` 来确认可视窗口的大小。

> 移动浏览器中 `document.documentElement.clientWidth` 和 `document.documentElement.clientHeight` 返回的通常是实际渲染的页面的大小，而可视窗口可能只能显示一部分内容。

调整窗口大小可以使用 `resizeTo()` 和 `resizeBy()` 两个方法。

```js
// 缩放到 100×100
window.resizeTo(100, 100);
// 缩放到 200×150
window.resizeBy(100, 50);
// 缩放到 300×300
window.resizeTo(300, 300);
```



#### 10.2.4 导航与跳转

`window.open()` 方法可以用于导航到指定 URL，也可以用于打开新浏览器窗口。这个方法接收 4个参数：要加载的 URL、目标窗口、特性字符串和表示新窗口在浏览器历史记录中是否替代当前加载页面的布尔值。

```js
	window.open(url,target,param)
```

**参数：**

- url：要打开的地址。
- target：新窗口的位置。可以是：`_blank` 、`_self`、 `_parent` 父框架。
- param：新窗口的一些设置。
- 返回值：新窗口的句柄。



#### 10.2.5 定时器

`setTimeout()` 超时任务：等待一段时间之后再执行内部的代码，会返回一个超时ID

`setInterval()` 定时任务：每隔一段时间执行一次内部的代码，会返回一个定时ID

`clearTimeout()` 清除指定/所有超时任务。

`clearInterval()` 清除指定/所有定时任务。

`setTimeout()` 和 `setInterval()` 都接收两个参数：要执行的代码（函数）和等待 / 间隔时间（毫秒）。

> 所有超时任务都会在全局作用域中的一个匿名函数中执行，因此函数中所有的 this 指向都是 `window`(严格模式下是 `undefined`) 。如果定义 `setTimeout` 的时候传入的是一个**箭头函数**，则会保留原来的 this 指向。

`setTimeout` 可以不记录超时ID，因为它会在满足条件（执行定义时传入的函数时）自动停止，再次定义时会重新定义一个超时任务。

```javascript
let num = 0;
let max = 10;
let incrementNumber = function() {
    num++;
    // 如果还没有达到最大值，再设置一个超时任务
    if (num < max) {
    	setTimeout(incrementNumber, 500);
    } else {
    	alert("Done");
    }
}
setTimeout(incrementNumber, 500);
复制代码
```

`setInterval()` 会在被销毁之前一直按照定义的间隔时间一直执行，而不会在意定义时传入的函数的执行状态。

> 如果 `setInterval()` 定义时传入的函数时一个异步请求 `Promise`，则异步请求后的回调函数执行顺序可能不会按照预想顺序执行。所以这种情况推荐使用超时任务 `setTimeout()` 而非 `setInterval()`。



### 10.3 location 对象

`location` 是最有用的 BOM 对象之一，提供了当前窗口中加载文档的信息，以及通常的导航功能。

> 它既是 `window` 的属性，也是 `document` 的属性。即 `window.location` 和 `document.location` 指向同一个对象。

解析 ：[foouser:barpassword@www.wrox.com:80/WileyCDA/?q…](https://link.juejin.cn?target=http%3A%2F%2Ffoouser%3Abarpassword%40www.wrox.com%3A80%2FWileyCDA%2F%3Fq%3Djavascript%23contents)

| 属性                  | 值                                                           | 说明                                     |
| --------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `location.hash`       | "#contents"                                                  | URL 散列值（井号后跟零或多个字符）可为空 |
| `location.host`       | "[www.wrox.com:80](https://link.juejin.cn?target=http%3A%2F%2Fwww.wrox.com%3A80)" | 服务器名及端口号                         |
| `location.hostname`   | "[www.wrox.com](https://link.juejin.cn?target=http%3A%2F%2Fwww.wrox.com)" | 服务器名                                 |
| `location.href`       | "[www.wrox.com:80/WileyCDA/?q…](https://link.juejin.cn?target=http%3A%2F%2Fwww.wrox.com%3A80%2FWileyCDA%2F%3Fq%3Djavascript%23contents)" | 完整 URL 字符串                          |
| `location.pathname`   | "/WileyCDA/"                                                 | URL 中的路径和（或）文件名               |
| `location.port`       | "80"                                                         | 请求端口号                               |
| `location.protocol`   | "http:"                                                      | 页面使用的协议                           |
| `location.search`     | "?q=javascript"                                              | 查询字符串，以问号开头                   |
| `location.username`   | "foouser"                                                    | 域名前指定的用户名                       |
| `location.password`   | "barpassword"                                                | 域名前指定的密码                         |
| `location.haoriginsh` | "[www.wrox.com](https://link.juejin.cn?target=http%3A%2F%2Fwww.wrox.com)" | 源地址，只读                             |

**地址操作**

修改浏览器地址可以通过四种方式来修改：

1. `location.assign()`
2. `location.replace()`
3. `location.href = newLocation`
4. `window.location = newLocation`

其中 `location.href` 和 `window.location` 都会在内部显式调用 `location.assign()` 方法，并且向浏览器历史记录中增加一条记录。点击浏览器 "后退" 按钮可以回到上页。

而 `location.replace()` 可以直接修改地址重载页面，而不会向历史记录中插入数据，也无法返回上页。

另外 `location` 还提供了一个 `reload()` 方法，用来重载当前页面。



### 10.4 navigator 对象

客服端标识浏览器的标准，主要用来记录和检测浏览器与设备的主要信息，也可以让脚本注册和查询自己的一些活动（插件）。



### 10.5 screen 对象

单纯的保存客服端能力的对象。包含以下属性：

| 属性          | 说明                                       |
| ------------- | ------------------------------------------ |
| `availHeight` | 屏幕像素高度减去系统组件高度，只读         |
| `availLeft`   | 没有被系统组件占用的屏幕的最左侧像素，只读 |
| availTop      | 没有被系统组件占用的屏幕的最顶端像素，只读 |
| availWidth    | 屏幕像素宽度减去系统组件宽度，只读         |
| colorDepth    | 表示屏幕颜色的位数，只读                   |
| height        | 屏幕像素高度                               |
| left          | 当前屏幕左边的像素距离                     |
| pixelDepth    | 屏幕的位深，只读                           |
| top           | 当前屏幕顶端的像素距离                     |
| width         | 屏幕像素宽度                               |
| orientation   | 返回 Screen Orientation API 中屏幕的朝向   |



### 10.6 history 对象

浏览器导航历史记录及相关操作的对象。



#### 10.6.1 导航

`history` 对象提供了三个方法和一个属性来查看和操作历史记录（当前窗口）。

```javascript
// 跳转到最近的 xxx 页面
history.go("xxx");
ry.back();

// 前进一页
history.forward()
复制代码
```

`go()` 方法会接收一个**字符串**或者**整数**参数，传入整数时，正整数表示前进多少页，负整数表示后退多少页；传入字符串时，会匹配含有该字符串的最近的一条历史记录对应的网址，如果没有找到则不会发生变化。

`history` 提供一个 `length` 属性，可以用来查看当前窗口的历史记录数量。



#### 10.6.2 历史状态管理

1. `hashchange` 事件：页面 URL 的散列变化时被触发。
2. `history.pushState()` 方法：接收 3 个参数：一个 state 对象、一个新状态的标题和一个（可选的）相对 URL。
3. `popstate` 事件（在 `window` 对象上）：后退时触发。
4. `history.state` 属性：当前的历史记录状态。
5. `history.replaceState()` 方法：接收与 `pushState()` 一样的前两个参数来更新状态。





## 11 DOM

### 11.1 概念

**节点**（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上他们的具体类型是不同的。常见节点分为四类：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。
- 元素节点（标签）：HTML标签。
- 属性节点（属性）：元素的属性。
- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也都不尽相同。所有的节点都是Object。



**DOM**：Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。

DOM就是由节点组成的。

**解析过程**： HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树，getElementById是获取内中DOM上的元素节点。然后操作的时候修改的是该元素的**属性**。

DOM的数据结构如下：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img3c30cd138cba638b0e1a.png~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp)

**在HTML当中，一切都是节点**（非常重要）。**整个html文档就是一个文档节点。所有的节点都是Object。也可以理解成，所有的节点以对象的形式保存节点信息。**



DOM 可以做下面的事情

- 找对象（元素节点）
- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序



### 11.2 元素节点的获取

DOM 节点的获取方式其实就是**获取事件源的方式**。

常用的主要有三种获取 DOM 节点的方式。

```js
 //方式一：通过 id 获取 一个 元素节点（为什么是一个呢？因为 id 是唯一的）
var div1 = document.getElementById("box1");
//方式二：通过 标签名 获取 元素节点数组
var arr1 = document.getElementsByTagName("div"); 
//方式三：通过 类名 获取 元素节点数组
var arr2 = document.getElementsByClassName("hehe"); 
```



### 11.3 DOM 节点的关系

DOM的节点并不是孤立的，而是通过属性的方式关系起来的。关系如下图：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303132365f323134352e706e67)

**获取父节点**

```js
节点.parentNode
```



**获取兄弟节点**

**下一个节点 | 下一个元素节点**

1.nextSibling

> Sibling的中文是**兄弟**。

- 火狐、谷歌、IE9+版本：都指的是下一个节点（包括标签、空文档和换行节点）。
- IE678版本：指下一个元素节点（标签）。

2.nextElementSibling

- 火狐、谷歌、IE9+版本：都指的是下一个元素节点（标签）。

**总结**：为了获取下一个**元素节点**，我们可以这样做：在IE678中用nextSibling，在火狐谷歌IE9+以后用nextElementSibling，于是，综合这两个属性，可以这样写：

```js
	下一个兄弟节点 = 节点.nextElementSibling || 节点.nextSibling
```



**前一个节点 | 前一个元素节点**

1.previousSibling

2.previousElementSibling

原理同获取下一个节点，只是变成获取前一个节点。

```js
前一个兄弟节点 = 节点.previousElementSibling || 节点.previousSibling
```



**获得任意一个兄弟节点**

```js
	节点自己.parentNode.children[index];  //随意得到兄弟节点
```



**获取单个的子节点**

**第一个子节点 | 第一个子元素节点**：

1.firstChild

2.firstElementChild

原理同获取下一个节点，只是变成获取子节点中的第一个。



**最后一个子节点 | 最后一个子元素节点**：

1.lastChild

2.lastElementChild

原理同获取下一个节点，只是变成获取子节点中的最后一个。



获取所有的子节点

1. **childNodes**：标准属性。返回的是指定元素的**子节点**的集合（包括元素节点、所有属性、文本节点）。

**注释：火狐 谷歌等高本版会把换行也看做是子节点。**



```js
	子节点数组 = 父节点.childNodes;   //获取所有节点。
```

2.**children**：非标准属性。返回的是指定元素的**子元素节点**的集合。【非常重要】

注释：

- 它只返回HTML节点，甚至不返回文本节点。
- 在IE6/7/8中包含注释节点（在IE678中，注释节点不要写在里面）。
- 和innerHTML方法一样，得到了几乎所有浏览器的支持。（所以用得最多）

```js
子节点数组 = 父节点.children;   //获取所有节点。用的最多。
```



### 11.4 DOM 节点的操作

**创建节点**

```js
	新的标签(元素节点) = document.createElement("标签名");
```



**插入节点**

方式一：父节点的最后插入一个新的子节点

```
父节点.appendChild(新的子节点);
```

方式二：在参考节点前插入一个新的节点，如果为null则在父节点里面的最后插入一个子节点

```
	父节点.insertBefore(新的子节点,作为参考的子节点)
```



**删除节点**

```js
父节点.removeChild(子节点);
```

解释：**用父节点删除子节点**。必须要指定是删除哪个子节点。

如果要删除自己，则可以采取下面这个操作

```js
node1.parentNode.removeChild(node1);
```



**复制节点**

```js
要复制的节点.cloneNode(false/true); 
```

参数解释：

- 不带参数/带参数false：只复制节点本身，不复制子节点。
- 带参数true：既复制节点本身，也复制其所有的子节点。



**设置节点的属性**

方式一：节点属性

```js
元素节点.属性名;
元素节点[属性名];
元素节点.属性名 = 新值;
元素节点[属性名] = 新值;
```

方式二：使用节点的 getAttribute() 和 setAttribute() 方法

```js
元素节点.getAttribute("属性名称"); // 获取属性名
元素节点.setAttribute("属性名", "新的属性值"); //设置属性名
```



**删除节点的属性**

```js
元素节点.removeAttribute(属性名);
```



**知识补充**

**innerHTML 和 innerText 的区别**

- value：标签的value属性。
- **innerHTML**：双闭合标签里面的内容（包含标签）。
- **innerText**：双闭合标签里面的内容（不包含标签）。



nodeType 属性

元素节点类型

| 值   | 节点类型         |
| ---- | ---------------- |
| 1    | 元素节点（标签） |
| 2    | 属性节点         |
| 3    | 文本节点         |



## 12 事件(待补充)

> 待补充内容：事件流

> 事件：就是文档或浏览器窗口中发生的一些特定的交互瞬间。对于 Web 应用来说，有下面这些代表性的事件：点击某个元素、将鼠标移动至某个元素上方、关闭弹窗等等。
>
> JavaScript 是以**事件驱动为核心**的一门语言。JavaScript 与 HTML 之间的交互是通过事件实现的。



### 12.1 事件的三要素

**事件的三要素：事件源、事件、事件驱动程序**。

比如关灯：事件源是开关 ，事件时开关被关闭 ，时间驱动程序是灯关了



结合 js 来看：

- 事件源：引发后续事件的html标签。
- 事件：js已经定义好了（见下图）。
- 事件驱动程序：对样式和html的操作。也就是DOM。

**代码书写步骤如下：**（重要）

- （1）获取事件源：document.getElementById(“box”); // 类似于Android里面的findViewById
- （2）绑定事件： 事件源box.事件onclick = function(){ 事件驱动程序 };
- （3）书写事件驱动程序：关于DOM的操作。

最简单的代码举例：（点击box1，然后弹框）

```js
<body>
<div id="box1"></div>
<script type="text/javascript">
    // 1、获取事件源
    var div = document.getElementById("box1");
    // 2、绑定事件
    div.onclick = function () {
        // 3、书写事件驱动程序
        alert("我是弹出的内容");
    }
</script>
</body>
```



### 12.2 常见的事件

> 参考文章：
>
> https://www.cnblogs.com/theblogs/p/9972319.html

**鼠标事件**

```
onclick：点击某个对象时触发
ondblclick：双击某个对象时触发
onmouseover：鼠标移入某个元素时触发
onmouseout：鼠标移出某个元素时触发
onmouseenter：鼠标进入某个元素时触发
onmouseleave：鼠标离开某个元素时触发
onmousedown：鼠标按下时触发
onmouseup：鼠标抬起时触发
onmousemove：鼠标被移动时触发
onwheel：鼠标滚轮滚动时触发
oncontextmenu：点击鼠标右键时触发
```

**键盘事件**

```
onkeydown：键盘的键按下时触发
onkeyup：键盘的键放开时触发
onkeypress：按下或按住键盘键时触发
```

**框架/对象事件**

```
onresize：浏览器窗口大小改变时触发
onabort：图形的加载被中断时触发
onload：元素加载完时触发
onerror：当加载文档或者图片时（没找到）发生的错误时触发
onscroll：文档滚动时触发
onpageshow：用户访问页面时触发
onunload：用户退出页面时触发
```

**表单事件**

```
onfocus：元素获得焦点时触发
onblur：元素失去焦点时触发
onchange：元素内容改变时触发
oninput：元素获取用户输入时触发
onsubmit：提交按钮时触发
onreset：重置按钮时触发
onselect：文本被选中时触发
```

**拖动事件**

```
ondrag：元素正在拖动时触发
ondragend：用户完成元素拖动时触发
```

**多媒体事件**

```
onplay：在视频/音频开始播放时触发
onended：在视频/音频播放结束时触发
onpause：在视频/音频暂停时触发
```



### 12.3 绑定事件

DOM0 的写法

```js
    element.onclick = function () {}
```



DOM2 的写法

**addEventListener（高版本浏览器）**

```js
    element.addEventListener('click', function () {}, false);
```

参数：

* 参数1：事件名的字符串。(没有 on )

- 参数2：回调函数：当事件触发时，该函数会被执行。
- 参数3：**true表示捕获阶段触发，false表示冒泡阶段触发（默认）**。如果不写，则默认为false。【重要】

**attachEvent（IE8及以下版本浏览器）**

```js
    element.attachEvent('onclick', function () {});
```

* 参数1：事件名的字符串。（有 on）

- 参数2：回调函数：当事件触发时，该函数会被执行。



兼容性写法：

注意事项：

- `addEventListener()`中的this，是绑定事件的对象。
- `attachEvent()`中的this，是window。



兼容所有版本的写法：

```js
function myBind(element, eventStr, callback) {
  if (element.addEventListener) {
    //大部分浏览器兼容的方式
    element.addEventListener(eventStr, callback, false);
  } else {
    /*
     * this是谁，由调用方式决定
     * callback.call(element)
     */
    //IE8及以下
    element.attachEvent("on" + eventStr, function () {
      //在匿名函数 function 中调用回调函数callback
      callback.call(element);
    });
  }
}
```



### 12.4 事件对象

当事件的响应函数被触发时，会产生一个事件对象`event`。浏览器每次都会将这个事件`event`作为实参传进之前的响应函数。

**获取 event 对象（兼容性问题）**

所有浏览器都支持event对象，但支持的方式不同。如下。

1. 普通浏览器的写法是 `event`。

2. ie 678 的写法是 `window.event`。

```js
 event = event || window.event; // 兼容性写法
```

案例：

```js
    document.onclick = function (event) {
        event = event || window.event; ////兼容性写法
    }
```



event的属性

![](C:\Users\chen\Desktop\前端\学习笔记（整理中）\前端\JavaScript\![img](https:\camo.githubusercontent.com\c0983e76897d718f4db2f16a904fe6669b296271545329cdc2bc287ed01007db\687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230335f313733392e706e67))



由于pageX 和 pageY的兼容性不好，我们可以这样做：

- 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。



### 12.4 事件的传播和事件冒泡

事件传播的三个阶段是：事件捕获、事件冒泡和目标。

- 事件捕获阶段：事件从祖先元素往子元素查找（DOM树结构），直到捕获到事件目标 target。在这个过程中，默认情况下，事件相应的监听函数是不会被触发的。
- 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。
- 事件冒泡阶段：事件从事件目标 target 开始，从子元素往冒泡祖先元素冒泡，直到页面的最上一级标签。

![img](https://camo.githubusercontent.com/6dc3dcf8dff8643224f662f03b4f69120ec34aab8830529643d5f94995c07faf/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f313231382e6a7067)

