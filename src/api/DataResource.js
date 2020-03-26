import request from '@/utils/request'
export const getDataResourceApi = () => {
    return new Promise((resolve, reject) => {
        request({
            url: '/dataResourceList',
            method: 'get',
        }).then(res => {
            resolve(res)
        }).catch(e => {
            reject(e)
        })
    })
}