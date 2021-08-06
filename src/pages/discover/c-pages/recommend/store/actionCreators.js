import * as actionTypes from './constants'

import { getTopBanners } from '@/services/recommend.js'

const changTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => dispatch(changTopBannerAction(res)))
  }
}
