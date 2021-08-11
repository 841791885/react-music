import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTopData } from '../../store/actionCreators'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'

import { RankWrapper } from './style'

export default memo(function RecommendRanking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopData(0))
    dispatch(getTopData(2))
    dispatch(getTopData(3))
  }, [dispatch])
  const { topUpList, topNewList, topOriginList } = useSelector((state) => ({
    topUpList: state.getIn(['recommend', 'topUpList']),
    topNewList: state.getIn(['recommend', 'topNewList']),
    topOriginList: state.getIn(['recommend', 'topOriginList']),
  }))
  return (
    <RankWrapper>
      <ThemeHeaderRcm title="榜单" moreLink="discover/ranking" />
      <div className="tops">
        <TopRanking info={topUpList} />
        <TopRanking info={topNewList} />
        <TopRanking info={topOriginList} />
      </div>
    </RankWrapper>
  )
})
