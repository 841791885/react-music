import styled from 'styled-components'

export const AlbumCoverWarpper = styled.div`
  .album-image {
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.size};
    overflow: hidden;
    margin-top: 15px;
    img {
      height: ${(props) => props.size};
      width: ${(props) => props.size};
    }
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      white-space: no-wrap;
      text-overflow: ellipsis;
      overflow: hiddent;
    }
    .artist {
      color: #666;
    }
  }
`
