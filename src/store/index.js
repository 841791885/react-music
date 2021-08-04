/**
 * import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

//让控制台看得到redux助手
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//使用thunk中间件可以让dispach提交函数 可以做到先发请求再修改dispach
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
*/
