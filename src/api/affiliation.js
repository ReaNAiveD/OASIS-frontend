import request from '@/utils/request'

export function basicInfo(id) {
    return request({
        url: '/aff/info',
        method: 'get',
        params: {
            id: id
        }
    })
}

export function getDocumentCountByField(id) {
    return request({
        url: '/aff/field/stat',
        method: 'get',
        params:{
            id: id
        }
    })
}

export function getDocumentCountByAuthor(id) {
    return request({
        url: '/aff/author/stat',
        method: 'get',
        params:{
            id: id
        }
    })
}

export function getAuthorActivation(id) {
    return request({
        url: '/aff/author/activation',
        method: 'get',
        params:{
            id: id
        }
    })
}
