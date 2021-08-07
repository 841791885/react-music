import * as actionTypes from './constants'

import { getTopBanners, getHotRecommend } from '@/services/recommend.js'

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
