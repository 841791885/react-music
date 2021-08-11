import React, { memo } from 'react'
/**普通写法 
import { connect } from 'react-redux'
*/
import {
  RecommendWraper,
  Content,
  RecommendRight,
  RecommendLeft,
} from './style'

import TopBanner from './c-cps/top-banner'
import HotRecommend from './c-cps/hot-recommend'
import NewAlbum from './c-cps/new-album'
import RecommendRank from './c-cps/recommend-ranking'
import UserLogin from './c-cps/user-login'
import SettleSing from './c-cps/settle-singer'
import HotRadio from './c-cps/hot-radio'

function Recommend(props) {
  /*  
  普通写法
  const { getBanners } = props


 useEffect(() => {
    getBanners()
  }, [getBanners]) 
  */

  return (
    <RecommendWraper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRank />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSing />
          <HotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
}

/*  
普通写法 
const mapStatusToProps = (state) => ({
  topBanners: state.recommend.topBanners,
})
const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  },
})

export default connect(mapStatusToProps, mapDispatchToProps)(memo(Recommend)) 
*/

export default memo(Recommend)
