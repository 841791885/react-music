import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
} from '@/services/recommend.js'
import { getArtistList } from '@/services/artist.js'

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

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist,
})

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist,
})

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist,
})

export const getTopData = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewListAction(res))
          break
        case 2:
          dispatch(changeOriginListAction(res))
          break
        case 3:
          dispatch(changeUpListAction(res))
          break
        default:
          console.log('其他数据处理')
      }
    })
  }
}

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists,
})

export const getSettleSingers = () => {
  return (dispath) => {
    getArtistList(-1, 5, 5001).then((res) => {
      dispath(changeSettleSingsAction(res))
    })
  }
}
