import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRecommend } from '@/pages/discover/c-pages/recommend/store/actionCreators'

import { HotRecommendWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import ThemeCover from '@/components/theme-cover'
export default memo(function HotRecommend() {
  const { recommends } = useSelector(
    (state) => ({
      recommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])
  console.log(recommends)
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <ThemeCover />
      <h2>hot recommend</h2>
    </HotRecommendWrapper>
  )
})
