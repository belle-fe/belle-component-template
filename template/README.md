# {{ctype}} {{ name }}
## {{ description }}

## 项目构建
```
npm install
```

### 启动（支持热重载）
```
npm run dev
```

### 编译
```
npm run build
```

# 相关说明
1. 在packages 下的src 文件开发组件
2. 然后运行 npm run dev  看组件效果
3. package.json字段说明 
```"name": "{{name}}", //组件名称
"version": "1.0.0", //组件版本
"private": false, //是否开源
"description": "百丽组件库", //组件描述
"main": "lib/{{name}}.umd.min.js", //组件应用文件
"keyword": "{{name}}", //关键词
```