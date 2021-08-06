import React, { memo, useEffect } from 'react'
/**普通写法 
import { connect } from 'react-redux'
*/
import { RecommendWraper } from './style'

import TopBanner from './c-cps/TopBanner'

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
