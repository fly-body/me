<template>
  <el-card>
    <p>瀑布流效果图</p>
    <div class="container-water-fall">
      <waterfall :col="col" :data="data">
        <template>
          <div class="cell-item" v-for="(item, index) in 9" :key="index">
            <img
              :lazy-src="'https://picsum.photos/360/460?random=' + index"
              alt="加载错误"
            />
            <div class="item-body">
              <div class="item-desc">
                <div class="item-avatar"></div>
              </div>
              <div class="item-footer">
                <div class="foot-left">
                  <div class="name">用户</div>
                </div>
                <div class="like">
                  <div class="like-total">收藏</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
    </div>
    <p style="margin-top: 20px">代码实现</p>
    <pre style="background-color:black;color:white;">{{ coding }}</pre>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      col: 5,
      coding: `<div class="container-water-fall">
        <waterfall :col="col" :data="data">
          <template>
            <div class="cell-item" v-for="(item, index) in 9" :key="index">
              <img
                :lazy-src="'https://picsum.photos/360/460?random=' + index"
                alt="加载错误"
              />
              <div class="item-body">
                <div class="item-desc">
                  <div class="item-avatar"></div>
                </div>
                <div class="item-footer">
                  <div class="foot-left">
                    <div class="name">用户</div>
                  </div>
                  <div class="like">
                    <div class="like-total">收藏</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
      </div>

      // js
      data(){
        return {
          data: [],
          col: 5,
        }
      }

      // 样式
      <style lang="less" scoped>
        .item-body {
          margin: 9px;
          .item-desc {
            text-align: left;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
            .item-avatar {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #bff;
            }
          }
          .item-footer {
            display: flex;
            justify-content: space-between;
            .footer-left {
              display: flex;
              align-items: center;
              font-family: SF Pro Display;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 14px;
              color: rgba(0, 0, 0, 0.6);
            }
            .like {
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: SF Pro Display;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 14px;
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
        .cell-item {
          width: 100%;
          margin-bottom: 6px;
          background: #ffffff;
          border: 2px solid #f0f0f0;
          border-radius: 6px;
          overflow: hidden;
          box-sizing: border-box;
          img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
        </style>
      `,
    };
  },
};
</script>

<style lang="less" scoped>
.item-body {
  margin: 9px;
  .item-desc {
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    .item-avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #bff;
    }
  }
  .item-footer {
    display: flex;
    justify-content: space-between;
    .footer-left {
      display: flex;
      align-items: center;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
    .like {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: SF Pro Display;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
}
.cell-item {
  width: 100%;
  margin-bottom: 6px;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>