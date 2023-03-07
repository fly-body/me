<template>
  <div class="container-index">
    <h1 class="title">欢迎来到body-fly的博客网站</h1>
    <div class="avatar">
      <img :src="gourl" />
    </div>
    <h2 class="title" style="font-size: 18px">
      让我们开始学习、总结之旅!!!
      <span style="margin-left: 24px" @click="goPage('/fontStudy')">开始</span>
    </h2>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Input",
  data() {
    return {
    };
  },
  mounted() {
  },
  computed:{
    ...mapState({
      gourl: (state) => state.common.url
    })
  },
  methods: {
    goPage(url){
      this.$router.push(url)
    }
  },
};
</script>

<style lang="less" scoped>
.container-index {
  .title {
    text-align: center;
    font-size: 28px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-top: 120px;
  }
  .avatar {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    margin: 15px auto 0;

    img {
      width: 300px;
      height: 300px;
    }
  }
}
</style>