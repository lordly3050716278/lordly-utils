/**
 * @author - lordly
 * 
 * 计算给定数据的 SHA-256 哈希值（异步）
 * 
 * 使用 Web Crypto API 的 `crypto.subtle.digest` 方法计算输入数据的 SHA-256 哈希值。
 * 该函数返回一个 Promise，解析后的结果是输入数据的 SHA-256 哈希值，以十六进制字符串表示。
 * 
 * @param { string } data - 输入的字符串数据，可以是任意 UTF-8 编码的文本。
 * @returns { Promise<string> } 返回一个 Promise 对象，解析后的值是计算出的 SHA-256 哈希值，格式为 64 位的十六进制字符串。
 * 
 * @example
 * sha256('Hello, world!').then(hash => console.log(hash))  // 输出对应的 SHA-256 哈希值
 * 
 * @note
 * 该方法使用 `TextEncoder` 对输入的字符串进行 UTF-8 编码，并返回一个基于 Web Crypto API 的异步操作结果。
 */
async function sha256(data) {
    // 默认 UTF-8 编码
    const encoder = new TextEncoder()
    // 转换为字节数组
    const dataArray = encoder.encode(data)
    // 计算哈希
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataArray)
    // 转换为字节数组
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    // 结果以十六进制字符串形式返回
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
}

export default sha256