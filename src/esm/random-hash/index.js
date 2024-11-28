import sha256 from '../sha256'
const __timestamps = new Set()

/**
 * @author - lordly
 * 
 * 生成一个基于时间戳和随机数的唯一 SHA-256 哈希值（异步）
 * 
 * 该函数生成一个由当前时间戳和一个随机数组成的唯一字符串，并使用 SHA-256 算法对其进行哈希处理。
 * 该过程是异步的，因此返回的是一个 `Promise`，解析后是哈希值的十六进制字符串表示。
 * 为确保生成的哈希值唯一，函数会检查该时间戳+随机数组合是否已存在，如果存在则重新生成，直到唯一为止。
 * 为了避免在 1 分钟内重复生成相同的哈希值，使用了一个 Set 来存储最近生成的时间戳，并在 60 秒后自动清除。
 * 
 * @returns { Promise<string> } 返回一个 `Promise`，解析后的值是计算出的 SHA-256 哈希值，格式为 64 位的十六进制字符串。
 * 
 * @example
 * randomHash().then(hash => console.log(hash))  // 输出生成的唯一 SHA-256 哈希值
 * 
 * @note
 * - 使用了外部的异步 `sha256` 函数进行哈希计算。
 * - 该函数会确保返回的哈希值是唯一的，避免重复。
 * - 每个生成的时间戳会被存储在 `__timestamps` Set 中，并在 60 秒后自动删除，确保短时间内不生成相同的值。
 */
function randomHash() {
    let timestamp = 0
    do {
        const random = Math.floor(Math.random() * 10000)
        timestamp = `${Date.now()}${random}`
    } while (__timestamps.has(timestamp))

    __timestamps.add(timestamp)
    setTimeout(() => __timestamps.delete(timestamp), 60000)

    return sha256(timestamp)
}

export default randomHash