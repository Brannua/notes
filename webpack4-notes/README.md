## webpack

- 模块打包工具，支持多种模块化规范

- 基于Node.js，故需要nodejs环境

  ```shell
    npm init -y
  ```

## 安装

- 全局安装webpack( 不推荐 )

  ```shell
    npm install webpack webpack-cli -g

    webpack -v

    // 全局卸载( if you like )
    npm uninstall webpack webpack-cli -g
  ```

- 项目中安装最新版webpack( 推荐！ )

  ```shell
    npm install webpack webpack-cli -D

    npx webpack -v
  ```

- 项目中安装指定版本webpack

  ```shell
    npm info webpack

    npm install webpack@4.16.5 webpack-cli -D

    npx webpack -v
  ```
