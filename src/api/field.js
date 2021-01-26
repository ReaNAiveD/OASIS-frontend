import request from '@/utils/request'

// 领域详情
export function get_field_detail (id) {
  return request({
    url: '/field/detail',
    method: 'get',
    params: {
      id: id
    }
  })
}

// 获取热门领域
export function get_hot_field() {
  return request({
    url: '/field/hot',
    method: 'get',
  })
}

// 领域总论文数各年份统计
export function get_doc_publication(id) {
  return request({
    url: '/field/publication/year',
    method: 'get',
    params: {
      id: id
    }
  })
}

// 领域下作者活跃度统计
export function get_author_activation(id) {
  return request({
    url: '/field/author/activation',
    method: 'get',
    params: {
      id: id
    }
  })
}

// 领域下机构活跃度统计
export function get_aff_activation(id) {
  return request({
    url: '/field/aff/activation',
    method: 'get',
    params: {
      id: id
    }
  })
}

// 领域下的文章
export function get_field_document(id,pagesize,page) {
  return request({
    url: '/field/document',
    method: 'get',
    params: {
      id: id,
      pageSize:pagesize,
      page:page
    }
  })
}




