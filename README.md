# oasis_frontend

OASIS的前端项目



## Project setup

项目初始化，在命令行中键入如下指令，安装项目所使用的node依赖
```
yarn install
```

### Compiles and hot-reloads for development

开发过程中，若想查看效果，可以在命令行中键入如下指令，node会在8080端口提供浏览的页面，由于建立的连接是websocket的，不需要重启服务在代码上的任何修改都会立即体现在页面上。
```
yarn serve
```

### Compiles and minifies for production

如果需要构建为静态页面，键入如下指令
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Vue.js GUI
可以在8000端口开启一个server，查看vue的配置
```
vue ui
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
