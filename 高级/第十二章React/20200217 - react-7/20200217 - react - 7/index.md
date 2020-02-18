# React 实战

## 课程目标
- 掌握 CSS Modules 在项目中的使用
- 掌握 antd 在项目中的配置
- 掌握项目结构划分

## 课程内容

### CSS Modules
- 在 create-react-app 中的使用：
    - .css .sass 正常文件
    - [name].module.css [name].module.sass 需要模块化的文件
- CSS Modules 使用
    - 局部 声明:local(.className) .className 使用 styled.className 
    - 全局 :global(.className)
    - composes 引入其他样式

### Ant Design

官网: https://ant.design/index-cn

#### 使用

- 最基本使用
    - 安装 npm install antd
    -   引入
        import { DatePicker } from 'antd';
        ReactDOM.render(<DatePicker />, mountNode);
        import 'antd/dist/antd.css';
- 在 create-react-app 中使用 antd 并模块化我们的样式
    - npm i antd
    - npm i react-app-rewired customize-cra
        react-app-rewired 自定义  create-react-app  的配置
    - 修改 package.json
        
        "scripts": {
        -   "start": "react-scripts start",
        +   "start": "react-app-rewired start",
        -   "build": "react-scripts build",
        +   "build": "react-app-rewired build",
        -   "test": "react-scripts test",
        +   "test": "react-app-rewired test",
        }

    - 安装  babel-plugin-import `npm i babel-plugin-import`
        babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件

    - 在项目根目录创建一个 config-overrides.js 用于添加babel-plugin-import配置
        
        const { override, fixBabelImports } = require('customize-cra');
        module.exports = override(
           fixBabelImports('import', {
             libraryName: 'antd',
             libraryDirectory: 'es',
             style: 'css',
           }),
        );

- 在项目中使用 less 语法
    - 安装 npm i less less-loader
    - 修改 config-overrides.js 配置

        - const { override, fixBabelImports } = require('customize-cra');
        + const { override, fixBabelImports, addLessLoader } = require('customize-cra');

        module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
        -   style: 'css',
        +   style: true,
        }),
        + addLessLoader({
        +   javascriptEnabled: true,
        +   modifyVars: { '@primary-color': '#1DA57A' },
        + }),
        );

### 实战：搭建 CNode 项目

### 练习
配置一下项目环境，开始向后写