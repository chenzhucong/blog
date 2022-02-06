---
title: CSS
date: 2022-02-06 16:40:22
permalink: /pages/cb743a/
---
# CSS

> 参考文章：
>
> [千古壹号 github](https://github.com/qianguyihao/Web/tree/master/02-CSS%E5%9F%BA%E7%A1%80) 
>
> https://juejin.cn/post/6941206439624966152#heading-6
>



## 1 基本概念

 **概述**

CSS：Cascading Style Sheet，层叠样式表。

作用：给 HTML 页面标签添加各种样式，**定义网页的显示效果**。



**样式表引入的三种方式**

- **行内样式**：标签的 style **属性**。范围只针对此标签。

```html
<p style="color:white;background-color:red">我不会就这样轻易的狗带</p>
```



- **内嵌样式表**：页面的 `<style>` **标签**。范围针对此页面。

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```



- **外部样式表** : 从外部 引入 css 文件。

1. **采用`<link>`标签**。

```html
<link rel = "stylesheet" type = "text/css" href = "a.css">
```

2. **采用 import**，必须写在`<style>`标签中，并且必须是第一句。

```
<style>
  @import url(a.css)
</style>
```



**语法**

<img src="https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img16311644-34436a975f5210f5.png" alt="CSS规则集" style="zoom:50%;" />

**选择器（Selector）：**一个或者多个需要添加样式的元素。

**声明（Declaration）： ** 一个单独的规则，用来**指定添加元素的属性**。

**属性 （Properties） ：** 需要改变HTML元素样式的名称。

**属性的值 （Property Value） ：** 需要改变HTML元素样式的名称的值。



**语法规则**

- 每个规则集（除了选择器的部分）都应该在大括号里`{ }`。
- 在每个声明里要用冒号（`:`）将属性和属性值分隔开。
- 在每个规则集里要用分号（`;`）将各个声明分隔开。

* 属性或属性的值为若干单词（例如"sans serif"），则要给属性/属性的值加短横线。
* 多个元素选择器用 , 隔开；多个声明用换行隔开；多属性的值用 空格 隔开。

```css
h1,h2,h3,h4,h5,h6 {
  color: green;
  font-family: san-serif;
  }
```



**注释**

```css
/* 单行注释 */

/*
    多行
    注释
*/
```

注意 ： 请区别js文件中的单行注释 `//` 和多行注释 `/* */`。



### 层叠性和继承性

**层叠性**

CSS有用于合并来自多个源的属性值的算法。

针对不同源的样式，将按照如下的顺序进行层叠，越往下优先级越高：

* 用户代理样式表中的声明(例如，浏览器的默认样式，在没有设置其他样式时使用)。

* 样式表中的常规声明(这些是我们 Web 开发人员设置的样式)。

* 样式表中的 !important 声明。


注释：同一个选择器，定义在后面的声明会覆盖前面的。

**继承性**

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgf8bd1604b143463eb121c1f46d71c652~tplv-k3u1fbpfcp-watermark.awebp)

CSS 中可以继承父元素的属性一定是不会影响到页面布局的属性，可以分为如下几类：

- 字体相关：`font-family`、`font-style`、`font-size`、`font-weight` 等；
- 文本相关：`text-align`、`text-indent`、`text-decoration`、`text-shadow`、`letter-spacing`、`word-spacing`、`white-space`、`line-height`、`color` 等；
- 列表相关：`list-style`、`list-style-image`、`list-style-type`、`list-style-position` 等；
- 其他属性：`visibility`、`cursor` 等；

对于其他默认不继承的属性也可以通过以下几个属性值来控制继承行为：

- `inherit`：继承父元素对应属性的计算值；
- `initial`：应用该属性的默认值，比如 color 的默认值是 `#000`；
- `unset`：如果属性是默认可以继承的，则取 `inherit` 的效果，否则同 `initial`；
- `revert`：效果等同于 `unset`，兼容性差。



## 2 属性

### 2.1 尺寸

CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。

| 属性        | 描述               |
| ----------- | ------------------ |
| height      | 设置元素的高度     |
| line-height | 设置行高           |
| max-height  | 设置元素的最大高度 |
| mix-height  | 设置元素的最小高度 |
| width       | 设置元素的宽度     |
| max-width   | 设置元素的最大宽度 |
| mix-width   | 设置元素的最小宽度 |



### 2.2 背景

| 属性                  | 描述                                         | 默认值      |
| --------------------- | -------------------------------------------- | ----------- |
| background            | 简写属性，作用是将背景属性设置在一个声明中。 |             |
| background-color      | 设置元素的背景颜色                           | transparent |
| background-image      | 把图像设置为背景                             | none        |
| background-repeat     | 设置背景图像是否及如何重复                   | repeat      |
| background-position   | 设置背景图像的起始位置                       | 0% 0%       |
| background-attachment | 背景图像是否固定或者随着页面的其余部分滚动   | scroll      |



**CSS3 新增属性**（CSS3 会有介绍）

- background-origin 背景图片相对定位情况
- background-clip 背景裁切
- background-size 调整尺寸
- 多重背景



**background 背景简写**

```css
body
  { 
  background: #00FF00 url(bgimage.gif) no-repeat fixed top / 100px 50px;
  }
```

为了提高代码的可读性，建议按照下面顺序先后排序。

- background-color --------------- 颜色
- background-image -------------- 图像
- background-repeat -------------- 如何重复背景图像
- background-attachment（忽略）-------- 图像是否固定或者随着页面的其余部分滚动
- background-position ------------ 位置
- background-size ----------------- 尺寸
- background-origin --------------- 背景图片的定位区域
- background-clip ------------------ 背景的绘制区域



注意：尺寸前面要加 `/` 做尺寸区分

