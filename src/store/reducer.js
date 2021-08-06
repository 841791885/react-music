//redux的combinereducers
import { combineReducers } from 'redux-immutable'

import { reducer as recommend } from '@/pages/discover/c-pages/recommend/store'

export default combineReducers({
  //可以放多个reducer最后会合并一起导出为一个
  recommend,
})
