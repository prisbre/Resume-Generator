简历生成器
==========================

- 基于 Webpack 构建静态页面
- 采用 Pug 编写 HTML 模板，用 Sass 预编译样式，由 Webpack 构建整个开发打包流程，驱动页面自动生成，架设本地服务器测试。
- 调用 html-pdf-plugin 生成 PDF。

## 配置

- 安装 [**Node.Js**](https://nodejs.org/en/)
- 配置 **npm + 国内源**  
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 运行 `cnpm install` 初始化项目

因项目需 Google Chromium 自动生成 PDF 版简历，下载配置过程较长，请稍等。

## 运行

- 按提示填写 `info.json`
- 将 `src\assets\wechat.svg` 换成自己的照片或二维码，注意 `info.json QRcode` 处文件路径保持一致
- 运行 `npm run start`，将启动环境自动打开 `http://localhost:80/` 预览简历效果
- 运行 `npm run build`，打包生产环境文件，可在 `dist` 文件夹查看

## 结构
```
.
├── src/
│   ├── assets/                   # 静态文件
│   │   ├── fonts/                # 图标字体
│   │   └── wechat.svg            # 二维码
│   ├── js/                       # 入口文件
│   │   ├── index.dev.js          
│   │   └── index.prod.js   
│   ├── sass/                     # 样式
│   │   ├── style.scss          
│   │   └── _include-media.scss      
│   └── templates/                # pug模板
│       ├── index.pug         
│       └── layout.pug
├── webpack.dev.js                # 开发模式配置
├── webpack.prod.js               # 生产模式配置
├── webpack.common.js             # 公共配置
├── info.json                     # 简历表单
├── README.md
├── postcss.config.json
└── project.config.json           # 项目配置文件
```

## 截图

<img src="https://github.com/prisbre/Resume-Generator/blob/master/preview.png" width="375px" style="display:inline;">

##	License

Licensed under [The MIT License](LICENSE).