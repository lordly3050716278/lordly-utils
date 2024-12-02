/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 节流函数（Throttle Function）
 * 
 * @param { Function } fn - 需要节流的函数，节流后会按固定的间隔执行。
 * @param { number } duration - 节流的时间间隔，单位为毫秒。
 * @returns { Function } 返回一个新的节流函数，调用该函数时会在指定的间隔时间内执行一次 `fn`。
 * 
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