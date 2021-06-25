/**
 * @author wellxiao
 * @date 2021-06-25
 * @description  数据状态管理
 */

import redux from 'redux'
import react from 'react'

react.use(redux)

// store 模块动态引入 注意文件格式 好处就是不用每个模块都要import引入了
const modulesFiles = require.context('./', true, /\index.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    return { ...modules, ...value.default }
}, {})

const debug = process.env.NODE_ENV !== 'production'

// 有错误
export default new redux({
    modules,
    strict: debug
})
