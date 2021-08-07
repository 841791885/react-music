import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

function TopBanner() {
  const [currentIndex, setcurrentIndex] = useState(0)

  const { banners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners'),
      //优化写法
      banners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setcurrentIndex(to)
    }, 0)
  }, [])

  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <div
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></div>
          <div
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></div>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
