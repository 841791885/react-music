import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
} from '@/services/recommend.js'

const changTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => dispatch(changTopBannerAction(res)))
  }
}

const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  recommends: res.result,
})

export const getRecommend = () => {
  return (dispatch) => {
    getHotRecommend().then((res) => dispatch(changeRecommendAction(res)))
  }
}

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums,
})

export const getAlbum = () => {
  return (dispatch) => {
    getNewAlbum(10).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}
