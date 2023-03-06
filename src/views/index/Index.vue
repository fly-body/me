<template>
  <div class="container">
    <div class="navBar">
      <ul class="menu">
        <li class="item" v-for="(item, index) in menuList" :key="index" @click="goPage(item.url)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <h1 class="title">欢迎来到body-fly的博客网站</h1>
    <div class="avatar">
      <img :src="url">
    </div>
    <h2 class="title" style="font-size:18px;">让我们开始学习、总结之旅!!! <span style="margin-left:24px;" @click="goPage('/fontStudy')">开始</span></h2>
  </div>
</template>

<script>
import {getIndexDate} from '../../network/index'
export default {
  name: "Input",
  data() {
    return {
      menuList: [],
      url:''
    };
  },
  mounted(){
    this.getIndexDate();
  },
  methods:{
    async getIndexDate(){
      let result = await getIndexDate();
      this.menuList = result.data.menuList
      this.url = result.data.url
    },
    goPage(url){
      this.$router.push(url)
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .navBar {
    float: right;
    background-color: #eee;
    .menu {
      display: flex;
      flex-direction: row;
      .item {
        height: 20px;
        line-height: 20px;
        margin-right: 15px;
      }
    }
  }
  .title {
    clear: both;
    text-align: center;
    font-size: 28px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-top: 120px;
  }
  .avatar{
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    margin: 15px auto 0;

    img{
      width: 300px;
      height: 300px;
    }
  }
}
</style>