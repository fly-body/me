<template>
  <div>
    <el-card>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <span class="title">{{ item.title }}</span>
          <el-divider></el-divider>
          <p v-html="item.content"></p>
          <template v-if="item.url">
            <p class="content">小案例：</p>
            <div class="case">
              <img v-for="(itemImg,indexImg) in item.url" :key="indexImg" :src="itemImg" alt="" />
              <br>
            </div>
          </template>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "什么是浮动流",
          content:
            "脱离了标准流，也就是不被块级元素所看到，但是会被文本类元素看到（它本身可以看到块级元素，块级元素看不到它）",
          url: [require("../../../assets/images/fontStudy/float-code.png"),require("../../../assets/images/fontStudy/float-show.png")],
        },
        {
          title: "浮动流产生的条件",
          content: "float: right/left",
        },
        {
          title: "怎么解决浮动流造成的影响",
          content: "给父元素增加属性 display: inline-block, 将其转化为行级块元素<br>给父元素增加属性overflow: hidden来消除浮动流<br>块级元素通过伪元素设置 clear 属性来消除浮动流",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
li{
  margin-bottom: 30px;
}
.title {
  font-size: 28px;

}
.content {
  text-indent: 2em;
}
img {
  margin-left: 57px;
}
</style>