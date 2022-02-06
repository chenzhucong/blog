---
title: HTML
date: 2022-02-06 16:40:22
permalink: /pages/79ac37/
---
# HTML

## **1 概念和专有名词**

**概念**

**HTML** 全称为 HyperText Markup Language，译为**超文本标记语言**。

**重要：目前主要仅用于定义页面结构，样式已交由css负责。。**



**专有名词**

网页  web ：由各种标记组成的一个页面。

标记  tag ：也叫标签，带有特殊含义的标记。分为开始标记和结束标记。如`<p></p>`,也有自闭合标签`<img />`。

元素 element ：开始标签到结束标签的所有代码。也指浏览器渲染的 dom 元素。

属性 attribute ：标签的辅助信息

XHTML：符合XML语法标准的HTML。

DHTML：dynamic adj. 动态的。指动态HTML ,一般指`javascript + css + html`结合的页面。

HTTP：超文本传输协议。用来规定客户端浏览器和服务端交互时数据的一个格式。SMTP：邮件传输协议，FTP：文件传输协议。



## 2 文档结构

完整的文档结构如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="Author" content="">
    <meta name="Keywords" content="厉害很厉害" />
    <meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
    <title>Document</title>
</head>
<body>
</body>
</html>
```

标签解析：

按照功能分可分为页面的配置标签和内容标签。

**配置标签：**

`<!DOCTYPE html>`

文档声明头，即 DocType Declaration，简称DTD。**用于告知浏览器文档使用哪种 HTML 或 XHTML 规范。**



`<html lang="en">` 

**页面语言。**常见的语言类型：

* en：英语；
* zh-CN：中文简体。



**`<head>`标签**

**头标签。**用于描述了文档的各种属性和信息。

**头标签内部的常见标签如下：**

- `<title>`：网页标题，在浏览器最上方显示。
- `<base>`：为页面上的所有链接规定默认地址或默认目标。
- `<meta>`：页面的基本信息。
- `<link>`：文档与外部资源的关系。



`<meta> 标签`

meta表示“元”。“元”配置，就是表示**基本的配置项目**。

* **字符集 charset 。 **用于配置网页的编码方式。一般值为utf-8（万国码）

  * 备注：char 为 character（字符缩写）

  * ```html
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    ```

* **视口 viewport** 。用于配置用户网页的可视区域。

  * ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

* **关键词 keywords** 。用于告诉搜索引擎检索

  * ```html
    <meta name="Keywords" content="关键词" />
    ```

* **页面描述 description**。也是用于搜索引擎检索。

  * ```html
    <meta name="Description" content="描述" />
    ```

* **刷新并重定向 refresh。**常用于多域名跳转同一地址。 

  * ```html
    <meta http-equiv="refresh" content="重定向网站">
    ```



**内容标签：**

`<body>`	主体标签，用于定义HTML文档所要显示的内容

`<style>`	CSS样式标签

`<script>` 	JavaScript脚本标签



知识点补充（了解）：

> 计算机的编码知识：https://juejin.cn/post/6945801489986093086
>
> GB2312：汉字编码
>
> Unicode ：世界上所有字符的编码
>
> UTF-8：Unicode 编码的实现方式。

实战使用：

utf-8使用较多，gb2312 仅中文和少数外语和符号，基本很少使用。



## 3 书写规范

1、标签要正确嵌套不能交叉嵌套。

```html
<!-- 错误示范 -->
<h1><p></h1></p>
<!-- 正确示范 -->
<h1><p></p></h1>
```

2、虽然不区分带小写，但是还是 **建议使用小写**。

3、注释不能嵌套。

4、标签必须结构完整。要么成对出现，要么自结束标签。

5、标签中的属性必须有值，且值必须加引号。

6、XHTML文档开头必须要有DTD文档类型定义。



**代码注释**

```html
<!-- 注释内容 -->
```



## 4 排版标签

```html
<h1></h1>
<p></p>
<hr />
<br />
<div></div>
<span></span>
<center></center>
<pre></pre>
```

`<h1>` 标题标签。`<h1>`至`<h6>`标签定义标题。`<h1>`定义最大的标题，`<h6>`定义最小的标题。

`<p>` 段落段落。

`<hr />` 水平线标签。如下。（h5已废弃）

***

`<br />` 换行标签。（h5已废弃）

容器标签。

`<div>` 。块级元素。用于定义文档中的分区或节。

`<span>` 。行内元素。暂无意义。



## 5 块级元素和行内元素

> **参考文章：**
>
> https://juejin.cn/post/6961060761976832008
>
> https://juejin.cn/post/6964644611822190622

![3种常用元素](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/img6b3a9d24ab414fcfac36e354dbb7a804~tplv-k3u1fbpfcp-watermark.awebp)

**块级元素 block**

- 独占一行；
- 宽度默认是它父级元素的100%，除非设定一个宽度；
- 高度、行高、外边距、内边距都可以设置

**行内元素 inline**

* 不会独占一行，遇到父级元素边界会自动换行
* 高度，宽度均无效，固定为内容的宽带和高度。但行高有效，因为行高会影响内容高度。
* 外边距，内边距上下无效，左右有效。
* 只能嵌套行内元素和文本。

**行内块元素 inline-block**

* 不会独占一行
* 宽度默认由内容决定。但宽度、高度、行高、外边距、内边距都可以设置

总结：flex 布局取代了行内块元素 。



**常见块级元素**

```
div – 常用块级容器，也是CSS layout的主要标签
p – 段落
h-标题标签和水平线
pre – 格式化文本
form – 交互表单
ol – 有序表单
ul – 无序列表
li
dl – 定义列表
menu – 菜单列表
table – 表格
```



**常见行内元素**

```
a – 锚点
span – 常用内联容器，定义文本内区块
img – 图片
input – 输入框
button-按钮
label – 表格标签
textarea – 多行文本输入框
select – 项目选择
br – 换行
strong – 粗体强调
```



**行内元素的间距问题**

两个行内元素在一起，会出现一定的间距。

解决办法：

1.重设字体
给行内元素的直接父级设置font-size:0px;再给行内元素设置字体大小就可以解决。

2.借助HTML注释**（推荐）**
在两个行内元素之间加入HTML注释，告诉浏览器这中间不是换行也不是空格，而是连接在一起的，这样也可以解决。

```html
<span></span>
<!-- 分隔注释 -->
<span></span>
```



## 6 字体标签

**特殊字符（转义字符）**

因为部分字符是HTML语言的预留字符。所以要展示他们需要用到转义字符。下面表示所有的转义字符

| 特殊字符 | 描述           | 字符的代码 |
| -------- | -------------- | ---------- |
|          | 空格符         | `&nbsp;`   |
| <        | 小于号         | `&lt;`     |
| >        | 大于号         | `&gt;`     |
| &        | 和号           | `&amp;`    |
| ￥       | 人民币         | `&yen;`    |
| ©        | 版权           | `&copy;`   |
| ®        | 注册商标       | `&reg;`    |
| °        | 摄氏度         | `&deg;`    |
| ±        | 正负号         | `&plusmn;` |
| ×        | 乘号           | `&times;`  |
| ÷        | 除号           | `&divide;` |
| ²        | 平方2（上标2） | `&sup2;`   |
| ³        | 立方3（上标3） | `&sup3;`   |

**总结：空格使用较多，常用于做占位符。nbsp 的全名 Non-breaking Space**



**下划线、中划线、斜体**（h5 已废弃）

- `<u>`：下划线标记
- `<s>`或`<del>`：中划线标记（删除线）
- `<i>`或`<em>`：斜体标记

**上标、下标**（h5 已废弃）

`<sup>`：上标

`<sub>`：下标



## 7 超链接标签

1. **外部链接**

```html
<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

