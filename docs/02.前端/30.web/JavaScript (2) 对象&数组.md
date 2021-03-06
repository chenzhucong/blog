---
title: JavaScript (2) 对象&数组
date: 2022-02-06 16:40:41
permalink: /pages/a9eafe/
---
# JavaScript（2) 对象

## 6 对象

### 6.1 对象

**概念**

* 在 JavaScript 中，对象是一组**无序**的相关属性和方法的集合。

**作用**

* 主要用于封装信息。存储**特征**（属性）和**行为**（方法）。

**属性**（专有名字）

- 键：相当于属性名。
- 值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）。

```js
var person = { name: 'tom'}; // 键: 值
```



**属性的增删改查**

除了通过 `.` 的方式访问对象的属性，还可以使用 `['name'] `的方式读取属性。



**添加属性**

```
对象.属性名 =  属性值
对象["属性名"] = 属性值
```

**删除属性**

```
delete 对象.属性名
delete 对象["属性名"] 
```

**修改属性值**

```
对象.属性名 = 新值
对象["属性名"] = 属性值
```

**查询属性**

```
对象.属性名
对象["属性名"]
```

注释：未定义的属性为`undefined`



**补充**

* **对象是引用数据类型，除基本数据类型外的数据类型全部是对象**
* **关于基本数据类型和引用数据类型前面章节有讲述，这里不做过多赘述**



### 6.2 分类

**内置对象**

> 由ES标准中定义的对象，在任何的ES的实现中都可以使用。

| 置对象    | 对象说明       |
| --------- | -------------- |
| Arguments | 函数参数集合   |
| Array     | 数组           |
| Boolean   | 布尔对象       |
| Math      | 数学对象       |
| Date      | 日期时间       |
| Error     | 异常对象       |
| Function  | 函数构造器     |
| Number    | 数值对象       |
| Object    | 基础对象       |
| RegExp    | 正则表达式对象 |
| String    | 字符串对象     |



 **宿主对象**

> 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。

* BOM 
* DOM



**自定义对象**

> 由开发人员自己创建的对象。通过 new 关键字创建出来的对象实例，都是属于对象类型，比如Object、Array、Date等。



### 6.3 基本包装类型

属性和方法只能添加给对象，不能添加给基本数据类型。



> 为什么基本数据类型会有方法呢？比如string的`length(),indexOf()`

* 当我们对一些基本数据类型的值去调用属性和方法时，浏览器会**临时使用包装类将基本数据类型转换为引用数据类型**，这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。



JS 为我们提供了三个**基本包装类**：

- String()：将基本数据类型字符串，转换为 String 对象。
- Number()：将基本数据类型的数字，转换为 Number 对象。
- Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。



注释：

1. 在实际开发中不会用到基本包装类型，因为可能会带来一些**不可预期**的结果。

2. 可能会带来一些不可预期的结果。

### 6.4 内置对象

#### 6.4.1 String

通过上一节，我们知道 String 对象的方法就是字符串的方法。

注释：

**字符串的所有方法，都不会改变原字符串**（字符串的不可变性），操作完成后会返回一个新的值。通过垃圾回收机制回收。



**前提补充**

**关于查询结果：**

* 默认未提及一次还是多次都是返回查到后的结果后不再继续查找，如继续查找会说明

**关于参数：**

* `[]` 符号参数表示该参数为可选参数

**关于查找结果，大部分的查找索引的都适用下面的结果**：

*  0 表示查询内容在开头，其他表示查询内容所在的索引值
* -1 表示未找到指定内容





下面按功能来给字符串区分方法，方便记忆。

**查找字符串**

**1. indexOf()⭐️/lastIndexOf：**

* 获取字符串中指定内容的索引。

```js
索引值 = str.indexOf(想要查询的字符串);
索引值 = str.indexOf(想要查询的字符串, [起始位置（可选）]);
```

**2. search()⭐️：**

* 获取字符串中指定内容的索引（参数里一般是正则）

```js
索引值 = str.search(想要查找的字符串);
索引值 = str.search(正则表达式);
```

**3. includes()：**

* 字符串中是否包含指定的内容

```js
布尔值 = str.includes(想要查找的字符串, [position]);
```

**4. startsWith()：**

* 字符串是否以指定的内容开头

```js
布尔值 = str.startsWith(想要查找的内容, [position]);
```

