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

  const next = () => {
    carouselRef.current.next()
  }

  function prev() {
    carouselRef.current.prev()
  }
  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" moreLink="/discover/album" />
      <AlbumContent>
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => prev()}
        ></div>
        <div className="album">
          <Carousel dots={false} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((item) => (
                    <AlbumCover key={item.id} info={item} />
                  ))}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={next}></div>
      </AlbumContent>
    </AlbumWrapper>
  )
})