> 参考文章：
>
> [CSS中背景（background）的详写、简写方式总结](https://juejin.cn/post/6918249051351842829)



**background-color 背景颜色**

> 默认值：transparent



**关于设置透明度的方式：**

1. `opacity: 0.3;` 设置的是当前盒子及子盒子的透明度，可调节。
2. `background: transparent;` 设置当前盒子的透明度，不可调节。





**bcakground-image 背景图片**

> 默认值：none，使用 url 包裹文件路径。
>

```
body {background-image: url(/i/chen.gif);}
```



**background-repeat 重复图像**

```
body {background-repeat: repeat-y;}
```

**可选值**

| 值        | 属性                                                |
| --------- | --------------------------------------------------- |
| repeat    | 默认。背景图像将在垂直方向和水平方向重复。          |
| repeat-x  | 背景图像将在水平方向重复。                          |
| repeat-y  | 背景图像将在垂直方向重复。                          |
| no-repeat | 背景图像将仅显示一次                                |
| inherit   | 规定应该从父元素继承 background-repeat 属性的设置。 |



**background-attachment 背景关联，是否固定或随页面滚动**

| 值      | 描述                                                    |
| ------- | ------------------------------------------------------- |
| scroll  | 默认值。背景图像会随着页面其余部分的滚动而移动。        |
| fixed   | 当页面的其余部分滚动时，背景图像不会移动。              |
| inherit | 规定应该从父元素继承 background-attachment 属性的设置。 |



**background-position 图像位置**

> 背景定位的属性的值可以是**关键词**，**百分数值**，**长度值**。

1. **关键词**

   | 值     | 描述 |
   | ------ | ---- |
   | center | 中间 |
   | top    | 顶部 |
   | bottom | 底部 |
   | right  | 右边 |
   | left   | 左边 |

   **注释**：**center**+**任意元素**=**任意元素**

2. **百分数值**

```html
body {background-position:66% 33%;}
```

* 注释：66%是左边到右边的百分比；33%是上边到下面的百分比

3. 长度值

```css
body {background-position:50px 100px;}
```

* 以元素内边距左上角向右50px，向下100px的位置



### 2.3 文本

| 属性            | 描述                 | 默认值                                            |
| --------------- | -------------------- | ------------------------------------------------- |
| color           | 设置文本颜色         | inhert（继承）                                    |
| direction       | 设置文本方向         | ltr                                               |
| line-height     | 设置行高             | normal                                            |
| text-indent     | 缩进元素中文本的首行 | 0                                                 |
| text-align      | 对齐元素中的文本     | 根据 direction 决定， ltr 则是left，rtl 则是right |
| word-spacing    | 设置字间距           | normal                                            |
| letter-spacing  | 设置字符间距         | normal                                            |
| text-transform  | 控制元素中的字母     | none                                              |
| text-decoration | 向文本添加修饰       | none                                              |

**color  文本颜色**

设置文本颜色，值可以为任意**颜色名称**，**十六进制值**，和**rgb代码**。



**direction 文本方向**

设置文本的方向，可选值为“ltr”（left to right）：默认值，文本方向从左到右；“rtl”（right to left）： 文本方向从右到左 ；“inherit”： 从父元素继承 direction 属性的值。 



**line-height 行高**

设置行高，默认值是normal，可以设计数字（倍数），固定的行间距，百分比行间距%，还有inherit。



**text-indent 缩进文本**

缩进文本，默认值是0，可以定义**固定的缩进**(可以为负数）或者**基于父元素宽度的百分比缩进%**，也可以继承父元素inherit。



**text-align 文本水平对齐方式**

规定文本水平对齐方式，可能的值：

| 值      | 描述                                       |
| ------- | ------------------------------------------ |
| left    | 把文本排列到左边。默认值：由浏览器决定     |
| right   | 把文本排列到右边                           |
| center  | 把文本排列到中间                           |
| justify | 实现两端对齐文本效果                       |
| inherit | 规定应该从父元素继承 text-align 属性的值。 |



**text-space 字间距**

用于设置字间距,text-space属性的值可以为正长度值也可以是负长度值



**text-transform 文本大小写**

| 值         | 描述                                           |
| ---------- | ---------------------------------------------- |
| none       | 默认。定义带有小写字母和大写字母的标准的文本。 |
| capitalize | 文本中的每个单词以大写字母开头。               |
| uppercase  | 定义仅有大写字母。                             |
| lowercase  | 定义无大写字母，仅有小写字母。                 |
| inherit    | 规定应该从父元素继承 text-transform 属性的值。 |



**text-decoration 文本修饰**

规定添加到文本的修饰，可能的值：

| 值           | 描述                                          |
| ------------ | --------------------------------------------- |
| none         | 默认。定义标准的文本                          |
| underline    | 定义文本下的一条线                            |
| overline     | 定义文本上的一条线                            |
| line-through | 定义穿过文本下的一条线                        |
| blink        | 定义闪烁的文本                                |
| inherit      | 规定应该从父元素继承 text-decoration 属性的值 |



**white-space 空格、换行和 tab 字符的处理方式**

对源文档中的空格、换行和 tab 字符的处理。

| 值       | 描述                                                         | 空白符 | 换行符 | 自动换行 |
| -------- | ------------------------------------------------------------ | ------ | ------ | -------- |
| mormal   | 默认。空白会被浏览器忽略                                     | 合并   | 忽略   | 允许     |
| pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签      | 保留   | 保留   | 不允许   |
| nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到` <br>` 标签为止 | 合并   | 忽略   | 不允许   |
| pre-wrap | 保留空白符序列，但是正常地进行换行                           | 保留   | 保留   | 允许     |
| pre-line | 合并空白符序列，但是保留换行符                               | 合并   | 保留   | 允许     |
| inherit  | 规定应该从父元素继承 white-space 属性的值                    |        |        |          |



**text-shadow 文本阴影**

```css
text-shadow: h-shadow v-shadow blur color;
```

| 值       | 描述                           |
| -------- | ------------------------------ |
| h-shadow | 必需。水平阴影的位置。允许负值 |
| v-shadow | 必需。垂直阴影的位置。允许负值 |
| blur     | 可选。模糊的距离               |
| color    | 可选。阴影的颜色               |



**unicode-bidi（与direction属性一起使用）**

| 值            | 描述                                                    |
| ------------- | ------------------------------------------------------- |
| normal        | 默认默认。不使用附加的嵌入层面。                        |
| enbed         | 创建一个附加的嵌入层面。                                |
| bidi-override | 创建一个附加的嵌入层面。重新排序取决于 direction 属性。 |



### 2.4 字体

| 属性         | 描述                                                 |
| ------------ | ---------------------------------------------------- |
| font         | 简写属性。作用是把所有针对字体的属性设置在一个声明中 |
| font-family  | 设置字体系列                                         |
| font-size    | 设置字体的尺寸                                       |
| font-style   | 设置字体风格                                         |
| font-variant | 以小型大写字体或者正常字体显示文本                   |
| font-weight  | 设置字体的粗细                                       |

**font 字体简写**

```css
p {
  font:italic bold 12px/20px arial,sans-serif;
  }
```

注释：为了前端工程化，推荐字体简写顺序：

```css
{font：font-style（样式）  font-variant（字体异体  font-weight（粗细）  fomt-size（大小）/ fone-height（行高）  font-family(字体系列)}
```



**font-family 字体系列**

| 字体名称   | 描述         |
| ---------- | ------------ |
| Serif      | 有衬线的字体 |
| Sans-serif | 无衬线的字体 |
| Monospace  | 等宽字体     |
| Cursive    | 手写字体     |
| Fantasy    | 梦幻字体     |

```css
p {font-family: Times, TimesNR, 'New Century Schoolbook', Georgia, 'New York', serif;}
```

注释：字体优先级由左到右



**font-size 字体大小**

| 元素的值 | 描述               |
| -------- | ------------------ |
| px       | 像素               |
| em       | 当前文本的倍数     |
| %        | 父元素文本的百分比 |



**font-style 字体的风格**

可能的值：

| 值      | 描述               |
| ------- | ------------------ |
| normal  | 默认值，标准样式   |
| italic  | 斜体样式           |
| oblique | 倾斜样式           |
| inherit | 继承父元素字体样式 |



**font-variant 字母大写**

默认值为normal，可设置值为small-caps显示小型大写字母的字体，也可继承父元素inherit。



**font-weight 字体粗细**

设置字体的粗细，默认值为normal。可设置bold（粗体）；bolder（更粗体）；light（更细体）；100-900（400为normal，700为bold），最后还有inherit继承父元素。



### 2.5 链接

* 设置链接的四种状态（伪类）

  ```css
  a:link {color:#FF0000;}		/* 普通的，未被访问的链接 */
  a:visited {color:#00FF00;}	/* 已被访问的链接 */
  a:hover {color:#FF00FF;}	/* 鼠标指针移动到链接上 */
  a:active {color:#0000FF;}	/* 正在被点击的链接 */
  ```

  值得注意的是:

  当为链接的不同状态设置样式时，请按照以下次序规则：

  * a:hover 必须位于 a:link 和 a:visited 之后
  * a:active 必须位于 a:hover 之后

* 去掉链接的下划线

  ```css
  a:link {text-decoration:none;}
  a:visited {text-decoration:none;}
  a:hover {text-decoration:underline;}
  a:active {text-decoration:underline;}
  ```

* 设置链接背景色

  ```css
  a:link {background-color:#B2FF99;}
  a:visited {background-color:#FFFF85;}
  a:hover {background-color:#FF704D;}
  a:active {background-color:#FF704D;}
  ```



### 2.6 CSS列表

| 属性                | 描述                                               |
| ------------------- | -------------------------------------------------- |
| list-style          | 简写属性，用于把所有用于列表的属性设置于一个声明中 |
| list-style-image    | 将图象设置为列表项标志                             |
| list-style-position | 设置列表中列表项标志的位置                         |
| list-style-type     | 设置列表项标志的类型                               |

**列表简写 list-style**

```css
li {list-style : url(example.gif) square inside}
```



**list-style-image 列表项标志**

```css
ul li {list-style-image : url(xxx.gif)}
```



**list-style-position 标志位置**

| 值      | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| inside  | 列表项目标记放置在文本以内，且环绕文本根据标记对齐           |
| outside | 默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐 |
| inherit | 规定应该从父元素继承 list-style-position 属性的值            |



**list-style-type 列表样式**

> 参考文章：
>
> https://www.w3school.com.cn/cssref/pr_list-style-type.asp 

 



### 2.7 表格

| 属性                     | 描述                      |
| ------------------------ | ------------------------- |
| border                   | 设置表格的边框            |
| border-collapse          | 折叠边框                  |
| width/height             | 表格的宽度/高度           |
| text-align/verical-align | 水平对齐方式/垂直对齐方式 |
| padding                  | 表格内边距                |
| background-color         | 背景颜色                  |
| border-color             | 边框颜色                  |

**部分属性：**

**border-collapse 折叠边框**

```css
table { border-collapse:collapse;} 
/* 默认是分开，separate，不用记，只用记分开就行*/
```



**text-align/verical-align 水平对齐方式/垂直对齐方式**

| 水平对齐        | 垂直对齐           |
| --------------- | ------------------ |
| left（左对齐）  | bottom（顶部对齐） |
| center（居中）  | center（居中）     |
| right（右对齐） | top（底部对齐）    |





### 2.8 边框轮廓

> 边框轮廓指边框外部的一圈内容

示例：

![image-20211003183246128](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20211003183246128.png)

| 属性          | 描述                                     |
| ------------- | ---------------------------------------- |
| outline       | 简写属性，在一个声明中设置所有的轮廓属性 |
| outline-color | 设置轮廓的颜色                           |
| outline-style | 设置轮廓的样式                           |
| outline-width | 设置轮廓的宽度                           |

**部分属性：**

**outline 边框简写**

```css
p
  {
  outline:#00FF00 dotted thick;
  }
```



**outline-style 边框样式**

| 值      | 描述                                                |
| ------- | --------------------------------------------------- |
| none    | 默认。定义无轮廓。                                  |
| dotted  | 定义点状的轮廓。                                    |
| dashed  | 定义虚线轮廓。                                      |
| solid   | 定义实线轮廓。                                      |
| double  | 定义双线轮廓。双线的宽度等同于 outline-width 的值。 |
| groove  | 定义 3D 凹槽轮廓。此效果取决于 outline-color 值。   |
| ridge   | 定义 3D 凸槽轮廓。此效果取决于 outline-color 值。   |
| inset   | 定义 3D 凹边轮廓。此效果取决于 outline-color 值。   |
| outset  | 定义 3D 凸边轮廓。此效果取决于 outline-color 值。   |
| inherit | 规定应该从父元素继承轮廓样式的设置。                |



**outline-width 轮廓宽度**

| 值      | 描述                                 |
| ------- | ------------------------------------ |
| thin    | 规定细轮廓。                         |
| medium  | 默认。规定中等的轮廓。               |
| thick   | 规定粗的轮廓。                       |
| length  | 允许您规定轮廓粗细的值。             |
| inherit | 规定应该从父元素继承轮廓宽度的设置。 |



## 3 选择器

### 3.0 优先级

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img4b226c55b87c426c840d2c70d51d3511~tplv-k3u1fbpfcp-watermark.awebp)

优先级就是分配给指定的 CSS 声明的一个权重，数值越大的权重越高：

- 10000：!important；
- 01000：内联样式；
- 00100：ID 选择器；
- 00010：类选择器、伪类选择器、属性选择器；
- 00001：元素选择器、伪元素选择器；
- 00000：通配选择器、后代选择器、兄弟选择器；

 **`!important` 优先级最高，所以需要谨慎使用它**



### 3.1 基础选择器

**元素选择器（标签选择器）**

```css
html {color:black;}
```

**ID 选择器**

```css
#important {color: red;}
```

**类选择器**

```css
.important {color: red;}
```

**通配符**

```css
* {
    margin-left: 0px;
    margin-top: 0px;
}
```



### **3.2 高级选择器**

**后代选择器**

> 定义的时候用空格隔开。对于`E F`这种格式，表示**所有属于 E 元素后代的 F 元素**，有这个样式

```css
.div1 p {color: red;}
```

**注释：也就是说.div 下的所有 p标签都会被选中被添加样式。**



**子元素选择器**

> 定义的时候用 `>` 隔开。

```css
.div1 > p {color: red;}
```

**注释：也就是说.div 下的子元素的p标签才被选中被添加样式。相比后代选择器更推荐子元素选择器**



**相邻兄弟选择器**

> 定义的时候用 `+` 隔开。兄弟元素需拥有共同的父元素。
>

**结合其他选择器使用**

```css
html > body table + ul {margin-top:20px;}
```

注释： 选择紧接在 table 元素后出现的所有兄弟 ul 元素，该 table 元素包含在一个 body 元素中，body 元素本身是 html 元素的子元素。



**属性选择器**

> **CSS 2 引入了属性选择器。属性选择器可以根据元素的属性及属性值来选择元素。**

案例：选择包含标题（title）的所有元素变为红色。

```css
*[title] {color:red;}
```



### 3.3 伪类选择器

> **伪类**：同一个标签，根据其**不同的种状态，有不同的样式**。伪类用冒号来表示。

伪类选择器的分类

**行为伪类**：只能用于**超链接**的样式。

- `:link` 超链接点击之前。
- `:visited` 链接被访问过之后。

**状态伪类**：针对**所有标签**都适用的样式。

- `:hover` “悬停”：鼠标放到标签上的时候。
- `:active` “激活”： 鼠标点击标签，但是不松手时。
- `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）。

**选择伪类**：针对**所有标签**都适用的样式。

* `:first-child`：第一个子元素。

* `:lang`：带有lang属性的元素。



### 3.4 伪元素选择器

> 伪元素就是在元素的前面或者后面插入一个空白的元素。
>

- `::before`：在元素前插入内容；
- `::after`：在元素后插入内容；



## 4 盒子模型

### 4.1 概述

CSS盒子模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

![](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgbox-model.gif)

不同部分的说明：

- **Margin(外边距)** - 边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像



### 4.2 box-size 类别（CSS3)

**content-box**：默认值。设置宽高都是相对于内容 content。称为标准盒子模型。

盒子模型如下图

![标准盒子模型](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img20180801153934916)

**注释：设置的高度，宽度是content的高度和宽度。**



**border-box**：可选值。设置宽高都是相对于border-box。称为ie盒模型。

![IE盒子模型](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img20180801154052506)

**注释：设置的高度，宽度是content加上内边距加上边框的高度，宽度。**



### 4.3 内边距

| 属性           | 描述                     |
| -------------- | ------------------------ |
| padding        | 简写属性。所有内边距属性 |
| padding-up     | 上内边距。               |
| padding-right  | 右内边距。               |
| padding-bottom | 下内边距。               |
| padding-left   | 左内边距。               |

**padding 内边距简写对应的含义**

```js
padding:10px 5px 15px 20px; // 上 右 下 左
padding:10px 5px 15px; // 上 左右 下
padding:10px 5px;// 上下 左右
padding:10px; // 上右下左
```



### 4.4 边框

| 属性          | 描述                   | 默认值              |
| ------------- | ---------------------- | ------------------- |
| border        | 简写属性。所有边框属性 | none                |
| border-top    | 上边框。               | none                |
| border-right  | 右边框                 | none                |
| border-bottom | 下边框                 | none                |
| border-left   | 左边框                 | none                |
| border-style  | 边框的样式             | none                |
| border-width  | 边框的宽度             | 0px                 |
| border-color  | 边框的颜色             | transparent（透明） |



**border-style 边框样式样式**

| 属性的值 | 描述                                                |
| -------- | --------------------------------------------------- |
| none     | 默认。定义无轮廓。                                  |
| dotted   | 定义点状的轮廓。                                    |
| dashed   | 定义虚线轮廓。                                      |
| solid    | 定义实线轮廓。                                      |
| double   | 定义双线轮廓。双线的宽度等同于 outline-width 的值。 |
| groove   | 定义 3D 凹槽轮廓。此效果取决于 outline-color 值。   |
| ridge    | 定义 3D 凸槽轮廓。此效果取决于 outline-color 值。   |
| inset    | 定义 3D 凹边轮廓。此效果取决于 outline-color 值。   |
| outset   | 定义 3D 凸边轮廓。此效果取决于 outline-color 值。   |
| inherit  | 规定应该从父元素继承轮廓样式的设置。                |



### 4.5 外边距

| 属性          | 描述                     |
| ------------- | ------------------------ |
| margin        | 简写属性。所有外边距属性 |
| margin-top    | 上外边距                 |
| margin-right  | 右外边距                 |
| margin-bottom | 下外边距                 |
| margin-left   | 左外边距                 |

margin（简写规则同padding），这里就略过。

注释：根据BFC原则，上下外边距会合并且以大的为主。



## 5 定位和文档流

### 5.1 文档流

> 参考文章：
>
> https://juejin.cn/post/6916412455037501447

**标准文档流**

**文档流**：元素的排版规则。元素会默认自动从左往右，从上往下的流式排列方式。

主要有下面三种表现形式：

-    **空白折叠现象**。多个空格合并成一个显示。

- **高矮不齐，底边对齐**：

- **自动换行，一行写不完时，换行写**



**标准文档流等级**

**块级元素：**

- 霸占一行，不能与其他任何元素并列
- 能接受宽、高
- 如果不设置宽度，那么宽度将默认变为父亲的100%，即和父亲一样宽

**行内元素：**

- 与其他元素并排
- 不能设置宽、高。默认的宽度就是文字的宽度



**脱离文档流的三种方法**

1. 浮动
2. 绝对定位
3. 固定定位



### 5.2 display 显示类型转换

| 值           | 描述                            |
| ------------ | ------------------------------- |
| none         | 不显示。                        |
| block        | 显示为块级元素。                |
| inline       | 显示为行内元素。                |
| inline-block | 行内块元素。（CSS2.1 新增的值） |

**注释：display的默认值是根据标签决定的。**



### 5.3 定位属性

| 属性           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| position       | 把元素放置到一个静态的、相对的、绝对的、或固定的位置中。     |
| top            | 定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。 |
| right          | 定义了定位元素右外边距边界与其包含块右边界之间的偏移。       |
| bottom         | 定义了定位元素下外边距边界与其包含块下边界之间的偏移。       |
| left           | 定义了定位元素左外边距边界与其包含块左边界之间的偏移。       |
| overflow       | 设置当元素的内容溢出其区域时发生的事情。                     |
| clip           | 设置元素的形状。元素被剪入这个形状之中，然后显示出来。       |
| vertical-align | 设置元素的垂直对齐方式。                                     |
| z-index        | 设置元素的堆叠顺序。                                         |

属性说明：

**position 位置方式**

| 值       | 描述             |
| -------- | ---------------- |
| static   | 元素框正常生成。 |
| relative | 相对定位         |
| absolute | 绝对定位         |
| fixed    | 固定定位         |



**相对定位**

**固定定位没有脱离文档流。**

一图说明相对定位：

![相对定位示例](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgct_css_positioning_relative_example.gif)

 **注意：**在使用相对定位时，无论是否进行移动，**元素仍然占据原来的空间**。因此，移动元素会导致它覆盖其它框。 



**固定定位**

**固定定位脱离文档流。**

一图说明固定定位：

![绝对定位](https://www.w3school.com.cn/i/ct_css_positioning_absolute_example.gif)

**注意： 可以通过设置 z-index 属性来控制这些框的堆放次序。**

注释：父元素没有开启相对定位，固定定位相对于html标签（视窗）定位，实际展示效果就是绝对定位。



**绝对定位**

绝对定位就是固定定位的一种，只是其父元素是html标签（视窗）



**overflow 内容溢出元素框时处理方式**

| 值      | 描述                                   |
| ------- | -------------------------------------- |
| visible | 默认值。展示在框外                     |
| hidden  | 裁减                                   |
| scroll  | 滚动                                   |
| auto    | 自动。多余内容显示滚动。               |
| inherit | 规定应该从父元素继承 overflow 属性的值 |



clip 裁剪

```css
img
  {
  position:absolute;
  clip:rect(0px,60px,200px,0px);
  }
```

注释：clip要配合recr使用，rect（top，right，bottom，left）



### **5.4 浮动**

**浮动原理**： 

![浮动规则1](https://www.w3school.com.cn/i/ct_css_positioning_floating_right_example.gif)

左浮动会覆盖在元素上方。

脱离文档流但是还是不会叠加。可以理解为在另外一个浮动文档流当中。

![浮动原理2](https://www.w3school.com.cn/i/ct_css_positioning_floating_left_example.gif)

 高度或宽度不够则会变形。

![浮动原理3](https://www.w3school.com.cn/i/ct_css_positioning_floating_left_example_2.gif)



**CSS中的浮动元素-流（float）**

float 浮动并规定浮动方向

| 值      | 描述                                               |
| ------- | -------------------------------------------------- |
| left    | 元素向左浮动                                       |
| right   | 元素向右浮动                                       |
| none    | 默认值。元素不浮动，并会显示在其在文本中出现的位置 |
| inherit | 规定应该从父元素继承 float 属性的值                |

注释：浮动元素不会超过其兄弟元素



**clear 清除浮动**

 属性规定元素的哪一侧不允许其他浮动元素 

| 值      | 描述                                  |
| ------- | ------------------------------------- |
| left    | 在左侧不允许浮动元素。                |
| right   | 在右侧不允许浮动元素。                |
| both    | 在左右两侧均不允许浮动元素。          |
| none    | 默认值。允许浮动元素出现在两侧。      |
| inherit | 规定应该从父元素继承 clear 属性的值。 |



## 10 知识补充

> 此处用于非 CSS 知识但是在使用中和CSS息息相关的知识的整理

### 10.1 颜色表示

**属性值的三种表示方式：**

1. 单词
2. rgb表示法
3. 十六进制表示法

下面是三种表示方法的案例：

```css
	background-color: red;
	background-color: rgb(255,0,0);
	background-color: #ff0000;
```

CSS3 中，有一种新的表示颜色的方式：RGBA或者HSLA。

RGBA、HSLA可应用于**所有**使用颜色的地方。



**单词**

> 在 tailwindcss 中，会经常用到颜色的拼音，所以还是要背一下

**颜色单词本**

| 颜色名称    | 英文单词                 |
| ----------- | ------------------------ |
| transparent | 透明                     |
| black       | 黑色                     |
| white       | 白色                     |
| gray        | 灰色                     |
| red         | 红色                     |
| yellow      | 黄色                     |
| green       | 绿色                     |
| blue        | 蓝色                     |
| indigo      | 靛蓝[diàn lán]（深蓝色） |
| purple      | 紫色                     |
| pink        | 粉红色                   |



**RGB 表示法**

RGB 表示三原色“红”red、“绿”green、“蓝”blue。

光学显示器中，每个像素都是由三原色的发光原件组成的，靠明亮度不同调成不同的颜色的。r、g、b的值，每个值的取值范围0~255，一共256个值。



**常用颜色**

```css
background-color: rgb(0,0,0); 	// 白色
background-color: rgb(255,255,255); 	// 黑色
```



**RGBA 表示法**

在 RGB 的基础上加上透明度 Alpha ，透明度的取值是 0~1



**补充：**

**RGB色彩模式：**

- 三原色原理：自然界中所有的颜色都可以用红、绿、蓝(RGB)这三种颜色波长的不同强度组合得来。
- RGB三原色也叫加色模式，这是因为当我们把不同光的波长加到一起的时候，可以得到不同的混合色。例：红+绿=黄色，红+蓝＝紫色，绿+蓝=青。
- 在数字视频中，对RGB三基色各进行8位编码就构成了大约1678万种颜色，这就是我们常说的真彩色。所有显示设备都采用的是RGB色彩模式。
- RGB各有256级(0-255)亮度，256级的RGB色彩总共能组合出约1678万种色彩，即256×256×256=16777216。



**十六进制表示法**

即将 rgb 颜色转化为 十六进制表示，以 # 开头

**注释：十六进制的表示方式都是以 # 开头**



问题： 如何实现转化呢？

```
16*16  * 16*16 * 16*16 = 256 * 256 * 256 // 也就是说十六进制只是 rgb 的一种缩写
```



**HSLA 表示法**

```css
	background-color: hsla(H,S,L,A);
```

参数：

- `H` 色调(Hue)，取值范围 0~360。0或360表示红色、120表示绿色、240表示蓝色。
- `S` 饱和度(Saturation)，取值范围 0%~100%。值越大，越鲜艳。
- `L` 亮度(Lightness)，取值范围 0%~100%。亮度最大时为白色，最小时为黑色。
- `A` 透明度(Alpha)，取值范围 0~1。

H取值看下面**色盘**：

<img src="https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313534352e706e67" alt="img" style="zoom:50%;" />

推荐链接：[配色宝典](http://www.uisdc.com/how-to-create-color-palettes)



### 10.2 格式化上下文

格式化上下文（Formatting Context）是 CSS2.1 规范中的一个概念，大概说的是页面中的一块渲染区域，规定了渲染区域内部的子元素是如何排版以及相互作用的。

不同类型的盒子有不同格式化上下文，大概有这 4 类：

- BFC (Block Formatting Context) 块级格式化上下文；
- IFC (Inline Formatting Context) 行内格式化上下文；
- FFC (Flex Formatting Context) 弹性格式化上下文；
- GFC (Grid Formatting Context) 格栅格式化上下文；

其中 BFC 和 IFC 在 CSS 中扮演着非常重要的角色，因为它们直接影响了网页布局，所以需要深入理解其原理。

**BFC**

块级格式化上下文，它是一个独立的渲染区域，只有块级盒子参与，它规定了内部的块级盒子如何布局，并且与这个区域外部毫不相干。

![图来源于 yachen168](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img4a73e2276d8b41f0a905361f151157e2~tplv-k3u1fbpfcp-watermark.awebp)

**BFC 渲染规则**

- 内部的盒子会在垂直方向，一个接一个地放置；
- 盒子垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠；
- 每个元素的 margin 的左边，与包含块 border 的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此；
- BFC 的区域不会与 float 盒子重叠；
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算 BFC 的高度时，浮动元素也参与计算。

注意：

触发bfc需要满足下面的条件

* body根元素

* 设置浮动，不包括none

* 设置定位，absoulte或者fixed

* 行内块显示模式，inline-block

* 设置overflow，即hidden，auto，scroll

* 表格单元格，table-cell

* 弹性布局，flex



**总结：非默认定位，浮动，定位，弹性，父元素的展示方式 inline-block，table-cell，overflow属性。**



**IFC**

块级元素内部都是内联元素就会建立BFC。也可以这么说内联元素都是IFC。

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img5cee1281ae5f44a69abc94fb9fa760fd~tplv-k3u1fbpfcp-watermark.awebp)



### 10.3 层叠上下文

> 参考文章：
>
> https://blog.csdn.net/llll789789/article/details/97562099

简单来说就是浏览器根据 CSS 代码渲染时产生层叠上下文，用作展示使用。

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img21043848687d42c6b46d6cf9c59c17ff~tplv-k3u1fbpfcp-watermark.awebp)



### 10.4 值和单位

**px**

> CSS中的像素，在CSS中是绝对的长度单位，也是最基础的单位，其他长度单位会自动被浏览器换算成 px。

**rem**

> CSS中的相对长度单位， rem 相对的是 HTML 的根元素 html。
>
> rem 由于是基于 html 的 font-size 来计算，所以通常用于自适应网站或者 H5 中。

**vw/vh**

> vw 和 vh 分别是相对于屏幕视口宽度和高度而言的长度单位：
>
> - 1vw = 视口宽度均分成 100 份中 1 份的长度；
> - 1vh = 视口高度均分成 100 份中 1 份的长度；

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img8448c193d3bf4fb5b396e884dfedb0fa~tplv-k3u1fbpfcp-watermark.awebp)



**rpx**

> 从1vw中划分750份，做自适应布局，常用于移动端。



# CSS 3

## 1 新增属性

### 1.1 边框

**border-radius 圆角边框**

```css
div
{
border:2px solid;
border-radius:25px;
}
```

注释：border-radius的值可以使固定的length值也可以是百分比值。



**box-shadow 边框阴影**

```css
div
{
box-shadow: 10px 10px 5px #888888;
}
```

语法：

```css
box-shadow: h-shadow（水平阴影） v-shadow9（垂直阴影） blur（模糊距离） spread（阴影的尺寸） color阴影的颜色） inset（将外部阴影变成内部阴影）;
```

值得注意的是blur可以被省略，blur属性的值为length，length越小，图像越清晰；length越大，图像越模糊。



**border-image 边框图片**

```css
div
{
border-image:url(border.png) 30 30 round;
-moz-border-image:url(border.png) 30 30 round; /* 老的 Firefox */
-webkit-border-image:url(border.png) 30 30 round; /* Safari 和 Chrome */
-o-border-image:url(border.png) 30 30 round; /* Opera */
}
```



### 1.2 背景

**background-size 背景图片尺寸**

bcakround-size属性的值可以为像素或百分比。

像素：

```css
div
{
background:url(bg_flower.gif);
-moz-background-size:63px 100px; /* 老版本的 Firefox */
background-size:63px 100px;
background-repeat:no-repeat;
}
```

百分比：

```css
div
{
background:url(bg_flower.gif);
-moz-background-size:40% 100%; /* 老版本的 Firefox */
background-size:40% 100%;
background-repeat:no-repeat;
}
```

**background-origin 背景图片的定位区域**

 背景图片可以放置于 content-box、padding-box 或 border-box 区域。 

![bakground-orgin](https://www.w3school.com.cn/i/background-origin.gif)

例子：

```css
div
{
background:url(bg_flower.gif);
background-repeat:no-repeat;
background-size:100% 100%;
-webkit-background-origin:content-box; /* Safari */
background-origin:content-box;
}
```



**多重背景图片**

```css
body
{ 
background-image:url(bg_flower.gif),url(bg_flower_2.gif);
}
```



**background-clip 背景的绘制区域**

```css
background-clip: border-box|padding-box|content-box;
```

| 值          | 描述                 |
| ----------- | -------------------- |
| border-box  | 背景被裁减到边框盒   |
| padding-box | 背景被裁减到内边距框 |
| content-box | 背景被裁减到内容框   |



### 1.3 文本

**twxt-shadow 文本阴影**

语法：twxt-shadow：水平阴影|垂直阴影|模糊距离|阴影的颜色

实例：

```css
h1
{
text-shadow: 5px 5px 5px #FF0000;
}
```

**word-warp  自动换行**

语法：word-wrap: normal|break-word;

案例：

```
p {word-wrap:break-word;}
```

| 值         | 描述                                         |
| ---------- | -------------------------------------------- |
| normal     | 只在允许的断字点换行（浏览器保持默认处理）。 |
| break-word | 在长单词或 URL 地址内部进行换行。            |



**3. 其他新的文本属性**

| 值                  | 描述                                                     |
| ------------------- | -------------------------------------------------------- |
| hanging-punctuation | 规定标点字符是否位于线框之外                             |
| puntuation-trim     | 规定是否对标点字符进行修剪。                             |
| text-align-last     | 设置如何对齐最后一行或紧挨着强制换行符之前的行           |
| text-emphasis       | 向元素的文本应用重点标记以及重点标记的前景色             |
| text-justify        | 规定当  text-align 设置为 "justify" 时所使用的对齐方法。 |
| text-outline        | 规定文本的轮廓。                                         |
| text-overflow       | 规定当文本溢出包含元素时发生的事情                       |
| text-shadow         | 向文本添加阴影                                           |
| text-wrap           | 规定文本的换行规则                                       |
| word-break          | 规定非中日韩文本的换行规则                               |
| word-wrap           | 允许对长的不可分割的单词进行分割并换行到下一行。         |



### 1.4 字体

> @font-face规则可以使开发人员使用自己想要的网络字体，而不是仅仅局限于 web-safe 的字体之一

**（1）第一步：使用font-face声明字体**

```css
@font-face {font-family: 'webfont';
    src: url('webfont.eot'); /* IE9*/
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff') format('woff'), /* chrome、firefox */
    url('webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
```

**（2）第二步：定义使用webfont的样式**

```css
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
```

**（3）第三步：为文字加上对应的样式**

```html
<i class="web-font">这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了。</i>
```

**举例：**

我们按照上图中的步骤来，引入这个字体。完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        p{
            font-size:30px;
        }

        /*  如果要在网页中使用web字体（用户电脑上没有这种字体）*/
        /* 第一步：声明字体*/
        /* 告诉浏览器 去哪找这个字体*/
        @font-face {font-family: 'my-web-font';
            src: url('font/webfont.eot'); /* IE9*/
            src: url('font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/webfont.woff') format('woff'), /* chrome、firefox */
            url('font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
        }
        /* 第二步：定义一个类名，谁加这类名，就会使用 webfont 字体*/
        .webfont{
            font-family: 'my-web-font';
        }
    </style>
</head>
<body>
    <!-- 第三步：引用 webfont 字体 -->
    <p class="webfont">生命壹号，永不止步</p>
</body>
</html>
```



## 2 动画

### 2.1 transition 过渡

`transition`的中文含义是**过渡**。过渡是CSS3中具有颠覆性的一个特征，可以实现元素**不同状态间的平滑过渡**（补间动画），经常用来制作动画效果。

- 补间动画：自动完成从起始状态到终止状态的的过渡。不用管中间的状态。
- 帧动画：通过一帧一帧的画面按照固定顺序和速度播放。如电影胶片。

| transition              | 简写属性，用于在一个属性中设置四个过渡属性。 |
| ----------------------- | -------------------------------------------- |
| transition-property     | 需要过渡的 CSS 属性名。                      |
| transition-duration     | 过渡持续时间。默认是 0。                     |
| transition-time-fuction | 规定过渡效果的时间曲线。默认是“ease”。       |
| transition-delay        | 过渡延迟。默认是0。                          |

transition-timing-function 的取值范围

- `linear` 线性
- `ease` 减速
- `ease-in` 加速
- `ease-out` 减速
- `ease-in-out` 先加速后减速

举例：

```css
transition: 让哪些属性进行过度 过渡的持续时间 运动曲线 延迟时间;

transition: all 3s linear 0s;
```



### 2.2 transform 转换

#### 2.2.1 2D 转换

> 2D转换包括：缩放、移动、旋转。



**1、scale 缩放**

```css
transform: scale(x, y);
transform: scale(2, 0.5);
```

参数说明：

x：表示水平方向的缩放倍数。

y：表示垂直方向的缩放倍数。

**实战效果：**

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f313535312e676966)



**2、translate 位移**

```css
transform: translate(水平位移, 垂直位移);
transform: translate(-50%, -50%);
```

参数说明：

* 参数为百分比，相对于自身移动
* 正值：向右和向下。 负值：向左和向上。如果只写一个值，则表示水平移动。

**实战效果：**

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f313630302e676966)



**3、 rotate 旋转**

```css
transform: rotate(角度);
transform: rotate(45deg);
```

参数解释：正值 顺时针；负值：逆时针。

实战效果：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f313633302e676966)



