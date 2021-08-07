import React, { memo } from 'react'

import { ThemeCoverWrapper } from './style'

export default memo(function ThemeCover() {
  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img
          src="https://p2.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?param=140y140"
          alt="zhaopian"
        />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              131万
            </span>

            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        阿斯科利大家阿莱克斯金德拉克时间跟辣椒似的离开asides深爱的爱上大师傅爱上
      </div>
      <div className="cover-sourcw text-nowrap">
        撒打算打算地方大声大声的阿斯顿爱上打算的
      </div>
    </ThemeCoverWrapper>
  )
})