**5. endWith**()：

* 字符串是否以指定的内容结尾

```js
布尔值 = str.endsWith(想要查找的内容, [position]);
```



**获取指定位置的字符**

**1. charAt(index)**

**`2. str[index]`() （推荐）**

* 返回字符串指定位置的字符

```js
字符 = str.charAt(index);
字符 = str[index];
```

**3. charCodeAt(index)：**

* 返回字符串指定位置的字符的 Unicode 编码。

```js
字符 = str.charCodeAt(index);
```



**字符串截取**

**1. slice()⭐️**

* 从字符串中截取指定的内容。

```js
新字符串 = str.slice(开始索引, 结束索引); 
//两个参数都是索引值。包左不包右。
```
案例：

```
const a = '012345'
console.log(a.slice(1)) // 12345
console.log(a.slice(1,5)) // 1234
```

**2. substring()**

```js
新字符串 = str.substring(开始索引, 结束索引);
//两个参数都是索引值。包左不包右。
```

同slice，不同之处如下

- `substring()`不能接受负值作为参数。如果传递了一个**负值**，则默认使用 0。
- `substring()`还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， `substring(1, 0)`相当于截取的是第一个字符。

**3. substr()**

从字符串中截取指定的内容。

```js
字符串 = str.substr(开始索引, 截取的长度);
```



**String.fromCharCode()**

根据字符的 Unicode 编码获取字符。

```js
var result2 = String.fromCharCode(20013);
console.log(result2); // 打印结果：中
```



**concat()**

字符串的连接。

```js
    新字符串 = str1.concat(str2)； //连接两个字符串
```



**split()⭐️**

通过指定的分隔符，将一个字符串拆分成一个**数组**。

```js
新的数组 = str.split(分隔符);
```

案例：

```js
var str = 'qian, gu, yi, hao'; // 用逗号隔开的字符串
var array = str.split(','); // 将字符串 str 拆分成数组，通过逗号来拆分

console.log(array); // 打印结果是数组：["qian", " gu", " yi", " hao"]
```



**replace()⭐️**

将字符串中的指定内容，替换为新的内容并返回。

```js
新的字符串 = str.replace(被替换的字符/正则，新的字符);
```

案例：

```js
//replace()方法：替换
var str2 = 'Today is fine day,today is fine day !';

console.log(str2.replace('today', 'tomorrow'));
//只能替换第一个today
console.log(str2.replace(/today/gi, 'tomorrow')); 
//这里用到了正则，才能替换所有的today
```



**repeat()**

将字符串重复指定的次数。

```
newStr = str.repeat(重复次数);
```

案例：

```js
const name = 'qianguyihao';

console.log(name.repeat(2)); // 打印内容：qianguyihaoqianguyihao
```



**trim()**

去除字符串前后的空白



**toLowerCase() & toUpperCase()**

大小写转换



**html方法**

将字符串转换成html标签

```js
console.log(str.anchor());
console.log(str.big());
console.log(str.sub());
console.log(str.sup());
console.log(str.link('http://www.baidu.com'));
console.log(str.bold());
```

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313533362e706e67)



#### 6.4.2 Number 和 Math

**Number**

**Number.isInteger()** 

是否为整数

```js
布尔值 = Number.isInteger(数字);
```



**toFixed()**

将数字 myNum 的小数点后面保留 num 位小数（四舍五入），并返回。返回结果是字符串。

```js
字符串 = myNum.toFixed(num);
```



**Math**

Math属于一个工具类，里面封装了数学运算相关的属性和方法

| 方法              | 描述                                       | 备注              |
| ----------------- | ------------------------------------------ | ----------------- |
| Math.PI           | 圆周率                                     | Math对象的属性    |
| Math.abs()        | **返回绝对值**                             |                   |
| Math.random()     | 生成0-1之间的**随机浮点数**                | 取值范围是 [0，1) |
| Math.floor()      | **向下取整**（往小取值）                   |                   |
| Math.ceil()       | **向上取整**（往大取值）                   |                   |
| Math.round()      | 四舍五入取整（正数四舍五入，负数五舍六入） |                   |
| Math.max(x, y, z) | 返回多个数中的最大值                       |                   |
| Math.min(x, y, z) | 返回多个数中的最小值                       |                   |
| Math.pow(x,y)     | 乘方：返回 x 的 y 次幂                     |                   |
| Math.sqrt()       | 开方：对一个数进行开方运算                 |                   |



