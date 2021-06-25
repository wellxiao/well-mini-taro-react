/**
 * @author wellxiao
 * @date 2021-06-25
 * @description 示例模块
 */

import { request } from 'utils/http'
import { exampleURL } from 'api/common'
import { toast } from 'utils/methods'

/**
 * @description 示例service
 * @type GET
 */
export const exampleService = async (payLoad) => {
    try {
        const { data } = await request({
            url: exampleURL,
            data: payLoad,
            methods: 'get'
        })
        return Promise.resolve(data)
    } catch (e) {
        toast(e.message)
        return Promise.reject(e)
    }
}