#### 2.2.2 3D 转换

> 3D转换包括旋转、位移、透视和3D呈现

**1、rotateX、rotateY、rotateZ**

**3D坐标系（左手坐标系）**

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323031302e706e67)

如上图所示，伸出左手，让拇指和食指成“L”形，大拇指向右，食指向上，中指指向前方。拇指、食指和中指分别代表X、Y、Z轴的正方向，这样我们就建立了一个左手坐标系。



```css
	transform: rotateX(360deg);    //绕 X 轴旋转360度

	transform: rotateY(360deg);    //绕 Y 轴旋转360度

	transform: rotateZ(360deg);    //绕 Z 轴旋转360度
```

实战效果：

rotateX：

<img src="https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323032352e676966" alt="img" style="zoom:50%;" />

rotateY：

<img src="https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323033302e676966" alt="img" style="zoom:50%;" />

rotateZ：

<img src="https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323033352e676966" alt="img" style="zoom:50%;" />



**2、 移动：translateX、translateY、translateZ**

```css
transform: translateX(100px);    //沿着 X 轴移动
transform: translateY(360px);    //沿着 Y 轴移动
transform: translateZ(360px);    //沿着 Z 轴移动
```

实战效果：

translateX：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323033362e676966)

translateY：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323033372e676966)

