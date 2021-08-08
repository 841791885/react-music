import Item from 'antd/lib/list/Item'
import React, { memo } from 'react'

import { getSizeImage, getCount } from '@/utils/format-utils'

import { ThemeCoverWrapper } from './style'

export default memo(function ThemeCover(props) {
  const { info } = props
  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="zhaopian" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>

            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-sourcw text-nowrap">
        {info?.copywriter || info.creator?.nickname || ''}
      </div>
    </ThemeCoverWrapper>
  )
})
