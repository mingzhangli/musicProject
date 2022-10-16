import axios from 'axios'
import { Toast } from 'antd-mobile'

export function request() {
    const config = {
        baseURL: 'http://localhost:3000/',
        timeout: 5000
    }

    const instance = axios.create(config)

    instance.interceptors.request.use(
        config => {
            return config;
        },
        error => {
            // 对请求错误做些什么
            Toast.show({
                icon: 'fail',
                content: error,
            })
        },
    );

    instance.interceptors.response.use(
        config => {
            return config;
        },
        error => {
            // 对请求错误做些什么
            Toast.show({
                icon: 'fail',
                content: error,
            })
        },
    );
    return instance
}

export default request()