2. **锚链接**

**锚链接**：给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**。

**使用方法：**

* 使用`name`属性或者`id`属性给那个特定的位置起个名字。
* 跳转到本页链接后面加`#name1` ,#后面加名字。

```html
<a href="a.html#name1">回到顶部</a>

<div id="name1">去到这里</div>
<div name="name1">去到这里</div>
```

注释：锚链接也被用于SPA(单页面应用)当中

3. **邮件链接**

```html
<a href="mailto:xxx@163.com">点击进入我的邮箱</a>
```



**超链接的属性**

- `href`：目标URL。

- `title`：悬停文本。

- `name`：主要用于设置一个锚点的名称。

- `target`：告诉浏览器用什么方式来打开目标页面。`target`属性有以下几个值：

  -  `_self`：在同一个网页中显示（默认值）。
  -  `_blank`：**在新的窗口中打开**。
  -  `_parent`：在父窗口中显示。
  -  `_top`：在顶级窗口中显示。



## **8 多媒体标签**

 **`<img />` 图片标签**

img: 英文全称 image（图像），代表的是一张图片。

**支持的图片类型：jpg(jpeg)、gif、png、bmp等。**

**不支持的图片类型：psd、ai等。**

标签属性：

| 属性名称 | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| src      | 指图片的路径。英文名称 source。                              |
| width    | 宽度。单位是百分比或像素。                                   |
| height   | 高度。单位是百分比或像素                                     |
| alt      | 当图片不可用（无法显示）的时候，代替图片显示的内容。常用于图片加载失败时的提示信息。 |
| title    | 提示性文本。鼠标悬停时出现的文本。                           |



