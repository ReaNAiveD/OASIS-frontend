import request from '@/utils/request'

export function fetchList(param) {
    return request({
        url:'/document/list',
        method: 'get',
        params: param
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
