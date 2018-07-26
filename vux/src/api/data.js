import request from '@/utils/request'

export function fetchQuestionList (query) {
  const data = {}
  return request({
      url: '/api/json/getQuestions',
      method: 'post',
      data
    })
}

export function generalImData (date) {
  return request({
      url: '/spring/imdata/generalImData',
      method: 'get',
      params: date
    })
}

export function getImDataTrend (time_Type, data_Type) {
  debugger
  return request({
      url: '/spring/imdata/getImDataTrend',
      method: 'get',
      params: { timeLimitType: time_Type, dataType: data_Type }
    })
}

export function getImDataTrendAll (time_Type, data_Type) {
  return request({
        // url: '/spring/imdata/getImDataTrendAll',
      url: '/spring/imdata/getImDataTrendAll',
      method: 'get',
      params: { 'timeLimitType': time_Type, 'datasType': data_Type }
        // params: time_Type
    })
}

export function getMsgDataInfo (date) {
  const data = {
      startDate: date
    }
  return request({
      url: '/spring/imdata/getMsgDataInfo',
      method: 'post',
      data
    })
}
export function getMsgDataInfoV2 (query) {
  if (query === undefined) {
      return
    }
  const data = {
      biztype: query.biztype,
      dateType: query.dateType,
      endDate: query.endDate,
      platfrom: query.platfrom,
      startDate: query.startDate,
      version: query.version,
      datasType: query.datasType
    }

  return request({
      url: '/spring/imdata/getMsgDataInfo',
      method: 'post',
      data
    })
}
export function getSelectItems () {
  return request({
      url: '/spring/imdata/getSelectItems',
      method: 'get'
    })
}

// export function msgTrend(query) {
//     if (query === undefined) {
//         return
//     }
//     const data = {
//         biztype: query.biztype,
//         dateType: query.dateType,
//         endDate: query.endDate,
//         platfrom: query.platfrom,
//         startDate: query.startDate,
//         version: query.version,
//         datasType: query.datasType
//     }

//     return request({
//         // url: '/spring/imdata/msgTrend',
//         url: '/spring/imdata/getImDataTrendAllV2',
//         method: 'post',
//         data
//     })
// }

export function getImDataTrendAllV2 (query) {
  if (query === undefined) {
      return
    }
  const data = {
      biztype: query.biztype,
      biztypes: query.biztypes,
      dateType: query.dateType,
      endDate: query.endDate,
      platfrom: query.platfrom,
      startDate: query.startDate,
      version: query.version,
      datasType: query.datasType
    }

  return request({
        // url: '/spring/imdata/msgTrendAll',
      url: '/spring/imdata/getImDataTrendAllV2',
      method: 'post',
      data
    })
}
export function getPushDataTrendAll (query) {
  if (query === undefined) {
      return
    }
  const data = {
      dateType: query.dateType,
      endDate: query.endDate,
      startDate: query.startDate,
      vendors: query.vendors,
      datasType: query.datasType
    }

  return request({
        // url: '/spring/imdata/msgTrendAll',
      url: '/spring/imdata/getPushDataTrendAll',
      method: 'post',
      data
    })
}
export function sessionStatistics (query) {
  if (query === undefined) {
      return
    }
  const data = {
      biztype: query.biztype,
      biztypes: query.biztypes,
      dateType: query.dateType,
      endDate: query.endDate,
      platfrom: query.platfrom,
      startDate: query.startDate,
      version: query.version,
      datasType: 'sessionStatistics'
    }

  return request({
      url: '/spring/imdata/sessionStatistics',
      method: 'post',
      data
    })
}

export function brandStatistics (query) {
  if (query === undefined) {
      return
    }
  const data = {
      biztype: query.biztype,
      biztypes: query.biztypes,
      dateType: query.dateType,
      endDate: query.endDate,
      platfrom: query.platfrom,
      startDate: query.startDate,
      version: query.version,
      datasType: 'brandStatistics'
    }

  return request({
      url: '/spring/imdata/brandStatistics',
      method: 'post',
      data
    })
}

export function userStatistics (query) {
  if (query === undefined) {
      return
    }
  const data = {
      biztype: query.biztype,
      dateType: query.dateType,
      endDate: query.endDate,
      platfrom: query.platfrom,
      startDate: query.startDate,
      version: query.version,
      datasType: 'userStatistics'
    }

  return request({
      url: '/spring/imdata/userStatistics',
      method: 'post',
      data
    })
}
// export function fetchList(query) {
//     const data = {
//         'page': query.page,
//         'limit': query.limit,
//         'status': query.status,
//         'sort': query.sort,
//         'queryLike': query.queryLike,
//         'postValidDate': query.postValidDate
//     }
//     return request({
//         url: '/getArticleList',
//         method: 'post',
//         data
//     })
// }

// export function updateSchedule(updatedata) {
//     const data = {
//         'id': updatedata.id,
//         'publishDate': updatedata.publishDate
//     }
//     return request({
//         url: '/setPostSchedule',
//         method: 'post',
//         data
//     })
// }
// export function updateScheduleOrder(updatedata) {
//     const data = {
//         'id': updatedata.id,
//         'switchPostId': updatedata.switchPostId,
//         'postOrderChangeType': updatedata.postOrderChangeType
//     }
//     return request({
//         url: '/updateScheduleOrder',
//         method: 'post',
//         data
//     })
// }

// export function removeschedule(updatedata) {
//     const data = {
//         'id': updatedata.id
//     }
//     return request({
//         url: '/removePostSchedule',
//         method: 'post',
//         data
//     })
// }

// export function fetchArticleDetailList(query) {
//     const data = {
//         'postId': query.postId
//     }
//     return request({
//         url: '/getPostDetail',
//         method: 'post',
//         data
//     })
// }

// export function fetchTemplateList(query) {
//     return request({
//         url: '/article/templateList',
//         method: 'get',
//         params: query
//     })
// }

// export function fetchArticle() {
//     return request({
//         url: '/article/detail',
//         method: 'get'
//     })
// }

// export function fetchPv(pv) {
//     return request({
//         url: '/article/pv',
//         method: 'get',
//         params: { pv }
//     })
// }

// export function createArticle(data) {
//     return request({
//         url: '/article/create',
//         method: 'post',
//         data
//     })
// }

// export function updatePost(updatedata) {
//     const data = {
//         'data': updatedata
//     }
//     return request({
//         url: '/updatePost',
//         method: 'post',
//         data
//     })
// }

// export function updateArticle(updatedata, postId) {
//     const data = {
//         'articleBodyTypeList': updatedata,
//         'postId': postId
//     }
//     return request({
//         url: '/updatePostDetail',
//         method: 'post',
//         data
//     })
// }

// export function getParseProduct(data) {
//     // const data = {
//     //   'id': updatedata.id,
//     //   'switchPostId': updatedata.switchPostId,
//     //   'postOrderChangeType': updatedata.postOrderChangeType
//     // }
//     return request({
//         url: '/getParseProduct',
//         method: 'post',
//         data
//     })
// }
