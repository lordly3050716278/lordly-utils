/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 防抖函数（Debounce Function）
 * 
 * @param { Function } fn - 需要防抖的函数，防抖后只会在 `wait` 毫秒后执行一次。
 * @param { number } wait - 防抖的延迟时间，单位为毫秒。
 * @returns { Function } 返回一个新的防抖函数，调用该函数时会延迟执行 `fn`。
 * 
 */
function debounce(fn, wait) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), wait)
    }
}

export default debounce