import axios from 'axios';

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : '填写真正的后端地址',
    timeout: 15000,
    headers: { 'Content-Type': 'application/xwww-form-urlencoded' },
    withCredentials: true
})

service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        return Promise.resolve(response.data)
    },
    error => {
        // Message.error({
        //     message: error
        // })
        console.log('err ' + error) // for debug
        return Promise.reject(error)
    }
)

export default service