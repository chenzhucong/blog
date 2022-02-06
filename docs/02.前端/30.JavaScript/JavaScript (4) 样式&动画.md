---
title: JavaScript (4) 样式&动画
date: 2022-02-06 16:40:49
permalink: /pages/0c90fd/
---
# JavaScript (4) 样式和动画

## 13 样式

### 13.1 style 行内样式 

**行内样式的查看和编辑**

```js
// 查看
元素.style.样式名
元素.style[样式名]
// 编辑行内样式
元素.style.样式名 = 样式值;
```



**行内样式的规则：**

* style是对象

* 对象的键使用驼峰命名规则

* 对象的值的数据类型是字符串
* 获取行内样式，和内嵌和外链无关



**常用的style对象的属性：**

- backgroundColor
- backgroundImage
- color
- width
- height
- border
- opacity 设置透明度 (IE8以前是filter: alpha(opacity=xx))



### 13.2  className 内嵌样式

**获取元素当前正在显示的样式**

1.w3c：

```js
    window.getComputedStyle("要获取样式的元素", "伪元素");
```



**2.IE和opera**

```js
 obj.currentStyle;
```



注意：

* 返回值是个对象。可以通过`对象.样式名`来读取具体的某一个样式。
* currentStyle和getComputedStyle()读取到的样式都是只读的，不能修改



## 14 动画

### 14.1 offset 位移

> offset的中文是：偏移，补偿，位移。



offset是一套用来获取元素尺寸的属性，主要包括下面五个：  

- offsetWidth
- offsetHight
- offsetLeft
- offsetTop
- offsetParent



**1、offsetWidth 和 offsetHight**

`offsetWidth` 和 `offsetHight`：获取元素的**宽高 + padding + border**，不包括margin。如下：

- offsetWidth = width + padding + border
- offsetHeight = Height + padding + border

这两个属性，他们绑定在了所有的节点元素上。获取元素之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。

案例:

```js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            padding: 10px;
            border: 10px solid #000;
            margin: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>

<div class="box"></div>
<script>
    var div1 = document.getElementsByTagName("div")[0];

    console.log(div1.offsetHeight);          //打印结果：140（100+20+20）
    console.log(typeof div1.offsetHeight);   //打印结果：number

</script>
</body>
</html>
```



**2、offsetParent**

`offsetParent`：获取当前元素的**定位父元素**。

- 如果当前元素的父元素，**有CSS定位**（position为absolute、relative、fixed），那么 `offsetParent` 获取的是**最近的**那个父元素。
- 如果当前元素的父元素，**没有CSS定位**（position为absolute、relative、fixed），那么`offsetParent` 获取的是**body**。

```js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div class="box1" style="position: absolute;">
    <div class="box2" style="position: fixed;">
        <div class="box3"></div>
    </div>
</div>
<script>

    var box3 = document.getElementsByClassName("box3")[0];

    console.log(box3.offsetParent);
</script>
</body>
</html>
```

打印结果：