translateZ：

![img](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323034302e676966)



**3、perspective 透视**

> 参考文章：
>
> https://juejin.cn/post/6844903806782668807

电脑显示屏是一个 2D 平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现，通过透视可以实现此目的。

透视可以将一个2D平面，在转换的过程当中，呈现3D效果。但仅仅只是视觉呈现出 3d 效果，并不是正真的3d。

格式有两种写法：

- 作为一个属性，设置给父元素，作用于所有3D转换的子元素
- 作为 transform 属性的一个值，做用于元素自身。

格式举例：

```
perspective: 500px;
```

实战效果：

![image-20211003151658966](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20211003151658966.png)



4、transform-style 3D呈现

3D元素构建是指某个图形是由多个元素构成的，可以给这些元素的**父元素**设置`transform-style: preserve-3d`来使其变成一个真正的3D图形。属性值可以如下：

```css
	transform-style: preserve-3d;     /* 让 子盒子 位于三维空间里 */	transform-style: flat;            /* 让子盒子位于此元素所在的平面内（子盒子被扁平化） */
```



### 2.3 animation 动画

> 通过设置**多个节点** 来精确控制一个或一组动画，常用来实现**复杂**的动画效果。



**定义动画的步骤**

（1）通过@keyframes定义动画；

（2）将这段动画通过百分比，分割成多个节点；然后各节点中分别定义各属性；

