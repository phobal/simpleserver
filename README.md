### simpleserver 简单静态资源服务器

### 使用方法

1. 在服务器上 clone 该项目
``` bash
git clone https://github.com/phobal/simpleserver.git
```
2. 将打包好的静态资源文件放入到 dist 目录下
3. 全局安装 pm2,通过 [pm2](https://github.com/Unitech/pm2) 启动服务可以起到守护进程的目的
``` bash
npm install pm2 -g
```
4. 启动服务
``` bash
pm2 start start.js
```

### 自定义

默认设置主机 HOSTNAME 为 `0.0.0.0`  
默认设置端口号 PORT 为 `8090`  
默认设置静态资源存放的目录为 `dist`  

如果需要自定义可以在启动服务的时候重新设置环境变量，例如修改端口号
``` bash
PORT=8080 pm2 start start.js
```
需要跨平台的话可以使用 [cross-env](https://github.com/kentcdodds/cross-env)
``` bash
cross-env PORT=8080 pm2 start start.js
```
