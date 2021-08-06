import React, { memo, useEffect } from 'react'

import { connect } from 'react-redux'

import { RecommendWraper } from './style'

import TopBanner from './c-cps/TopBanner'
import { getTopBannerAction } from './store/actionCreators'

function Recommend(props) {
  const { getBanners } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <RecommendWraper>
      <TopBanner />
    </RecommendWraper>
  )
}

const mapStatusToProps = (state) => ({ topBanners: state.recommend.topBanners })
const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  },
})

export default connect(mapStatusToProps, mapDispatchToProps)(memo(Recommend))
