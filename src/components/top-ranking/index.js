import React, { memo } from 'react'

import { RankWrapper } from './style'
export default memo(function TopRanking() {
  return (
    <RankWrapper>
      <div className="header">
        <div className="image">
          <img
            src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
            alt=""
          />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">asdasdas</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list"></div>
      <div className="footer"></div>
    </RankWrapper>
  )
})
