# lordly-utils
Common JS和ES Module的工具库

## 安装

```shell
npm i lordly-utils
```

## 使用

```javascript
// Common JS
const { randomHash } = require('lordly-utils')
const hash =randomHash()
console.log(hash)
```

```javascript
// ES Module
import { randomHash } from 'lordly-utils'

randomHash().then(hash => console.log(hash))
```

## 项目结构

```
lordly-utils/
├── src/                              # 源代码
|   ├── cjs/                          # CommonJS
|   |   ├── debounce/                 # 防抖函数
|   |   ├── random-hash/              # 随机hash
|   |   ├── sha256/                   # hash sha256 加密
|   |   └── throttle/                 # 节流函数
|   └── esm/                          # ESModule
|   |   ├── browser-fingerprint/      # 浏览器指纹
|   |   ├── debounce/                 # 防抖函数
|   |   ├── random-hash/              # 随机hash
|   |   ├── sha256/                   # hash sha256 加密
|   |   └── throttle/                 # 节流函数
├── package.json                      # 项目配置
└── README.md                         # 说明文档
```