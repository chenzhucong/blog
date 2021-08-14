# git 常用命令和底层实现原理

## 0 前言

本文主要整理 git 常用命名和底层实现原理。

参考文章：https://juejin.cn/post/6844903598522908686



## 1 常用命令

![img](https://images0.cnblogs.com/blog2015/685971/201506/011500266295799.jpg)

注释：

* `<remote>` 表示远程主机名
* `<branch>` 表示远程分支名称
* `<url> `表示远程分支地址
* `<file> `表示文件名称



## 2 按功能区分 git 命令

### 2.1 工作区指令

#### 2.1.1 查看配置信息

```js
// 当前配置
git config --list
// 全局配置
git config --global --list
```



#### 2.1.2 配置用户信息

```js
// 配置用户名
git config --global user.name "your name"
//	配置用户邮箱
git config --global user.email "youremail@github.com"
```



#### 2.1.3 初始化仓库

```js
// 初始化仓库
git init
// 克隆远程仓库仓库
git clone <url>
```



#### 2.1.4 提交文件

```js
// 提交所有文件
git add .
// 提交指定文件
git add <file1> <file2> ...
// 提交指定文件夹
git add [dir]
```



#### 2.1.5 撤销文件

```js
// 删除工作区文件和并删除暂存区的文件记录
git rm <file1> <file2>
// 取消暂存区已暂存的文件
git reset HEAD <file>...
// 撤销上一次对文件的操作
git checkout --<file>
```

注意：

* `git reset` :拉取最近一次提交到版本库的文件到暂存区,该操作不影响工作区。
* `git check`:拉取暂存区文件,并将其替换成工作区文件。**常用语将工作区的文件操作全部撤回**。
* 以上两个操作应该是搭配使用达到 **从远程仓库仅拷贝某个文件到工作区**。



#### 2.1.6 更改文件

```js
// 重命名文件并提交到暂存区
git mv [file-original] [file-renamed]
```



#### 2.1.7 查看更新信息

```js
// 查询当前工作区所有文件的状态
git status
// 查看当前工作区所有文件和暂存区的区别
git diff
// 查看当前工作区指定文件和暂存区的区别
git diff <file-name>
```



### 2.2 暂存区指令

#### 2.2.1 提交文件到版本库

```js
// 将暂存区中的文件提交到本地仓库
git commit -m "commit_info"
// 将所有已经使用git管理过的文件暂存后一并提交，跳过add到暂存区的过程
git commit -a -m "commit_info"
// 撤销上一次提交
git commit --amend
```

注意：

* `-a`指令是不建议使用的，因为新加的文件（即没有被git系统管理的文件）是不能被提交到本地仓库的。
* 详情看文章：https://www.cnblogs.com/qianqiannian/p/6005628.html
* 撤销上一次提交常用于漏掉文件或提交备注写错了。



#### 2.2.2 查看信息

```js
// 比较暂存区与上一版本的差异
git diff --cached;
// 指定文件在暂存区和本地仓库的不同
git diff <file-name> --cached
// 查看提交历史，参数-p展开每次提交的内容差异，用-2显示最近的两次更新，如git log -p -2;
git log
```



#### 2.2.2 打标签

> 在开发中常用于标记版本，记录关键时刻

```js
// 列出现在所有的标签
git tag
// 列出符合条件的标签，加上参数-l
git tag -l "v1.4.2.*"
// 创建一个含附注类型的标签,加上-a参数即可
git tag -a v1.4 -m "my version 1.4"
// 创建轻量标签
git tag v1.4
// 推送特定标签
git push origin v1.5
//推送全部标签
git push origin --tags
//删除标签
git tag -d v1.4
```



#### 2.2.3 分支管理

```js
// 创建分支
git branch <branch-name>
// 切换分支
git checkout <branch-name>
// 新建并切换分支
git checkout -b <branch-name>
// 删除分支
git branch -d <branch-name>
//将当前分支和指定分支合并
git merge <branch-name>
//显示仓库所有分支
git branch
// 查看已合并到当前分支的分支
git branch --merged
//查看未合并到当前分支的分支
git branch --no-merged
//将远程分支合并到当前分支
git merge <remote-name>/<branch-name>
// 变基
git rebase
```



### 2.3 本地仓库命令

```js
// 查看本地仓库关联的远程仓库 参数-v未显示远程仓库地址
git remote -v
// 添加远程仓库，一般会取一个简短的别名
git remote add [remote-name] [url]
git remote add example git://github.com/example/example.git
// 将远端数据拉到本地仓库，并不自动合并到当前工作分支，只能人工合并。
git fetch
// 拉取远程分支数据并合并
git pull
// 查看远程仓库的详细信息
git remote show origin
// 将本地仓库某分支推送到远程仓库上。如果是默认可以省略
git push [remote-name] [branch-name]
git push
// 将本地分支推送到远程仓库的不同名分支
git push <remote-name> <local-branch>:<remote-branch>
// 删除远程分支。将空白内容推送到远程分支等同于删除远程分支
git push [romote-name] :<remote-branch>
git push origin :serverfix
// 移除远程仓库
git remote rm [remote-name]
```

注意：如果关联失败先`git remote show origin`查看原因，再添加远程仓库。



### 2.4 忽略文件 .gitignore

常备忽略的文件为日志文件，临时文件，打包文件等

```
# 此为注释 – 将被 Git 忽略
# 忽略所有 .a 结尾的文件
*.a
# 但 lib.a 除外
!lib.a
# 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
/TODO
# 忽略 build/ 目录下的所有文件
build/
# 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
doc/*.txt
# 忽略 doc/ 目录下所有扩展名为 txt 的文件
doc/**/*.txt
```



## 3 底层实现

 git操作流程

![git操作通用流程](https://user-gold-cdn.xitu.io/2018/4/25/162fcc0987bf1c0a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

主要涉及到四个关键点：

1. 工作区：本地电脑存放项目文件的地方，比如learnGitProject文件夹；
2. 暂存区（Index/Stage）：在使用git管理项目文件的时候，其本地的项目文件会多出一个.git的文件夹，将这个.git文件夹称之为版本库。其中.git文件夹中包含了两个部分，一个是暂存区（Index或者Stage）,顾名思义就是暂时存放文件的地方，通常使用add命令将工作区的文件添加到暂存区里；
3. 本地仓库：.git文件夹里还包括git自动创建的master分支，并且将HEAD指针指向master分支。使用commit命令可以将暂存区中的文件添加到本地仓库中；
4. 远程仓库：不是在本地仓库中，项目代码在远程git服务器上，比如项目放在github上，就是一个远程仓库，通常使用clone命令将远程仓库拷贝到本地仓库中，开发后推送到远程仓库中即可；



## 4 常见问题解决方案

**git merge 图解**

![merge](https://user-gold-cdn.xitu.io/2018/5/9/16342fbc3161f98e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 4.1 git rebase 详解

基变。将一个分支里提交的改变移到基底分支上重放一遍。仅针对未提交到远程仓库的操作。

![merge](https://user-gold-cdn.xitu.io/2018/5/9/16342fc20a6c6c8f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

简单来说就是将 commit 的文件操作内容在另一个分支上重现。

```js
// 命名模板
git rebase <rebase-branch> <branch-name>
// 案例
git rebase master server
```

将特性分支 server 提交的改变在基底分支 master 上重演一遍。

### 4.2 git rebase 合并提交分支

git rebase 合并图解：

![rebase示意图](https://user-gold-cdn.xitu.io/2018/5/2/1631fdf49c54c568?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

命令：

```
git rebase -i  [startpoint]  [endpoint]
```

* `-i`的意思是`--interactive`，即弹出交互式的界面让用户编辑完成合并操作。
* `[startpoint] [endpoint]`则指定了一个编辑区间，如果不指定`[endpoint]`，则该区间的终点默认是当前分支HEAD所指向的 commit 。

* `[startpoint]`可以根据 `git log` 进行查询。

案例：

```
git rebase -i 36224db
```

或者（编辑最近三次提交）（推荐）。

```
git rebase -i HEAD~3 
```

对节点进行操作，操作命令如下：

> pick：保留该commit（缩写:p）
>
> reword：保留该commit，但我需要修改该commit的注释（缩写:r）
>
> edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
>
> squash：将该commit和前一个commit合并（缩写:s）
>
> fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）
>
> exec：执行shell命令（缩写:x）
>
> drop：我要丢弃该commit（缩写:d）

### 4.3处理冲突

#### 4.3.1 git merge 方案

* 切换到主分支并拉取最新代码。

```
git checkout master
git pull
```

* 合并开发分支。

```
git merge dev
```

* 手动处理冲突后再上传。

```
git add .
git commit -m "bug:处理冲突再上传"
```



#### 4.3.2 git rebase 方案

* 切换到主分支并拉取最新代码。

```
git checkout master
git pull
```

* 分支换基。

```
git rebase dev
```

* dev 分支的文件操作在master分支上重现。

* 提交代码。

```
git push
```



总结：不动同一个文件可以使用 `git rebase` ,如果动到同一个文件请务必使用 `git merge` ，因为前者的文件操作会直接覆盖文件。

