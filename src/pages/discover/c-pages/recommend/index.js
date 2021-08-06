import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
/**普通写法 
import { connect } from 'react-redux'
*/
import { RecommendWraper } from './style'
import { getTopBannerAction } from './store/actionCreators'

import TopBanner from './c-cps/TopBanner'

function Recommend(props) {
  /*  
  普通写法
  const { getBanners } = props


 useEffect(() => {
    getBanners()
  }, [getBanners]) 
  */

  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners'),
      //优化写法
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <RecommendWraper>
      <TopBanner />
      {topBanners.length}
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
