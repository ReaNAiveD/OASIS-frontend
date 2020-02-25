import request from '@/utils/request'

export function detail(id) {
    return request({
        url: '/author/detail',
        method: 'get',
        params: {
            id: id
        }
    })
}
