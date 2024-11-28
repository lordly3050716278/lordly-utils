const crypto = require('crypto')

/**
 * @author - lordly
 * 
 * 计算给定数据的 SHA-256 哈希值
 * 
 * 使用 Node.js 的 `crypto` 模块计算输入数据的 SHA-256 哈希值。
 * 返回的是一个 64 位的十六进制字符串表示。
 * 
 * @param { string | Buffer } data - 输入的数据，可以是字符串或 Buffer 对象，表示要计算哈希值的数据。
 * @returns { string } 返回输入数据的 SHA-256 哈希值，格式为 64 位的十六进制字符串。
 * 
 * @example
 * const hash = sha256('Hello, world!')
 * console.log(hash)  // 输出对应的 SHA-256 哈希值
 */
function sha256(data) {
    const hash = crypto.createHash('sha256')
    // 确保使用 UTF-8 编码
    hash.update(data, 'utf8')
    // 结果以十六进制字符串形式返回
    return hash.digest('hex')
}

module.exports = sha256