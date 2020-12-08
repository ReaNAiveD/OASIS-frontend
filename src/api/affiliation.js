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

export function getDocList(id, page, pageSize) {
    return request({
        url: '/aff/document',
        method: 'get',
        params: {
            id: id,
            page: page | 0,
            pageSize: pageSize
        }
    })
}

export function getCooperate(id) {
    return request({
        url: '/aff/cooperate/aff',
        method: 'get',
        params: {
            id: id,
        }
    })
}

export function getAll(order="descent", orderBy="documentCount", page=0, pageSize=10) {
    return request({
        url: '/aff/list',
        method: 'post',
        data: {
            "direction": order,
            "orderBy": orderBy,//取值有documentCount，activation，authorCount，name。不写则默认documentCount
            "page": page,
            "pageSize": pageSize
        }
    })
}
