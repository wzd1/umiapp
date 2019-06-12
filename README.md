# React+UmiJS项目使用说明

### 基于React、UmiJS构建的移动端应用

应用技术点：

- [React](https://facebook.github.io/react/)
- [UmiJS](https://umijs.org/zh/)
- [MDUI](https://www.mdui.org/)
- [Ant Design](https://ant.design/docs/react/introduce-cn)
- [dva](https://dvajs.com/)
- [Redux](http://redux.js.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Axios](https://github.com/axios/axios/)

## 环境准备
首先得有 [node](http://nodejs.cn/)，并确保 node 版本是 8.10 或以上。（mac 下推荐使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本）
```
$ node -v
8.1x
```

推荐使用 yarn 管理 npm 依赖，并[使用国内源](https://github.com/yiminghe/tyarn)（阿里用户使用内网源）。
```
# 国内源
$ npm i yarn tyarn -g
# 后面文档里的 yarn 换成 tyarn
$ tyarn -v

# 阿里内网源
$ tnpm i yarn @ali/yarn -g
# 后面文档里的 yarn 换成 ayarn
$ ayarn -v
```

然后全局安装 umi，并确保版本是 2.0.0 或以上。
```
$ yarn global add umi
$ umi -v
2.0.0
```
* **注意: 如果提示 umi 命令不存在，你需要执行 yarn global bin，然后把 global bin 的路径添加到环境变量 PATH 中。**

## 安装

```bash
$ yarn
```

* **注意: node 版本是 8.10 或以上**

## 运行

启动开发环境（通过 yarn start 启动本地开发）：

```bash
$ yarn start
```

浏览器访问 http://localhost:8000  ，打开web页面。

## 打包

执行命令:

```bash
$ umi build
```
构建产物默认生成到 ./dist 下
```
./dist
├── index.html
├── umi.css
└── umi.js
```

## 本地验证
发布之前，可以通过 serve 做本地验证，
```
$ yarn global add serve
$ serve ./dist

Serving!

- Local:            http://localhost:5000
- On Your Network:  http://{Your IP}:5000

Copied local address to clipboard!
```
访问 http://localhost:5000，正常情况下应该是和 umi dev 一致的。


## 目录及约定
在文件和目录的组织上，umi 更倾向于选择约定的方式。
一个复杂应用的目录结构如下：
```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```

## ES6 语法
配置文件、mock 文件等都有通过 @babel/register 注册实时编译，所以可以和 src 里的文件一样，使用 ES6 的语法和 es modules 。

## dist
默认输出路径，可通过配置 [outputPath](https://umijs.org/zh/config/#outputpath) 修改。

## mock
此目录下所有的 .js 文件（包括 _ 前缀的）都会被解析为 mock 文件。

比如，新建 mock/users.js，内容如下：
```
export default {
  '/api/users': ['a', 'b'],
}
```
然后在浏览器里访问 http://localhost:8000/api/users 就可以看到 ['a', 'b'] 了。

如果想忽略 mock 文件夹下的部分文件，参考 [mock.exclude](https://umijs.org/zh/config/#mock-exclude) 配置。

## src
约定 src 为源码目录，如果不存在 src 目录，则当前目录会被作为源码目录。

比如：下面两种目录结构的效果是一致的。
```
+ src
  + pages
    - index.js
  + layouts
    - index.js
- .umirc.js
```
```
+ pages
  - index.js
+ layouts
  - index.js
- .umirc.js
```