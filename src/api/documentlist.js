import request from '@/utils/request'

export function fetchList(param) {
    return request({
        url:'/document/list',
        method: 'get',
        params: param
    })
}
