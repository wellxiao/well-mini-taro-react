/**
 * @author wes
 * @date 2021-01-29
 * @description 公共方法
 */

/**
 * @function
 * @param {*} pathUrl
 * @param {*} name
 * @description 获取url参数
 */
export const getQueryStrings = (pathUrl, name) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
    const pathUrls = decodeURIComponent(pathUrl)
    const r = pathUrls.slice(pathUrls.indexOf('?')).substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

/**
 * 格式化参数
 * @param obj
 * @returns {string}
 */
export const parseParams = (obj) => {
    let str = ''
    Object.keys(obj).map((key) => {
        if (obj[key]) {
            str += `&${key}=${obj[key]}`
        }
    })
    return str.substring(1)
}

/**
 * 深拷贝
 * @param {*} source
 */
export const deepCopy = (source) => {
    if (!source) {
        return source
    }
    const sourceCopy = source instanceof Array ? [] : {}
    /* eslint-disable */
    for (const item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
    }
    return sourceCopy
}

/**
 * 支付宝弹窗 toast
 */
export const toast = (msg) => {
    my.showToast({
        content: msg,
        icon: 'none',
        duration: 2000
    })
}
