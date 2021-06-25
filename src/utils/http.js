import { baseURL } from '@/conifg'
import { wxShowLoading } from 'service/wxService'
/**
 * @function Http
 */
export const request = ({ url, data, method = 'GET', header = {}, responseType, dataType = 'json', complete, loading = false }) => {
    const token = wx.getStorageSync('token')
    if (loading) wxShowLoading()
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseURL}${url}`,
            data,
            header: { token, ...header }, // 合并传递进来的配置
            method,
            responseType,
            dataType,
            success(res) {
                const { status, data } = res
                resolve({ status, data })
            },
            fail(e) {
                const { data = {} } = e
                const { msg = '服务器异常，请重试' } = data
                reject({ message: msg, statusCode: 600 })
            },
            complete() {
                if (loading) wx.hideLoading()
                /* eslint-disable no-unused-expressions */
                typeof complete === 'function' && complete()
            }
        })
    })
}
