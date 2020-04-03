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

//获取活跃度最高的机构
export function getAffiliationActiveTopList(num) {
    return request({
        url: '/top/affiliation',
        method: 'get',
        params: {
            num: num
        }
    })
}
