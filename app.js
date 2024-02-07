const express = require('express')
const app = express()

// 导入路由模块
const router = require('./apiRouter')

// jwt
const jwt = require('jsonwebtoken')
// 跨域
const cors = require('cors')
app.use(cors())
// 解析 JSON 格式的请求体
app.use(express.json());
// 解析 URL 编码的请求体
app.use(express.urlencoded({ extended: true }));

// 把路由模块，注册到 app 上
app.use('/api', router)

app.listen(2010, () => {
  console.log('express server runing at http://127.0.0.1:2010')
})