**`<picture>` 图片资源标签**

显示/设备场景提供相应的图像版本。换句话说根据不同的设备提供不同的图片资源。

**标签属性**

- `media` 属性：依据的媒体条件渲染相应的图⽚，类似媒体查询。
- `type` 属性： `MIME` 类型，根据浏览器⽀持性渲染相应的图⽚

```html
<picture>
  <source media="(min-width:650px)" srcset="/i/photo/flower-4.jpg">
  <source media="(min-width:465px)" srcset="/i/photo/tulip.jpg">
  <img src="/i/photo/flower.gif" alt="Flowers" style="width:auto;">
</picture>
```

**注释：**从上往下读取资源。一个或多个 `<source>` 标签和一个 `<img>` 标签。



## 9 列表标签

无序列表标签  `<ul>` 英文：unordered list

有序列表标签 `<ol>` 英文：ordered list

列表子标签` </li>` 英文： list item



## 10 表格标签

表格标签用`<table>`表示。 一个表格`<table>`是由每行`<tr>`组成的，每行是由每个单元格`<td>`组成的。 

所以我们要记住，一个表格是由行组成的（行是由列组成的），而不是由行和列组成的。

```html
<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```


| `表格`      | `描述`         | `属性`                              | `值`   |
| ----------- | -------------- | ----------------------------------- | ------ |
| `<table>`   | 定义表格       |                                     |        |
| `<caption>` | 定义表格标题   |                                     |        |
| `<th>`      | 定义表格的表头 | rowspan（横跨行）/colspan（列跨行） | number |
| `<tr>`      | 定义表格的行   | rowspan（横跨行）/colspan（列跨行） | number |
| `<td>`      | 定义表格单元   |                                     |        |



## **11 表单标签**

### 11.1 表单标签 form

> 标签没废，但是交互基本废了

用于与服务器的交互。表单用途主要是收集用户信息的，就是让用户填写的、选择的。

form 标签属性

- `name`：表单的名称，用于JS来操作或控制表单时使用；
- `id`：表单的名称，用于JS来操作或控制表单时使用；
- `action`：指定表单数据的处理程序，一般是PHP，如：action=“login.php”
- `method`：表单数据的提交方式，一般取值：get(默认)和post 



总结：表单属性主要用于表单同步提交，后因异步操作和 ajax 的出现已被废弃。



### 11.2 输入标签 input

input 标签属性：

