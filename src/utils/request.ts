import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from './auth'


const request = axios.create({
    baseURL: '/',
    timeout: 10000
})

request.interceptors.request.use((config: any) => {

    if (getToken()) {
        config.headers['Authentication'] = getToken()
    }
    return config
})

const errorMessage:any = {
    200: "请求成功",
    401: "暂未登录或token已过期",
    404: "接口路径有误",
    500: "请求失败，请稍候重试",
}


request.interceptors.response.use((response) => {
    const { data } = response

    if (data.code === 200) {
        return data
    }

    if (data.code !== 200) {
        ElMessage.error( errorMessage[data.code] )
        return Promise.reject(data)
    }

}, (err) => {
    return Promise.reject(err)
})