（3）在指定元素里，通过 `animation` 属性调用动画。



定义格式：

```css
    定义动画：        @keyframes 动画名{            from{ 初始状态 }            to{ 结束状态 }        }     调用：      animation: 动画名称 持续时间；
```



案例：

```html
<!DOCTYPE html><html><head lang="en">    <meta charset="UTF-8">    <title></title>    <style>        .box {            width: 100px;            height: 100px;            margin: 100px;            background-color: red;            /* 调用动画*/            /* animation: 动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行。infinite 表示无限次*/            /*animation: move 1s  alternate linear 3;*/            animation: move2 4s;        }        /* 方式一：定义一组动画*/        @keyframes move1 {            from {                transform: translateX(0px) rotate(0deg);            }            to {                transform: translateX(500px) rotate(555deg);            }        }        /* 方式二：定义多组动画*/        @keyframes move2 {            0% {                transform: translateX(0px) translateY(0px);                background-color: red;                border-radius: 0;            }            25% {                transform: translateX(500px) translateY(0px);            }            /*动画执行到 50% 的时候，背景色变成绿色，形状变成圆形*/            50% {                /* 虽然两个方向都有translate，但其实只是Y轴上移动了200px。                因为X轴的500px是相对最开始的原点来说的。可以理解成此时的 translateX 是保存了之前的位移 */                transform: translateX(500px) translateY(200px);                background-color: green;                border-radius: 50%;            }            75% {                transform: translateX(0px) translateY(200px);            }            /*动画执行到 100% 的时候，背景色还原为红色，形状还原为正方形*/            100% {                /*坐标归零，表示回到原点。*/                transform: translateX(0px) translateY(0px);                background-color: red;                border-radius: 0;            }        }    </style></head><body><div class="box"></div></body></html>
```



