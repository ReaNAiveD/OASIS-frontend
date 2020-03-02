import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url:'/document/fetch',
        method: 'post',
        data: data
    })
}

export function getDocumentDetail(id) {
    return request({
        url: '/document/detail',
        method: 'get',
        params: {
            id: id
        }
    })
}
