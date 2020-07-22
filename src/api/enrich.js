import request from '@/utils/request'

export function submitEnrichData(data) {
    return request({
        url: "/enrich/submit",
        method: "post",
        headers: {"ContentType": "multipart/form-data"},
        data: data
    })
}
