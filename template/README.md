# belle-components-store

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
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

在src 文件夹下views 文件下 index.vue 文件把 元素BelleInput 换成 你所写的组件 name 名称。 然后运行 npm run serve  看组件效果


打包需先修改 package.json 中的 
"name": "belle-input", //组件名称
"version": "0.0.1", //组件版本
"private": false, //是否开源
"description": "百丽组件库", //组件描述
"main": "lib/belle-input.umd.min.js", //组件应用文件，打包后的文件 只要修改belle-input，改成 name字段的值。
"keyword": "belle-input", //关键词