import { v1 } from 'uuid'
import sha256 from '../sha256'

/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 生成一个基于时间戳和随机数的唯一 SHA-256 哈希值
 * 
 * @returns { Promise<string> } 返回生成的 SHA-256 哈希值，格式为 64 位的十六进制字符串。
 * 
 */
function randomHash() {
    return sha256(v1())
}

module.exports = randomHash