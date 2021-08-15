import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { getSettleSingers } from '../../store/actionCreators'
import ThemeHeaderSmall from '@/components/theme-header-small'
import { SetterSingerWrapper } from './style'

export default memo(function SettleSing() {
  const dispatch = useDispatch()
  const { settleSings } = useSelector(
    (state) => ({
      settleSings: state.getIn(['recommend', 'settleSings']),
    }),
    shallowEqual
  )
  console.log(settleSings)
  useEffect(() => {
    dispatch(getSettleSingers())
  }, [dispatch])
  return (
    <SetterSingerWrapper>
      <ThemeHeaderSmall />
      <div className="singer-list">
        {settleSings.slice(0, 5).map((item, index) => {
          return (
            <a href="/singer" className="item" key={item.id}>
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title ">
                  {item.alias.slice(0, 0).join('') || item.name}
                </div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSingerWrapper>
  )
})
