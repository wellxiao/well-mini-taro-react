/**
 * @function
 * @description loading
 */
export const wxShowLoading = (options = {}) => {
    const { content = '加载中', delay = 0 } = options
    return new Promise((resolve, reject) => {
        wx.showLoading({
            content,
            delay,
            success: (res) => {
                resolve(res)
            },
            fail(res) {
                reject(res)
            }
        })
    })
}

/**
 * @function
 * @description 扫码
 */
export const wxScanCode = (options = {}) => {
    const { scanType = ['qrCode', 'barCode'] } = options
    return new Promise((resolve, reject) => {
        wx.scanCode({
            scanType,
            success: (res) => {
                resolve(res)
            },
            fail(res) {
                reject(res)
            }
        })
    })
}

/**
 * @description 校验用户当前session_key是否有效
 */
export const wxCheckSession = () =>
    new Promise((resolve, reject) => {
        wx.checkSession({
            success() {
                resolve()
            },
            fail() {
                reject()
            }
        })
    })

/**
 * @function
 * @param {*} options
 * @description 获取支付宝小程序 授权码
 */
export const wxLogin = (options = {}) => {
    const { timeout = 16000 } = options
    return new Promise((resolve, reject) => {
        wx.getAuthCode({
            timeout,
            success(res) {
                resolve(res.authCode)
            },
            fail(res) {
                reject(res.authCode)
            }
        })
    })
}

// 用户信息授权返回的用户基础信息
export const userinfoAuth = () => {
    return new wx.getAuthCode({
        scopes: 'auth_user',
        success(res) {
            resolve(res)
        },
        fail(res) {
            reject(res)
        }
    })
}