总结：可以看出该动画方法是通过添加类名的方式执行，这应该也是动画库的封装方式。使用 transform 的好处是不会触发重排重绘。



## 3 flex布局

> 详情看另一篇文章 flex 布局



## 4 column 文本多列

**column-count 创建多列**

把div元素中的文本分隔为三列

```css
div {    column-count:3;}
```



**column-rule 列规律**

column-rule 属性设置列之间的宽度、样式和颜色规则。 

```css
div {    column-rule:3px outset #ff0000;}
```



**新的多列元素**

| 属性              | 描述                                               |
| ----------------- | -------------------------------------------------- |
| column-count      | 规定元素应该被分隔的列数。                         |
| coliumn-fill      | 规定如何填充列。                                   |
| colimn-gap        | 规定列之间的间隔                                   |
| column-rule       | 设置所有 column-rule-* 属性的简写属性。            |
| column-rule-color | 规定列之间规则的颜色                               |
| column-rule-style | 规定列之间规则的样式                               |
| column-rule-width | 规定列之间规则的宽度                               |
| column-span       | 规定元素应该横跨的列数                             |
| solumn-width      | 规定列的宽度                                       |
| colums            | 规定设置 column-width 和 column-count 的简写属性。 |



## 5 用户界面

**resize 调整元素大小**

规定div元素可由用户调整大小：、

```css
div{resize:both;overflow:auto;}
```



**box-sizing 盒模型类型**

```css
div{box-sizing:border-box;width:50%;float:left;}
```



**Outline Offset 轮廓偏移**

outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。 

