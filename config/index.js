const path = require('path')

const config = {
    projectName: 'well-mini-taro-react',
    date: '2021-6-25',
    designWidth: 375,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [],
    defineConstants: {
        TARGET_ENV: JSON.stringify(process.env.TARGET_ENV)
    },
    copy: {
        patterns: [],
        options: {}
    },
    framework: 'react',
    mini: {
        postcss: {
            pxtransform: {
                enable: true,
                config: {
                    //  默认配置会对所有的 px 单位进行转换，有大写字母的 Px 或 PX 则会被忽略
                    onePxTransform: true, // 设置 1px 是否需要被转换
                    unitPrecision: 5, // REM 单位允许的小数位。
                    propList: ['*'], // 允许转换的属性。
                    selectorBlackList: [], // 黑名单里的选择器将会被忽略。
                    replace: true, // 直接替换而不是追加一条进行覆盖。
                    mediaQuery: false, // 允许媒体查询里的 px 单位转换
                    minPixelValue: 0 // 设置一个可被转换的最小 px 值
                }
            },
            url: {
                enable: true,
                config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        postcss: {
            autoprefixer: {
                enable: true,
                config: {}
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        },
        // 配置代理
        devServer: {
            host: 'localhost',
            port: 10086,
            proxy: {
                '/api/v1': {
                    target: 'http://localhost:8000', // 服务端地址
                    changeOrigin: true
                }
            }
        }
    },
    alias: {
        '@': path.resolve(__dirname, '..', 'src'),
        api: path.resolve(__dirname, '..', 'src/api'),
        assets: path.resolve(__dirname, '..', 'src/assets'),
        components: path.resolve(__dirname, '..', 'src/components'),
        styles: path.resolve(__dirname, '..', 'src/styles'),
        utils: path.resolve(__dirname, '..', 'src/utils'),
        store: path.resolve(__dirname, '..', 'src/store'),
        pages: path.resolve(__dirname, '..', 'src/pages'),
        service: path.resolve(__dirname, '..', 'src/service')
    }
}

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