**常用方法**

**Math.random()⭐️**

返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。



题目：

**生成1~100的随机数**

```
Math.floor((Math.random()*100)+1);
```

注释：没有向上取整的函数，`round`是四舍五入。



补充：

 **url 编码和解码**

URI (Uniform ResourceIdentifiers,通用资源标识符)进行编码，以便发送给浏览器。有效的URI中不能包含某些字符，例如空格。而这URI编码方法就可以对URI进行编码，它们用特殊的UTF-8编码替换所有无效的字符，从而让浏览器能够接受和理解。

```js
    encodeURIComponent();   //把字符串作为 URI 组件进行编码
    decodeURIComponent();   //把字符串作为 URI 组件进行解码
```



举例

```js
    var url = "http://www.cnblogs.com/smyhvae/";

    var str = encodeURIComponent(url);
    console.log(str);                           //打印url的编码
    console.log(decodeURIComponent(str));      
		//对url进行编码后，再解码，还原为url
```

打印结果

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313433322e706e67)



#### 6.4.3 Date⭐️

对象Date 用来处理日期和时间

```js
new Date([时间字符串/时间数字/时间戳])
```

* 默认返回的是系统的当前时间对象



**传递参数**

**参数是字符串⭐️**

```js
const date11 = new Date('2020/02/17 21:00:00');
console.log(date11); // Mon Feb 17 2020 21:00:00 GMT+0800 (中国标准时间)

const date12 = new Date('2020/04/19'); // 返回的就是四月
console.log(date12); // Sun Apr 19 2020 00:00:00 GMT+0800 (中国标准时间)

const date13 = new Date('2020-05-20');
console.log(date13); // Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

const date14 = new Date('Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)');
console.log(date14); // Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)
```

总结：字符串创建格式中的1，2，3 都是常用的。注意2，3创建的时间一个为 0 点 一个为早上 8 点。



**参数是数字**（基本不用）

```js
const date21 = new Date(2020, 2, 18); // 注意，第二个参数返回的是三月，不是二月
console.log(date21); // Wed Mar 18 2020 00:00:00 GMT+0800 (中国标准时间)

const date22 = new Date(2020, 3, 18, 22, 59, 58);
console.log(date22); // Sat Apr 18 2020 22:59:58 GMT+0800 (中国标准时间)

const params = [2020, 06, 12, 16, 20, 59];
const date23 = new Date(...params);
console.log(date23); // Sun Jul 12 2020 16:20:59 GMT+0800 (中国标准时间)
```



**参数是时间戳**⭐️

```js
const date31 = new Date(1591950413388);
console.log(date31); // Fri Jun 12 2020 16:26:53 GMT+0800 (中国标准时间)

// 先把时间对象转换成时间戳，然后把时间戳转换成时间对象
const timestamp = new Date().getTime();
const date32 = new Date(timestamp);
console.log(date32); // Fri Jun 12 2020 16:28:21 GMT+0800 (中国标准时间)
```



**日期对象的方法**

| 方法名            | 含义              | 备注                 |
| ----------------- | ----------------- | -------------------- |
| getFullYear()     | 获取年份          |                      |
| getMonth()        | **获取月： 0-11** | 0代表一月            |
| getDate()         | **获取日：1-31**  | 获取的是几号         |
| getDay()          | **获取星期：0-6** | 0代表周日，1代表周一 |
| getHours()        | 获取小时：0-23    |                      |
| getMinutes()      | 获取分钟：0-59    |                      |
| getSeconds()      | 获取秒：0-59      |                      |
| getMilliseconds() | 获取毫秒          | 1s = 1000ms          |

**注释：不要使用`toLocaleString()`的方式直接获取时间，因为不同的框架之间回导致格式问题。尤其是跨端平台如小程序等（坑）**



**时间戳**

> 时间戳指的是从格林威治标准时间的`1970年1月1日，0时0分0秒`到当前日期所花费的**毫秒数**（1秒 = 1000毫秒）。
>
> 计算机底层在保存时间时，使用的都是时间戳。时间戳的存在，就是为了**统一**时间的单位。



**获取时间戳**

* Date对象的方法获取

```js
new Date().getTime() //较常用
Date.now() //常用获取当前时间戳，h5新特性
```