* `value`：文本框内容。
* `size`：文本框字数限制。
* `readonly`：文本框只读。不建议使用。该属性在不同浏览器中表现不同。在google浏览器中，光标点不进去；在IE浏览器中，光标可以点进去，但是文字不能编辑。
* `disabled`：文本框禁用。
* `type`：输入标签的类型

| 属性值   | 类型                                     |
| -------- | ---------------------------------------- |
| text     | 默认，文本。                             |
| password | 密码                                     |
| radio    | 单选                                     |
| checkbox | 多选                                     |
| checked  | 单选或多选默认选中状态                   |
| hidden   | 隐藏框                                   |
| button   | 普通按钮                                 |
| submit   | 提交按钮                                 |
| reset    | 重置按钮                                 |
| image    | 图片按钮，同普通按钮。不过可以显示图片。 |
| file     | 文件选择框。                             |

**提示：如果要限制上传文件的类型，需要配合JS来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查**

案例：

```
<form>
    姓名：<input value="呵呵">逗比<br>
    昵称：<input value="哈哈" readonly=""><br>
    名字：<input type="text" value="name" disabled=""><br>
    密码：<input type="password" value="pwd" size="50"><br>
    性别：<input type="radio" name="gender" id="radio1" value="male" checked="">男
    <input type="radio" name="gender" id="radio2" value="female">女<br>
    爱好：<input type="checkbox" name="love" value="eat">吃饭
    <input type="checkbox" name="love" value="sleep">睡觉
    <input type="checkbox" name="love" value="bat">打豆豆
  </form>
```

展示效果：

![image-20210913150433211](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210913150433211.png)



### 11.3 选择下拉标签 select

> 下拉列表标签，用于下拉列表。常配合option标签使用，是组合标签。

**select 标签的属性**

* `multiple` ：是否可多选。默认不可多选。多选设置`multiple="multiple"`。
* `size`：滚动列表。默认为1.下拉视图。

size效果对比：

![image-20210913151025525](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210913151025525.png)



### 11.4 多行文本标签 textarea

textarea 标签属性：

- rows：指定文本区域的行数。
- cols：指定文本区域的列数。
- readonly：只读。



### 11.5 表单语义化（掌握）

对表单的信息按照功能进行区分，达到语义化的目的。

![image-20210913151319070](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210913151319070.png)



### 10.6 绑定标签 label

> 为 input 元素定义标注（标记），用于绑定输入框和标记内容

label标签属性：

* for：绑定表单元素的id

**案例：**

```html
<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>
```

注释：这样点击男 或 女 也会触发输入框的点击效果。



# HTML5

`HTML5`是新一代开发 **Web 富客户端**应用程序整体**解决方案**。包括：HTML5，CSS3，Javascript API在内的一套**技术组合**。（不仅仅是`HTML next version`）

**下面是HTML5新增的内容：**

