# vepress 构建个人博客

## 0 前言

本文将记录我使用 vuepress 创建博客的过程。如果想要创建博客，还是建议查看官方文档。截至2021/06/23。2.0版本正式版尚未发布。所以这里还是用成熟的1.0x版本。

官方文档地址：https://v2.vuepress.vuejs.org/zh/

配套教程：https://segmentfault.com/a/1190000017890986

>  为什么用VuePress搭建博客?

1.  vue 是我目前工作使用的主要开发语言。后期对博客的升级更方便。
2. 个人感觉 vuepress 的页面更加简洁。更符合笔记的审美需求。
3. 以后开发组件的说明文档时计划使用 vuepress 。



## 1 快速上手

### 1.1 环境准备

node.js v12+:https://nodejs.org/en/

### 1.2 快速搭建博客

* 创建新目录

```
mkdir mybolg && cd mybolg
```

* 初始化目录

```
npm init
```

* 安装Vuepress包

```
npm install -D vuepress
```

* 创建第一篇文章

```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

* 添加自定义命令行操作**（相对官网做了命令行名称优化）**

```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

* 本地启动服务器

```markdown
npm run dev
```

### 1.3 认识 vuepress 的目录结构

```js
├── docs
│   ├── .vuepress (可选的)	// 用于存放全局的配置、组件、静态资源等。
│   │   ├── components (可选的)	//该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── theme (可选的)	//用于存放本地主题。
│   │   │   └── Layout.vue
│   │   ├── public (可选的)	// 静态资源目录。
│   │   ├── styles (可选的)	// 用于存放样式相关的文件。
│   │   │   ├── index.styl	// 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl	// 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── templates (可选的, 谨慎配置)	// 存储 HTML 模板文件。
│   │   │   ├── dev.html	// 用于开发环境的 HTML 模板文件。
│   │   │   └── ssr.html	// 构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── config.js (可选的)	// 配置文件的入口文件，也可以是 YML 或 toml。
│   │   └── enhanceApp.js (可选的)	// 客户端应用的增强。
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

## 2 博客配置

 博客配置全部在 `config.js`  上配置



### **2.1 基础配置**

```js
module.exports = {
    title: 'bolg', // 页签标题
    description: '金志相的 Wiki 1001 维基百科', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/geass-bg.ico' }], 
    ],
    base: '/wiki/', // 部署到github上面的路由路径
 }
```



### **2.2 顶部导航栏**

> 导航栏中使用items做子导航栏的参数

```js
module.exports = {
    ...
  themeConfig: { 
    nav: [
      //一级导航
      { text: 'Home', link: '/' },
    	//多级导航
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ]
  }
 }
```



###  2.3 **侧边栏**

> 路径中可省略 `.md` 扩展名，以 `/` 结尾的路径被推断为 `*/README.md` 。

```js
module.exports = {
    ...
  sidebar: [
    // 单级子菜单
    ['/page-b', 'Explicit link text'],
    // 嵌套标题菜单
    {title:'标题名',
    collapsable:'false',// 是否折叠,
    children:[ //子菜单 [路径,标题]
      ['/page-b', 'Explicit link text']
    ]
    }
 }
```



### 2.4 博客首页

首页配置在 `README.md` 上

```
---
home: true
heroImage: /img/logo.jpg
heroText: Wiki 1001
tagline: Meet 1000 Books & Unit Them Into 1 Wiki
actionText: Get Wiki →
actionLink: /FAQ/
features:
- title: Wiki - 求索
  details: 基于书签对知识点进行 整理，吸收，吐纳，归档。吾将上下而求索...
- title: Store - 仓库
  details: 展望云仓库而归纳整理，方便行事&培养习惯。鱼和熊掌我全都要...
- title: Thought - 随笔
  details: 活着，是一件最能带来满足感的事。细细琢磨吧，人生啊，有意思的很...
footer: MIT Licensed | Copyright © 2019.01.11-present Mulander-J
---
```

各位置对应的网站位置

![图片002](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgbVbnepd)

## 3 部署Github Pages

1. 在 `docs/.vuepress/config.js` 中设置正确的 `base`

```js
module.exports = {
 ...
  base: '/blog/', // 仓库名称。如果发布到 https://<USERNAME>.github.io/ 则直接写 /
 ...
}
```

在 `docs` 同级目录下创建 `deploy.sh` 文件（请自行判断去掉高亮行的注释）：

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件，根据自身配置修改
# npm run docs:build 
npm run build 
# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```



上传完毕查看 Github Pages 设置

![image-20210805001921007](https://typora-chen.oss-cn-beijing.aliyuncs.com/typora-chen/imgimage-20210805001921007.png)

注释：上面是地址下面是部署到 Github Pages 的分支

## 4 插件配置

>  因官方文档易读性较差，下面找到更易读的文档：
>
> https://blog.csdn.net/loveshanqian/article/details/106406178。
>
> 详情配置文章看官方文档。

下面为官网插件,默认主题不用安装

### 4.1 菜单高亮

名称：@vuepress/plugin-active-header-links
效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。

### 4.2 回到顶部

名称：@vuepress/plugin-back-to-top
效果：文章看到下面的时候，点击一个图标会回到顶部

### 4.3 博客功能

名称：@vuepress/plugin-blog
效果：让我们可以使用博客的一些功能。定制开发主题。

### 4.4 网站数据分析

名称：@vuepress/plugin-google-analytics
效果：帮我们统计网站的流量和分析网站的一些功能

### 4.5 显示更新日期

名称：@vuepress/plugin-last-updated
效果：文章的末尾会自动显示文章的更新日期

### 4.6 图片放大

名称：@vuepress/plugin-medium-zoom
效果：将图片放大到全屏浏览

### 4.7 进度条

名称：@vuepress/nprogress
效果：打开新页面的时候有进度条显示

### 4.8 PWA

>  什么是PWA?

* PWA（ 全称：Progressive Web App ）也就是说这是个渐进式的网页应用程序。

> 主要特点：

* 离线可用

* 可以把web应用安装到桌面，手机端也可以安装到桌面

名称：@vuepress/plugin-pwa
效果：网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样。

### 4.9 注册全局组件

名称：@vuepress/plugin-register-components
效果：在该组件下注册的组件是全局组件

### 4.10 全局搜索

名称：@vuepress/plugin-search
效果：在导航栏进行全局搜索

## 5 markdown 拓展

5.1 Front Matter

通过指定 md 文章的 Front Matter 可以为文章添加重要的属性。页面会根据属性进行文章分类或页面渲染

* title 标题
* date 时间

* permalink 永久链接
* categories 分类
* tags 标签



案例：

```md
---
title: 《JavaScript教程》笔记
date: 2020-01-12 11:51:53
permalink: /pages/d8cae9
categories:
  - 前端
  - JavaScript
tags:
  -
---
```



## 6 主题的使用

**主题的本质**

* 主题的使用可以快速配置博客。但需要知道 vuepress 博客的配置。

* 换句话说主题只是帮你配置好主题样式和插件，个人配置还是需要自己去配置。

### 6.1 快速入门并配置

* 本次使用的 `vuepress` 博客主题为 `vdoing` 

* `vdoing` 官网地址：https://doc.xugaoyi.com/pages/793dcb/



**快速上手**

```sh
# clone the project
git clone https://github.com/xugaoyi/vuepress-theme-vdoing.git

# enter the project directory
cd vuepress-theme-vdoing

# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev
```



**快速配置**

1. 配置部署文件

2. 按照官方文档配置博客（一定要看）

https://doc.xugaoyi.com/pages/a20ce8/