* Date对象转换为Number或者Math获取

```js
+new Date() // 最常用
new Date() * 1
Number(new Date())
new Date().valueOf()
```



#### 6.4.4 Object

**Object.assign()**：用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。

```js
Object.assign(target, ...sources)
```

源对象和目标对象相同的拥有相同键，源对象的值会覆盖目标对象的值



备注：以下方法返回的**数组的顺序均根据键名的Unicode编码排序**。

**Object.entries()**：返回一个数组，其元素是与直接在object上找到的可枚举属性键值对相对应的数组。

**Object.keys()**： 返回键的属数组。

**Object.values()**：返回值的数组。



## 7 数组

### 7.1 数组

**概念：**

在 JavaScript 中，数组是一组**有序**的数据集合。且通过索引（ 从0开始的自然数 ）来操作元素。换句话说，数组是一个使用索引作为键的对象。



**创建数组**

```
// 使用字面量创建数组 。常用
let arr1 = []

// 使用构造函数创建数组
let arr = new Array(参数);
let arr = Array(参数);
```

注释：

1. 参数为**空**则创建空数组

2. 参数为**一个数值**则创建**数值长度的数组**

3. 参数为**多个数值**则将**多个数值作为数组的参数**



**数组中的元素类型**

数组中可以存放**任意类型**的数据，例如字符串、数字、布尔值、对象等。也可以为数组（多维数组）。



**数组属性的查询**

```
数组[索引] = 值;
```



**索引**

用来访问数组元素的序号，代表的是数组中的元素在数组中的位置（下标从 0 开始算起）。



**长度**

数组的长度是元素个数，不要跟索引号混淆。通过~属性获取数组的长度

```
数组的长度 = 数组名.length；
```



**修改长度**

```
数组名.length = 数组长度
```

**规则：**

如果修改的 length 大于原长度，则多出部分会空出来，置为 null。

如果修改的 length 小于原长度，则多出的元素会被删除，数组将从后面删除元素。



**遍历**

**遍历：就是把数组中的每个元素从头到尾都访问一次。⭐️**



### 7.2 数组的方法⭐️

#### **7.2.1数组的类型相关方法**

| 方法                             | 描述                               | 备注    |
| -------------------------------- | ---------------------------------- | ------- |
| Array.isArray()⭐️                 | 判断是否为数组                     |         |
| toString()                       | 将数组转换为字符串                 |         |
| Array.from(arrayLike)            | 将**伪数组**转化为**真数组**       | ES6新增 |
| Array.of(value1, value2, value3) | 创建数组：将**一系列值**转换成数组 |         |



**数组元素的添加和删除**

| 方法      | 描述                                                         | 备注           |
| --------- | ------------------------------------------------------------ | -------------- |
| push()⭐️   | 向数组的**最后面**插入一个或多个元素，返回结果为新数组的**长度** | 会改变原数组   |
| pop()     | 删除数组中的**最后一个**元素，返回结果为**被删除的元素**     | 会改变原数组   |
| unshift() | 在数组**最前面**插入一个或多个元素，返回结果为新数组的**长度** | 会改变原数组   |
| shift()   | 删除数组中的**第一个**元素，返回结果为**被删除的元素**       | 会改变原数组   |
| slice()⭐️  | 从数组中**提取**指定的一个或多个元素，返回结果为**新的数组** | 不会改变原数组 |
| splice()⭐️ | 从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组** | 会改变原数组   |
| fill()    | 填充数组：用固定的值填充数组，返回结果为**新的数组**         | 不会改变原数组 |



**数组的合并和拆分**

| 方法      | 描述                                                 | 备注           |
| --------- | ---------------------------------------------------- | -------------- |
| concat()⭐️ | 合并数组：连接两个或多个数组，返回结果为**新的数组** | 不会改变原数组 |
| join()⭐️   | 将数组转换为字符串，返回结果为**转换后的字符串**     | 不会改变原数组 |

注释：

```js
// 字符串转数据
str.split()
```



**数组排序**

| 方法      | 描述                                                    | 备注         |
| --------- | ------------------------------------------------------- | ------------ |
| reverse() | 反转数组，返回结果为**反转后的数组**                    | 会改变原数组 |
| sort()⭐️   | 对数组的元素,默认按照**Unicode 编码**，从小到大进行排序 | 会改变原数组 |



