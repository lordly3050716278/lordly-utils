/**
 * @author - lordly
 * 
 * 节流函数（Throttle Function）
 * 
 * 创建一个节流函数，确保函数在指定时间内只能执行一次。
 * 如果函数在该时间段内被多次调用，只有第一次调用会执行，后续调用会被忽略，直到时间窗口结束。
 * 适用于限制频繁触发的操作，如滚动、窗口调整大小等。
 * 
 * @param { Function } fn - 需要节流的函数，节流后会按固定的间隔执行。
 * @param { number } duration - 节流的时间间隔，单位为毫秒。
 * @returns { Function } 返回一个新的节流函数，调用该函数时会在指定的间隔时间内执行一次 `fn`。
 * 
 * @example
 * const throttledFn = throttle(() => console.log('函数执行'), 2000)
 * 
 * // 连续调用 throttledFn 会每隔 2 秒执行一次
 * throttledFn()
 * throttledFn()
 * throttledFn()
 */
function throttle(fn, duration) {
    let lastTime = 0
    return function (...args) {
        const now = Date.now()
        if (now - lastTime >= duration) {
            lastTime = now
            fn.apply(this, args)
        }
    }
}

module.exports = throttle