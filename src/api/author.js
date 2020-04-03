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

//作者在不同会议发表文章的情况
export function authorConference(id) {
    return request({
        url: '/author/conference/summary',
        method: 'get',
        params: {
            id: id
        }
    })
}

//	作者在不同研究方向发表文章的统计
export function authorFieldPaper(id) {
    return request({
        url: '/author/field/summary',
        method: 'get',
        params: {
            id: id
        }
    })
}

//作者关系图谱，点边关系
export function authorRelation(id) {
    return request({
        url: '/author/coworkers/map',
        method: 'get',
        params: {
            id: id
        }
    })
}
