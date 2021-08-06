// Map 是对象钱拷贝  FromJs对象深层拷贝
import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      //替换redux值效率较低
      //return { ...state, topBanners: action.topBanners }

      //使用immutable
      return state.set('topBanners', action.topBanners)
    default:
      return state
  }
}

export default reducer
