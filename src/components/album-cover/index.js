import React, { memo } from 'react'

import { AlbumCoverWarpper } from './style'
export default memo(function AlbumCover(props) {
  const { info = '', size = '100px', width = '118px', bgp = '-570px' } = props
  return (
    <AlbumCoverWarpper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img
          src="https://p3.music.126.net/Nl4mFBPeN4Lqtqn3KOAvXQ==/109951166171044898.jpg?param=100y100"
          alt="123123"
        />
        <a href="/abc" className="cover sprite_covor">
          123213s
        </a>
      </div>
      <div className="album-info">
        <div className="name">asdasasdasdda</div>
        <div className="artist">aklsjdklas</div>
      </div>
    </AlbumCoverWarpper>
  )
})
