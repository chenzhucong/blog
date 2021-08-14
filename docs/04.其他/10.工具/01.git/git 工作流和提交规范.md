# git工作流和提交规范

## 0 前言

本文主要整理常用的 git 工作流和 commit 提交规范

参考文章：

https://juejin.cn/post/6844903866451001352

https://juejin.cn/post/6934292467160514567#heading-6

## 1 git工作流

### 1.1 工作分支

* master 主分支，属保护分支，不能直接在此进行代码修改和提交。
* develop 日常使用分支，缩写为 dev
* feature 新功能分支，当完成一个功能并测试通过后进行合并到 develop 分支中。
* hotfix线上紧急漏洞修复分支，从 master 分支拉取创建，修复完 bug 后合并到 master 和 develop 分支中。

### 1.2 环境分支

- master 开发环境分支
- pre-production 预发环境分支
- production 生产环境分支

## 2. 代码风格提交规范

> 目前使用提交贵方为 Angular 规范

格式：

```
type(scope): subject
```

**type （只允许下列7个标识）：**

- feat[特性]：新功能（feature）
- fix[修复]：修复 bug
- docs[文档]：仅修改文档（documentation）
- style[格式]： 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- refactor[重构]：代码重构，没有加新功能或者修复 bug
- perf[优化]：优化相关，比如提升性能、体验
- test[测试]：测试用例，包括单元测试、集成测试等
- build: 影响构建系统或外部依赖项的更改（gulp，npm等）
- chore[工具]：改变构建流程、或者增加依赖库、工具等

* revert[回滚]: 回滚到上一个版本

**scope（选填）：**

此次提交的影响范围，如数据层、控制层、视图层等，多个可以用 * 代替，必须在 type 之后、小括号之内。

**subject：**

此次提交的简要描述，必须在 type 之后的冒号之后的一个空格之后，结尾没有句号。

## 3. commit 规范工具

 **自动工具 Commitizen** ：https://juejin.cn/post/6844904135855177742

全局安装

```
npm install -g commitizen
```

---

团队使用：局部安装，会出现在配置文件中

局部安装 `cz-conventional-changelog` 作为 commitizen 的适配器

```
commitizen init cz-conventional-changelog --save --save-exact
```

使用 `git cz`  代替`git commit`

```
git gz
```

`package.json` 将出现相关配置和依赖

```
"devDependencies": {
    "cz-conventional-changelog": "^3.1.0"
  },
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

这里可以顺便把命令行也配置了，那么使用`git gz和npm run commit` 都可以使用自动工具

```
"script": {
    ...,
    "commit": "git-cz",
},
```



个人使用：全局安装，不会出现在项目的配置文件当中

全局安装

```
npm install -g commitizen cz-conventional-changelog
```

设置默认配置环境

```
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

使用

```
git gz
```

