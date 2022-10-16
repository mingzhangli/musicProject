import request from '@/utils/request'

export function singer(params: any) {
    return request.get(`/playlist/detail?id=${params}`)
}

export function banner(params: any) {
    return request.get('/banner?type=2')
}

export function detailHot() {
    return request.get('/search/hot/detail')
}