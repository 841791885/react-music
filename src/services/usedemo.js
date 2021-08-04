import request from './axios'

export function getTopList() {
  return request({
    url: '/toplist',
  })
}

export function requestDemo(id) {
  return request({
    //默认url后面多后缀自行修改
    url: '/simi/playlist',
    params: {
      id,
    },
  })
}