**查找数组的元素**

| 方法                   | 描述                                                         | 备注                                                     |
| ---------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| indexOf(value)         | 从前往后索引，检索一个数组中是否含有指定的元素               |                                                          |
| lastIndexOf(value)     | 从后往前索引，检索一个数组中是否含有指定的元素               |                                                          |
| includes(item)         | 数组中是否包含指定的内容                                     |                                                          |
| find(function())⭐️      | 找出**第一个**满足「指定条件返回 true」的元素                |                                                          |
| findIndex(function())⭐️ | 找出**第一个**满足「指定条件返回 true」的元素的 index        |                                                          |
| every()                | 确保数组中的每个元素都满足「指定条件返回 true」，则停止遍历，此方法才返回 true | 全真才为真。要求每一项都返回 true，最终的结果才返回 true |
| some()                 | 数组中只要有一个元素满足「指定条件返回 true」，则停止遍历，此方法就返回 true | 一真即真。只要有一项返回 true，最终的结果就返回 true     |



**遍历数组**

| 方法       | 描述                                                         | 备注                                                   |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| for 循环   | 这个大家都懂                                                 |                                                        |
| forEach()⭐️ | 和 for 循环类似，但需要兼容 IE8 以上                         | forEach() 没有返回值。也就是说，它的返回值是 undefined |
| map()⭐️     | 对原数组中的每一项进行加工，将组成新的数组                   | 不会改变原数组                                         |
| filter()⭐️  | 过滤数组：返回结果是 true 的项，将组成新的数组，返回结果为**新的数组** | 不会改变原数组                                         |
| reduce()⭐️  | 接收一个函数作为累加器，返回值是回调函数累计处理的结果       |                                                        |



#### 7.2.2数据类型相关

**isArray()：**

判断是否为数组

```js
布尔值 = Array.isArray(被检测的数组);
```

注释：此方法已取代 `A instanceof B`的方式判断数组类型



**toString()：**

把数组转换成字符串，每一项用`,`分割。

```
字符串 = 数组.toString();
```

补充：

**将数组转换为字符串的方式**

```js
//1
字符串 = 数组.toString();
// 2
字符串 = String(数组);
// 3 建议,默认就是','
字符串 = 数组.join();
```



 **Array.from()：**将**伪数组**或可遍历对象转换为**真数组**。

```js
array = Array.from(arrayLike);
```

案例：

```js
const name = 'qianguyihao';
console.log(Array.from(name)); // 打印结果是数组：["q","i","a","n","g","u","y","i","h","a","o"]
```

**补充：**

**关于伪数组**

**伪数组**：包含 length 属性的对象或可迭代的对象。

伪数组的原型链中没有 Array.prototype，而真数组的原型链中有 Array.prototype。因此伪数组没有数组的一般方法，比如 pop()、join() 等方法。

**常见的伪数组**

1. 函数内部的 arguments
2. DOM 对象列表（比如通过 document.getElementsByTags 得到的列表）
3. jQuery 对象（比如 $(“div”) ）



Array.of():(可以忽略)

根据参数里的内容，创建数组。功能同new Array()

```js
const arr = Array.of(1); // []
const arr = Array.of(1, 'abc', true); // [1, "abc", true]
```



#### **7.2.3数组元素的添加和删除**

**以下方法均会改变原数组**

**push()：**向数组的**最后面**插入一个或多个元素，返回结果为新数组的**长度**。改变原数组。

**unshift()：**在数组**最前面**插入一个或多个元素，返回结果为新数组的**长度**。

**pop()：**删除数组中的**最后一个**元素，返回结果为**被删除的元素**。

**shift()：**删除数组中的**第一个**元素，返回结果为**被删除的元素**。

```js
新数组的长度 = 数组.push(元素);
新数组的长度 = 数组.unshift(元素);
被删除的元素 = 数组.pop();
被删除的元素 = 数组.shift();
```



**splice()：**从数组中**删除或添加元素**，返回结果为**被删除元素组成的新数组**

```js
新数组 =数组.splice(开始索引,删除数量,[新的元素1, 新的元素2...])
```



**下面方法不会改变原数组**

**slice()：**从数组中**提取**指定的一个或者多个元素，返回结果为**新的数组**。

```js
新数组 = 原数组.slice(开始位置的索引, 结束位置的索引); 
//注意：包含开始索引，不包含结束索引
```

