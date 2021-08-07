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
