import styled from 'styled-components'

export const ThemeCoverWrapper = styled.div`
  width: 140px;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 27px;
        color: #ccc;
        background-position: 0 -537px;
        .erji {
          display: inline-block;
          margin-right: 5px;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }
`