注释：当不确定数组的长度时，可用slice做数组的裁减。



**数组的合并和拆分**

**下面方法不会改变原数组**

**concat()：**连接两个或多个数组，返回结果为**新的数组**。**不会改变原数组。**`concat()`方法的作用是**数组合并**。

```
    新数组 = 数组1.concat(数组2, 数组3 ...);
```

```js
let a =[1]
let b =a.concat([2])
console.log(a === b)  //fasle
```

注释：之前记反了。`concat()`是不改变原数组的。



**join()：**将数组转换为字符串，返回结果为**转换后的字符串**

```js
新的字符串 = 原数组.join([参数]); // 参数默认是','
```



#### 7.2.4 数组排序

**以下方法均会改变原数组**

**reverse()**：反转数组，返回结果为**反转后的数组**（会改变原来的数组）。

```js
反转后的数组 = 数组.reverse();
```



**sort()：**对数组的元素进行从小到大来按照排序（会改变原来的数组）。

```js
arrayObject.sort([sortby]) // sortby必须是函数
```

默认是按照unicode编码进行排序

```js
[5, 2, 11, 3, 4, 1].sort()  // [1,11,2,3,4,5]
```



自定义的话按照下面规则（重要）

- 如果返回一个大于 0 的值，则元素会交换位置
- **如果返回一个小于 0 的值，则元素位置不变**
- 如果返回一个等于 0 的值，则认为两个元素相等，则不交换位置

**案例：冒泡排序**

```js
var arr = [5, 2, 11, 3, 4, 1];

function bubblingSort(arr = []) {
  arr.sort((a, b) => {
    if (a > b) {
      // 如果 a 大于 b，则交换 a 和 b 的位置
      return 1;
    } else if (a < b) {
      // 如果 a 小于 b，则位置不变
      return -1;
    } else {
      // 如果 a 等于 b，则位置不变
      return 0;
    }
  });
  arr.sort((a, b) => {
    return a - b; // 升序排列
    // return b - a; // 降序排列
  });
  arr.sort((a, b) => a - b); // 常用
}
```



**实战开发中的数组排序：将数组从小到大排序****

```js
let dataList = [
  {
    title: "品牌鞋子，高品质低价入手",
    publishTime: 200,
  },
  {
    title: "不是很贵，但是很暖",
    publishTime: 100,
  },
  {
    title: "无法拒绝的美食，跟我一起吃吃",
    publishTime: 300,
  },
];
dataList.sort((a, b) => parseInt(a.publishTime) - parseInt(b.publishTime));
```



#### 7.2.5 查找数组的元素

**includes()：**判断一个数组中是否包含指定的元素。

```js
布尔值 = arr.includes(想要查找的元素, [position]);
```



**find()：**找出**第一个**满足「指定条件返回 true」的元素；如果没找到，则返回 undefined。

```js
boolean = find((item, index, arr) => {
  return true;
});
```

**findIndex()：**找出**第一个**满足「指定条件返回 true」的元素的 index。没有则为-1

```js
index = findIndex((item, index, arr) => {
    return true;
});
```



**every()：**对数组中每一项运行回调函数，如果都返回 true，every 就返回 true；如果有一项返回 false，则停止遍历，此方法返回 false。

**some()：**对数组中每一个元素运行回调函数，只要有一个元素返回 true，则停止遍历，此方法返回 true。



#### 7.2.6 遍历数据

**以下方法均不会改变原数组**

**for循环**

```js
const arr = [1, 2, 3];
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
```



**forEach()⭐️**

功能：对数组中每一项运行回调函数，返回undefined

应用：仅用于遍历数组。

```js
array.forEach(function(currentValue, index, arr), thisValue)
```

* currentValue：必填，当前元素。

* index：可选，当前元素的索引。

* arr：可选，当前元素所属的数组对象。

* thisValue：可选，传递给函数的值一般用this值，如果这个参数为空，"undefined"会传递给"this"值。（这个参数一般很少填）



**forEach() 能不能改变原数组？**⭐️

**1、数组的元素是基本数据类型**：（无法改变原数组）

```js
let numArr = [1, 2, 3];

numArr.forEach((item) => {
    item = item * 2;
});
console.log(JSON.stringify(numArr));
// 打印结果：[1, 2, 3]
```

