import request from '@/utils/request'

export function singer(params: Number) {
    return request.get(`/playlist/detail?id=${params}`)
}

export function banner() {
    return request.get('/banner?type=2')
}

export function detailHot() {
    return request.get('/search/hot/detail')
}

export function searchList(params: object) {
    return request.get('search', {
        params
    },)
}