![img](https://camo.githubusercontent.com/be881a4e60dce37579226e36f12e715fc8319a497a7ba90fae32e85c4841b291/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313534302e706e67)

![img](https://camo.githubusercontent.com/03edad610e901c341182d50bd0969e8f05d983a3a997860e23b81a8751471174/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313534352e706e67)

![img](https://camo.githubusercontent.com/99ea846d1f0720a9f6805320bbce8041e938957da618b1f8f3274164b574ee7e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230365f313534312e706e67)



## 1 语义化的标签

什么是语义化标签？回答：**在合适的地方放合适的标签。**

- `<section>` 表示区块

- `<article>` 表示文章。如文章、评论、帖子、博客

- `<header>` 表示页眉

- `<footer>` 表示页脚

- `<nav>` 表示导航

- `<aside>` 表示侧边栏。如文章的侧栏

- `<figure>`表示媒介内容分组。

- `<mark>` 表示标记 (用得少)

- `<progress>` 表示进度 (用得少)

- `<time>` 表示日期

## 2 新表单

### 2.1 新表单类型

- `email` 只能输入email格式。自动带有验证功能。
- `tel` 手机号码。
- `url` 只能输入url格式。
- `number` 只能输入数字。
- `search` 搜索框
- `range` 滑动条
- `color` 拾色器
- `time` 时间
- `date` 日期
- `datetime` 时间日期
- `month` 月份
- `week` 星期



案例展示：

```html
<form action="">
    <legend>表单类型</legend>
    <label for="">
      email: <input type="email" name="email" required>
    </label>
    <label for="">
      color: <input type="color" name="color">
    </label>
    <label for="">
      url: <input type="url" name='url'>
    </label>
    <label for="">
      number: <input type="number" step="3" name="number">
    </label>
    <label for="">
      range: <input type="range" name="range" value="100">
    </label>
    <label for="">
      search: <input type="search" name="search">
    </label>
    <label for="">
      tel: <input type="tel" name="tel">
    </label>
    <label for="">
      time: <input type="time" name="time">
    </label>
    <label for="">
      date: <input type="date" name="date">
    </label>
    <label for="">
      datetime: <input type="datetime">
    </label>
    <label for="">
      week: <input type="week" name="month">
    </label>
    <label for="">
      month: <input type="month" name="month">
    </label>
    <label for="">
      datetime-local: <input type="datetime-local" name="datetime-local">
    </label>
    <input type="submit">
  </form>
```

展示效果：

![image-20210913233433912](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210913233433912.png)



### 2.2 新表单标签

**datalist标签**

> 数据列表标签。可以看做是一个带搜索功能的下拉列表（select）的升级版。

注意：一定使用 input 元素的 list 属性来绑定 datalist。input标签的list属性目前仅有这一个作用。



案例：

```html
<input type="text" list="myData">
<datalist id="myData">
    <option>本科</option>
    <option>研究生</option>
    <option>不明</option>
</datalist>
```

效果：

![image-20210914002846359](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210914002846359.png)





**keygen 标签**

> keygen 元素的作用是提供一种验证用户的可靠方法。

keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键：一个公钥，一个私钥。

私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

**注释：暂时未知有何用途，待后面开发后补充。**



**meter标签**

> 度量器标签。用于展示当前的数值的情况

- low：低于该值后警告
- high：高于该值后警告
- value：当前值
- max：最大值
- min：最小值。



案例：

```html
<div><span>81</span><meter value="81" min="0" max="100" low="60" high="80" /></div>
<div><span>70</span><meter value="70" min="0" max="100" low="60" high="80" /></div>
<div><span>59</span><meter value="59" min="0" max="100" low="60" high="80" /></div>
```

效果：

![image-20210914004101000](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210914004101000.png)





### 2.3 新表单属性

- `placeholder` 占位符（提示文字）
- `autofocus` 自动获取焦点
- `multiple` 文件上传多选或多个邮箱地址
- `autocomplete` 自动完成（填充的）。on 开启（默认），off 取消。用于表单元素，也可用于表单自身(on/off)
- `form` 指定表单项属于哪个form，处理复杂表单时会需要
- `novalidate` 关闭默认的验证功能（只能加给form）
- `required` 表示必填项
- `pattern` 自定义正则，验证表单。



### 2.4 新表单事件

- `oninput()`：用户输入内容时触发，可用于输入字数统计。
- `oninvalid()`：验证不通过时触发。



## 3 自媒体标签

在HTML5之前，在网页上播放音频/视频的通用方法是利用 Flash 插件来播放。但是大多情况下，并非所有用户的浏览器都安装了 Flash 插件，由此使得音频、视频播放的处理变得非常复杂；并且移动设备的浏览器并不支持 Flash 插件。（目前各家浏览器已全面禁止 FLash 插件，原因是 HTML5 的方案逐渐成熟，已成为 Flash 内容的可替代方案，且 Adobe 已决定不再发布 Flash Player 更新或安全补丁）



### 3.1 audio 音频标签

示例：

```html
<audio src="music/yinyue.mp3" autoplay controls> </audio>
```

audio 标签属性

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。
- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）
- `loop` 循环播放。
- `preload` 预加载 同时设置 autoplay 时，此属性将失效。



**知识补充：兼容性处理**

问题产生原因：由于版权等原因，不同的浏览器可支持播放的格式是不一样的。

解决方案：

```html
<!--推荐的兼容写法：-->
<audio controls loop>
    <source src="music/yinyue.mp3"/>
    <source src="music/yinyue.ogg"/>
    <source src="music/yinyue.wav"/>
    抱歉，你的浏览器暂不支持此音频格式
</audio>
```



**HTML5浏览器和音频格式兼容性**

| **音频格式** | IE   | Firefox | Opera | Chrome | Safari |
| ------------ | ---- | ------- | ----- | ------ | ------ |
| OGG          | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MP3          | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WAV          | No   | 4.0+    | 10.6+ | 6.0+   | No     |

**总结：优先选择 MP3 格式，次选 WAV 格式即可满足所有需求。**



### 3.2 video 视频标签

示例：

```html
	<video src="video/movie.mp4" controls autoplay></video>
```

video 标签属性

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。
- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）
- `loop` 循环播放。
- `preload` 预加载 同时设置 autoplay 时，此属性将失效。
- `width`：设置播放窗口宽度。
- `height`：设置播放窗口的高度。

**知识补充：兼容性处理（原因同上）**

解决方案：

```html
    <!--<video src="video/movie.mp4" controls  autoplay ></video>-->
    <!--  行内块 display:inline-block -->
    <video controls autoplay>
        <source src="video/movie.mp4"/>
        <source src="video/movie.ogg"/>
        <source src="video/movie.webm"/>
        抱歉，不支持此视频
    </video>
```

**HTML5浏览器和视频格式兼容性**

| 视频格式 | IE   | Firefox | Opera | Chrome | Safari |
| :------- | :--- | :------ | :---- | :----- | :----- |
| Ogg      | No   | 3.5+    | 10.5+ | 5.0+   | No     |
| MPEG 4   | 9.0+ | No      | No    | 5.0+   | 3.0+   |
| WebM     | No   | 4.0+    | 10.6+ | 6.0+   | No     |

**总结：优先选择 MP4 格式，次选 WebM 格式即可满足所有需求。**



## 4  drag 拖拽

> 在HTML5 中每个元素（标签）新增加 `draggable` 属性，来设置此元素是否可以拖拽，其中图片、链接默认是开启拖拽的。

### 4.1 拖拽元素

**拖拽元素的事件监听**：（应用于拖拽元素）

- `ondragstart`当拖拽开始时调用。
- `ondragleave` 当**鼠标离开拖拽元素时**调用。
- `ondragend` 当拖拽结束时调用。
- `ondrag` 整个拖拽过程都会调用。

### 4.2 目标元素

> 页面中任何一个元素都可以成为目标元素。

- `ondragenter` 当拖拽元素进入时调用。
- `ondragover` 当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）。
- `ondrop` 当在目标元素上松开鼠标时调用。
- `ondragleave` 当鼠标离开目标元素时调用。



## 5 iframe 外部页面标签

框架标签，用于在页面内创建另外一个页面文档（外部）。由于现在前端往 Serverless 方向发展。未来应该会越来越多的使用 iframe 标签。

>  参考文章：
>
> https://segmentfault.com/a/1190000004502619



知识补充（仅作了解）

h5 之前的框架标签

1. 框架标签不能放在`<body>`标签里面，因为`<body>`标签代表的只是一个页面，而框架标签代表的是多个页面。于是：`<frameset>`和`<body>`只能二选一。
2. 框架的集合用`<frameset>`表示，然后在`<frameset>`集合里放入一个一个的框架`<frame>`

```html
<frameset>
<frame></frame>
<frame></frame>
</frameset>
```

**补充：`frameset`和`frame`已经从 Web标准中删除，使用 iframe 代替。**