**2、数组的元素是引用数据类型**：（直接修改整个元素对象时，无法改变原数组）

```js
let objArr = [
    { name: '千古壹号', age: 20 },
    { name: '许嵩', age: 30 },
];

objArr.forEach((item) => {
    item = {
        name: '邓紫棋',
        age: '29',
    };
});
console.log(JSON.stringify(objArr));
// 打印结果：[{"name":"千古壹号","age":20},{"name":"许嵩","age":30}]
```

**3、数组的元素是引用数据类型**：（修改元素对象里的某个属性时，可以改变原数组）

```js
let objArr = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 30 },
];

objArr.forEach((item) => {
    item.name = '邓紫棋';
});
console.log(JSON.stringify(objArr)); 
// 打印结果：[{"name":"邓紫棋","age":28},{"name":"邓紫棋","age":30}]
```

**4、forEach() 通过参数 2、参数 3 修改原数组**：（标准做法）

```js
// 1、数组的元素是基本数据类型
let numArr = [1, 2, 3];

numArr.forEach((item, index, arr) => {
    arr[index] = arr[index] * 2;
});
console.log(JSON.stringify(numArr)); // 打印结果：[2,4,6]

// 2、数组的元素是引用数据类型时，直接修改对象
let objArr = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 34 },
];

objArr.forEach((item, index, arr) => {
    arr[index] = {
        name: '小明',
        age: '10',
    };
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"小明","age":"10"},{"name":"小明","age":"10"}]

// 3、数组的元素是引用数据类型时，修改对象的某个属性
let objArr2 = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 34 },
];

objArr2.forEach((item, index, arr) => {
    arr[index].name = '小明';
});
console.log(JSON.stringify(objArr2)); // 打印结果：[{"name":"小明","age":28},{"name":"小明","age":34}]
```



**总结：遍历数组使用`forEach()`,操作或改变数组用`map()`避免低级错误**



**map()**⭐️

功能：对数组中每一项运行回调函数，返回该函数的结果，组成的新数组（返回的是**加工之后**的新数组）。不会改变原数组。

应用：对数组的元素进行加工

```
arr.map(function (item, index, arr) {
    return newItem;
});
```

* currentValue：必填，当前元素。

* index：可选，当前元素的索引。

* arr：可选，当前元素所属的数组对象。

实战应用

1. 加工数组元素

```js
var arr1 = [1, 3, 6, 2, 5, 6];

var arr2 = arr1.map(function (item, index) {
    return item + 10; //让arr1中的每个元素加10
});
console.log(arr2);
```

2. 筛选数据。将 A 数组中某个属性的值，存储到 B 数组中。

```js
const arr1 = [
    { name: '千古壹号', age: '28' },
    { name: '许嵩', age: '32' },
];

// 将数组 arr1 中的 name 属性，存储到 数组 arr2 中
const arr2 = arr1.map((item) => item.name);

// 将数组 arr1 中的 name、age这两个属性，改一下“键”的名字，存储到 arr3中
const arr3 = arr1.map((item) => ({
    myName: item.name,
    myAge: item.age,
})); // 将数组 arr1 中的 name 属性，存储到 数组 arr2 中

console.log('arr1:' + JSON.stringify(arr1));
console.log('arr2:' + JSON.stringify(arr2));
console.log('arr3:' + JSON.stringify(arr3));
```



**注释：`map()`同`forEach()`,修改对象的属性仍然会修改原数组**



**filter()⭐️**

功能：对数组中的**每一项**运行回调函数，该函数返回结果是 true 的项，将组成新的数组（返回值就是这个新的数组）。不会改变原数组。

应用：过滤数组元素

```js
arr.filter(function (item, index, arr) {
    return true;
});
```



**reduce()⭐️**

功能：接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。返回值是回调函数累计处理的结果。

应用：主要用于需要累积的结果。

```js
arr.reduce(function (previousValue, currentValue, currentIndex, arr) {}, initialValue);
```

- previousValue：必填，上一次调用回调函数时的返回值
- currentValue：必填，当前正在处理的数组元素
- currentIndex：选填，当前正在处理的数组元素下标
- arr：选填，调用 reduce()方法的数组
- initialValue：选填，可选的初始值（作为第一次调用回调函数时传给 previousValue 的值）

**实战：求和，统计元素出现次数。**

  