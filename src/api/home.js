import request from '@/utils/request'

export function getAuthorTOPList(num) {
    return request({
        url: '/top/author',
        method: 'get',
        params: {
            num: num
        }
    })
}