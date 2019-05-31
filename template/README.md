# {{ name }}

## {{ description }}

## 项目构建
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 开发说明
在packages 下的src 文件开发组件

然后运行 npm run dev  看组件效果


打包需先修改 package.json 中的 
"name": "{{name}}", //组件名称
"version": "1.0.0", //组件版本
"private": false, //是否开源
"description": "百丽组件库", //组件描述
"main": "lib/{{name}}.umd.min.js", //组件应用文件
"keyword": "{{name}}", //关键词