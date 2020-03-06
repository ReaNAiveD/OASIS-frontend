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

export function getDocumentDownloadTopList(num) {
    return request({
        url: '/top/document/max_download',
        method: 'get',
        params: {
            num: num
        }
    })
}
