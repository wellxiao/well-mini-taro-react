/**
 * @author wellxiao
 * @date 2021-0625
 * @description 公共资源配置
 */

/**
 *  @description 项目配置
 */

/*eslint-disable */
const ENV = process.env.NODE_ENV
console.log(ENV)
let baseURL
switch (TARGET_ENV) {
    case 'dev':
        baseURL = 'https://pos-b.hupun.com/merp.h5/api'
        break
    case 'test':
        baseURL = 'http://nr-hw.hupun.com'
        break
    case 'prod':
        baseURL = 'https://pos.hupun.com/merp.h5/api'
        break
    default:
        baseURL = 'https://pos-b.hupun.com/merp.h5/api'
        break
}

console.log(`当前环境为:${!TARGET_ENV ? '打包中...' : TARGET_ENV}`)
console.log('接口地址：' + baseURL)

module.exports = {
    baseURL,
    // 1为小程序
    appId: 1
}
