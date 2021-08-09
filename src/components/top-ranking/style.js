import styled from 'styled-components'

export const RankWrapper = styled.div`
  flex: 1;

  .header {
    display: flex;
    height: 100px;
    margin: 20px 0 0 20px;
    .image {
      position: relative;
      height: 80px;
      width: 80px;

      img {
        width: 80px;
        height: 80px;
      }
    }
    .info {
      margin: 5px 0 0 10px;
      a {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
      }
      .favor {
        background-position: -300px -205px;
      }
    }
  }
`
