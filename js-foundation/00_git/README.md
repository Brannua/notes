# Git

## 什么是Git

- Git是一款源代码管理工具( 版本控制工具 )
    - 我们写的代码需要使用Git进行管理
- 源代码管理的必要性
    - 人工管理不同的版本,做相应的备份很麻烦
    - Git是Linux之父当年为了维护Linux而写的一个版本管理的工具
- 其他版本控制工具
    - svn,vss,vcs,...

## Git安装

- https://git-scm.com/

- 检验安装成功
    - 鼠标右键菜单
        - git bush here
        - git gui here

- 检查git版本
    - git --version

## 初始化Git仓库

- 在项目目录下
    - `git init`
    - 生成`.git`隐藏文件

## 配置使用者的用户名和邮箱( 自报家门 )

> 配置后,在每一次将代码备份到.git文件夹时,备份者的用户名和邮箱信息也会被记录下来,方便日后查看备份者

- 在项目目录下全局配置使用者的用户名
    - `git congit --global user.name "username"`
- 在项目目录下全局配置使用者的邮箱
    - `git congit --global user.email "userEmail"`

## 把代码存储到.git仓库中

- 项目目录称为工作区( 不包含.git隐藏目录 )
- `git add 文件相对路径`
    - 放到暂存区
- `git commit -m "comments"`
    - 放到版本库

## git status 查看状态

- `git status`
    - 查看状态

## git commit --all -m "comments"

- `git commit --all -m "comments"`
    - 将修改过的代码一次性地放到版本库中

## .gitignore设置忽略文件

- 在.ignore文件中可以设置被忽略的文件或者目录的路径
- 一行写一个路径,这些路径所对应的文件都会被忽略,不会被提交到版本库中
- 忽略特定后缀名的文件
    - `/js/*.js` ==> 会忽略js目录下的所有js文件

## git 查看日志

- 查看历史提交的日志
    - `git log`
- 查看历史提交的简洁版的日志
    - `git log --oneline`

## git版本回退

- `git reset --hard Head~0`
    - 表示回退到上一次代码提交时的状态
- `git reset --hard Head~1`
    - 表示回退到上上一次代码提交时的状态
- 以此类推...

## 通过版本号切换版本, git reflog 查看版本操作记录

- `git reset --hard 版本号`
    - 可以通过版本号精确地回退到某一次提交时的状态
- `git reflog`
    - 查看版本操作记录

## 分支

- `git branch 分支名称`
    - 创建分支
    - 刚创建分支的时候,分支里面的东西和master分支里面的东西是一样的
- `git branch -d 分支名称`
    - 删除分支名称所代表的分支
- `git branch`
    - 查看当前所有分支及当前所在分支
- `git checkout 分支名称`
    - 切换分支
- `git checkout master`
    - 切换到主分支
- `git merge 分支名`
    - 将分支名所代表的分支合并到当前分支
    - 当前分支指的是`git branch`命令输出的前面带有*的分支

## 合并分支时候,手动处理冲突

- 合并时如果有冲突,需要手动去处理,处理后还需要再提交一次

## 把本地代码提交到服务器上

- `git push [地址] master`

## git pull

- 首先使用`git init `在本地初始化一个空的仓库
- 然后`git pull 地址 master`
    - 将地址指向的远程项目的master分支拉取下来