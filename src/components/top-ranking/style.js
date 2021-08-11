import styled from 'styled-components'

export const TopRankWrapper = styled.div`
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

  .list {
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      .rank {
        width: 35px;
        text-align: center;
        font-size: 16px;
      }
      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
        }
        .operate {
          display: flex;
          align-items: center;
          width: 82px;
          display: none;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
          }
          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }
          .favor {
            background-position: -297px -268px;
          }
        }
      }
      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32;
    justify-content: flex-end;
    a {
      color: #000;
    }
  }
`
