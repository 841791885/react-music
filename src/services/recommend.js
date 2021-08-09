import request from './axios'

export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

export function getHotRecommend() {
  return request({
    url: '/personalized',
  })
}

export function getNewAlbum(limit = 8) {
  return request({
    url: '/top/album',
    params: {
      limit,
    },
  })
}
export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: { idx },
  })
}
