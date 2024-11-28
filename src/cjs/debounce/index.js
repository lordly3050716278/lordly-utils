/**
 * @author - lordly
 * 
 * 防抖函数（Debounce Function）
 * 
 * 创建一个防抖函数，在连续调用时，只有在指定的等待时间后函数才会被执行。
 * 如果在等待时间内再次调用该函数，之前的调用会被取消，重新开始计时。
 * 适用于避免频繁执行某些函数，例如滚动、输入等事件的处理。
 * 
 * @param { Function } fn - 需要防抖的函数，防抖后只会在 `wait` 毫秒后执行一次。
 * @param { number } wait - 防抖的延迟时间，单位为毫秒。
 * @returns { Function } 返回一个新的防抖函数，调用该函数时会延迟执行 `fn`。
 * 
 * @example
 * const debouncedFn = debounce(() => console.log('函数执行'), 2000)
 * 
 * // 连续调用 debouncedFn 会在 2 秒内只执行一次
 * debouncedFn()
 * debouncedFn()
 * debouncedFn()
 */
function debounce(fn, wait) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.apply(this, args), wait)
    }
}

module.exports = debounce