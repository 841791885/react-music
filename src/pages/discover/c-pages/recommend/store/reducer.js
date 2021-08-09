// Map 是对象钱拷贝  FromJs对象深层拷贝
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],

  topUpList: {},
  topNewList: {},
  topOriginList: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      //替换redux值效率较低
      //return { ...state, topBanners: action.topBanners }

      //使用immutable
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.recommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    case actionTypes.CHANGE_UP_LIST:
      return state.set('topUpList', action.topUpList)
    case actionTypes.CHANGE_NEW_LIST:
      return state.set('topNewList', action.topNewList)
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set('topOriginList', action.topOriginList)
    default:
      return state
  }
}

export default reducer
