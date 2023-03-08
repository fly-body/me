<template>
  <div>
    <el-card>
      <div class="box-card">
        <el-card
          class="box-card-item"
          v-for="(item, index) in contentList"
          :key="index"
        >
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
          </div>
          <div
            v-for="(itemc, indexc) in item.content"
            :key="indexc"
            class="content"
          >
            {{ itemc }}
          </div>
        </el-card>
      </div>
      <el-divider></el-divider>
      <p class="content">案例</p>
      <div class="case" v-for="itemcase in caseList" :key="itemcase.id">
        <p>{{itemcase.title1}}</p>
        <img v-for="itemcaseImg in itemcase.img1s" :key="itemcaseImg.id" :src="itemcaseImg.url" alt="">
        <p>{{itemcase.title2}}</p>
        <img v-for="itemcaseImg2 in itemcase.img2s" :key="itemcaseImg2.id" :src="itemcaseImg2.url" alt="">
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: [
        {
          title: "什么是BFC?",
          content: [
            "1.块级格式化上下文",
            "2.每一个BFC区域只包括其子元素，不包括其子元素的子元素。",
            "3.每一个BFC区域都是独立隔绝的,互不影响",
          ],
        },
        {
          title: "BFC产生条件",
          content: [
            "1.设置浮动，不包括none",
            "2.设置定位，absoulte或者fixed",
            "3.行内块显示模式，inline-block",
            "4.设置overflow，即hidden，auto，scroll",
            "弹性布局，flex",
          ],
        },
        {
          title: "BFC作用",
          content: [
            "1.解决margin塌陷问题",
            "2.清除浮动",
            "3.阻止元素被浮动元素覆盖",
          ],
        },
        {
          title: "清除BFC",
          content: [
            "1.空 div 的样式添加 clear：both。",
            "2.为父元素添加 overflow 属性",
            "3.使用 after 伪元素清除浮动",
            "4.使用 before 和 after 双伪元素清除浮动",
          ],
        },
      ],
      caseList: [
        {
          id: 1,
          title1: '1.margin塌陷',
          title2: '解决办法',
          img1s: [
            {
              url:require('../../../assets/images/fontStudy/bfc1-1.png'),
              id: 11
            },
            {
              url:require('../../../assets/images/fontStudy/bfc1-2.png'),
              id: 12
            }
          ],
          img2s:[
            {
              url:require('../../../assets/images/fontStudy/bfc2-1.png'),
              id: 21
            },
            {
              url:require('../../../assets/images/fontStudy/bfc2-2.png'),
              id: 22
            }
          ]
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .box-card-item {
    width: 240px;
    .content {
      background-color: #eee;
    }
  }
}
</style>