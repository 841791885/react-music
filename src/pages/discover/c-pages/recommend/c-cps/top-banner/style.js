import styled from 'styled-components'

import downloadImg from '@/assets/img/download.png'
import btnImg from '@/assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;
  .banner {
    height: 270px;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 254px;
  height: 270px;
  background: url(${downloadImg});
`

export const BannerControl = styled.div`
  position: absolute;
  height: 63px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btnImg});
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
