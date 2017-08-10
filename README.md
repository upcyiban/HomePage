# 易班门户网站

## 用户前端

前端需要从由服务器产生的json文件中获取数据来渲染页面

config/Conf.js


```javascript
let DATA_PATH_CONF={
        dev:'http://localhost:8086/backend/data_copy.json',//开发环境
        prod:'/yb-data/data.json'//生产环境
    }
```

## 后台前端

```javascript
const BACKEND_ROOT_URL     = 'http://localhost:8080'//后端地址
const BACKEND_LOGIN        = `${BACKEND_ROOT_URL}/homepage/login`//后端登陆地址
const BACKEND_LOGIN_CHECK  = `${BACKEND_ROOT_URL}/homepage/login/check`//后端登陆检查地址
const BACKEND_IMAGE_UPLOAD = `${BACKEND_ROOT_URL}/homepage/image`//后端图片上传地址
const BACKEND_DATA_SUBMIT  = `${BACKEND_ROOT_URL}/homepage/data`//后端数据上传地址
const DATA_PATH = 'data_copy.json'//数据json
```
