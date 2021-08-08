import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { getAlbum } from '@/pages/discover/c-pages/recommend/store/actionCreators'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'

import { AlbumWrapper, AlbumContent } from './styles'
export default memo(function NewAlbum() {
  const dispatch = useDispatch()
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(['recommend', 'newAlbum']),
    }),
    shallowEqual
  )
  const carouselRef = useRef()
  useEffect(() => {
    // getNewAlbums().then((res) => console.log(res))
    dispatch(getAlbum())
  }, [dispatch])
  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <AlbumContent>
        <div className="arrow arrow-left sprite_02"></div>
        <div className="album">
          <Carousel dots={false} ref={carouselRef}>
            <div className="page">
              <AlbumCover />
            </div>
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02"></div>
      </AlbumContent>
    </AlbumWrapper>
  )
})