[![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313732352e706e67)](https://camo.githubusercontent.com/c491103b0927ed774c4a7516a44ed76b07ffbe0121690c5f5052bebc1d9948e2/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230325f313732352e706e67)



**3、offsetLeft 和 offsetTop**

`offsetLeft`：当前元素相对于其**定位父元素**的水平偏移量。

`offsetTop`：当前元素相对于其**定位父元素**的垂直偏移量。

备注：从父亲的 padding 开始算起，父亲的 border 不算在内。

举例：

```js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box1 {
            width: 300px;
            height: 300px;
            padding: 100px;
            margin: 100px;
            position: relative;
            border: 100px solid #000;
            background-color: pink;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: red;
            /*position: absolute;*/
            /*left: 10px;*/
            /*top: 10px;*/
        }
    </style>
</head>
<body>
<div class="box1">
    <div class="box2" style="left: 10px"></div>
</div>

<script>

    var box2 = document.getElementsByClassName("box2")[0];

    //offsetTop和offsetLeft
    console.log(box2.offsetLeft);  //100px
    console.log(box2.style.left);  //10px


</script>

</body>
</html>
```

在父盒子有定位的情况下，offsetLeft == style.left(去掉px之后)。注意，后者只识别行内样式。但区别不仅仅于此，下面会讲。



**offsetLeft 和 style.left 区别 (重要)**

**最大区别：**

offsetLeft 可以返回无定位父元素的偏移量。如果父元素中都没有定位，则body为准。

style.left 只能获取行内样式，如果父元素中都没有设置定位，则返回""（意思是，返回空字符串）;



**其他区别：**

offsetTop 返回的是数字，而 style.top 返回的是字符串，而且还带有单位：px。

offsetLeft 和 offsetTop **只读**，而 style.left 和 style.top 可读写（只读是获取值，可写是修改值）

**总结：**

**offsetLeft用于获取值方便。方便计算。适合用于监听元素的变化。**

**style只能获取行内样式，但是属性的值是可以赋值的，使用于改变元素的样式。**



### 14.2 scroll 滚动

**window.onscroll() 方法**

> 当我们用鼠标滚轮，滚动网页的时候，会触发 window.onscroll() 方法。



**1、ScrollWidth 和 scrollHeight**

`ScrollWidth` 和 `scrollHeight`：获取元素**整个滚动区域**的宽、高。包括 width 和 padding，不包括 border和margin。

**注意**：

`scrollHeight` 的特点是：如果内容超出了盒子，`scrollHeight`为内容的高（包括超出的内容）；如果不超出，`scrollHeight`为盒子本身的高度。`ScrollWidth`同理。

**2、scrollTop 和 scrollLeft**

- `scrollLeft`：获取水平滚动条滚动的距离。
- `scrollTop`：获取垂直滚动条滚动的距离。

**实战经验**：

当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。

当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了。



**关于兼容性问题：**

文档没有 DTD 声明的文档：

```js
document.body.scrollTop
```

文档有 DTD 声明的文档：

```
 document.documentElement.scrollTop
```

在有 DTD 声明的情况下，要求是这种写法，IE6、7、8才能认出来。

兼容性写法：

```js
    document.body.scrollTop || document.documentElement.scrollTop //方式一，使用短运算法做错误捕获

    document.body.scrollTop + document.documentElement.scrollTop  //方式二，使用隐形类型转化
```

最终兼容版本

```js
    window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

```



建议：

在兼容性问题上将需要兼容的问题封装到一个包里，做自动兼容处理。比如将scrollTop 和 scrollLeft 封装为一个方法，名叫scroll()，返回值为 一个对象。以后就直接调用`scroll().top` 和 `scroll().left`就好。

举例：

```js
    //函数封装（简单封装，实际工作使用）
    function scroll() {
        return { //此函数的返回值是对象
            left: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            right: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        }
    }
```



获取html文档的方法：

- `document.title` 文档标题；
- `document.head` 文档的头标签
- `document.body` 文档的body标签；
- `document.documentElement` （这个很重要）。

`document.documentElement`表示文档的html标签。也就是说，基本结构当中的 `html 标签`而是通过`document.documentElement`访问的，并不是通过 document.html 去访问的。



#### **缓动动画**

> 如果不过分追求完全实现可以使用CSS3 transition 来实现动画效果，js实现的话更加灵活。可以灵活的控制



**js实现缓动动画思路**

在移动的过程中，步长越来越小。



案例：

设置步长为：**目标位置和盒子当前位置的十分之一**。用公式表达，即：

```js
 盒子位置 = 盒子本身位置 + (目标位置 - 盒子本身位置)/ 10；
```



实现代码

```js
    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];

    btn.onclick = function () {
        setInterval(function () {
            //动画原理：盒子未来的位置 = 盒子当前的位置+步长
            div.style.left = div.offsetLeft + (400 - div.offsetLeft) / 10 + "px";
        }, 30);
    }
```



存在问题：`div.style.left`获取的值是精确的，通过`div.offsetLeft`获取的left值会进行四舍五入。

思路：

只需要将最后欠的距离补上即可。处理方式：小于步数则直接到达终点。

优化后的版本：

```js
//缓动动画封装
  function animate(ele, target) {
    //要用定时器，先清定时器
    //一个萝卜一个坑儿，一个元素对应一个定时器
    clearInterval(ele.timer);
    //定义定时器
    ele.timer = setInterval(function () {
      //获取步长
      //步长应该是越来越小的，缓动的算法。
      var step = (target - ele.offsetLeft) / 10;
      //对步长进行二次加工(大于0向上取整,小于0向下取整)
      //达到的效果是：最后10像素的时候都是1像素1像素的向目标位置移动，就能够到达指定位置。
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      //动画原理： 目标位置 = 当前位置 + 步长
      ele.style.left = ele.offsetLeft + step + "px";
      console.log(step);
      //检测缓动动画有没有停止
      console.log("smyhvae");
      // ！最后的值如果小于步长则不做运算直接到达终点
      if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
        //处理小数赋值
        ele.style.left = target + "px";
        clearInterval(ele.timer);
      }
    }, 30);
```



### 14.3 client 可视区

> client n. 客户

**clientWidth 和 clientHeight**

元素调用时：

- clientWidth：获取元素的可见宽度（width + padding）。
- clientHeight：获取元素的可见高度（height + padding）。

body/html 调用时：

- clientWidth：获取网页可视区域宽度。
- clientHeight：获取网页可视区域高度。

**声明**：

- `clientWidth` 和 `clientHeight` 属性是只读的，不可修改。
- `clientWidth` 和 `clientHeight` 的值都是不带 px 的，返回的都是一个数字，可以直接进行计算。



**clientX 和 clientY**

event调用：

- clientX：鼠标距离可视区域左侧距离。
- clientY：鼠标距离可视区域上侧距离。



**clientTop 和 clientLeft**

- clientTop：盒子的上border。
- clientLeft：盒子的左border。



### 14.4 总结

**offset/scroll/client 的区别**

**区别1：宽高**

- offsetWidth = width + padding + border
- offsetHeight = height + padding + border
- scrollWidth = 内容宽度（不包含border）
- scrollHeight = 内容高度（不包含border）
- clientWidth = width + padding
- clientHeight = height + padding



**区别2：上左**

offsetTop/offsetLeft：

- 调用者：任意元素。(盒子为主)
- 作用：距离父系盒子中带有定位的距离。

scrollTop/scrollLeft：

- 调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)
- 作用：浏览器无法显示的部分（被卷去的部分）。

clientY/clientX：

- 调用者：event
- 作用：鼠标距离浏览器可视区域的距离（左、上）。



案例：

获取浏览器的宽高(已做兼容性处理)

```js
//函数封装：获取屏幕可视区域的宽高
function client() {
    if (window.innerHeight !== undefined) {
        //ie9及其以上的版本的写法
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        //标准模式的写法（有DTD时）
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    } else {
        //没有DTD时的写法
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}
```



**获取显示器分辨率**

```js
window.screen.width * window.screen.height; // 示例：   1920*1080
```

