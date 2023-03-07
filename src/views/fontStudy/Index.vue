<template>
  <div class="font-stydy container">
    <h1 class="title">前端学习</h1>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <menu-list :id="id" />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import MenuList from "@/components/menulist/Index.vue";
export default {
  data() {
    return {
      id: 1,
    };
  },
  components: {
    MenuList,
  },
};
</script>
<style lang="less" scoped>
.el-main{
  background-color: #eee;
}
.el-aside{
  height: 900px;
}
.font-stydy {
  .title {
    text-align: center;
  }
}
</style>