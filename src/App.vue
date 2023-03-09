<template>
  <div id="app">
    <NavBar />
    <div class="box-app"></div>
    <router-view/>
  </div>
</template>
<script>
</script>

<style lang="less">
#app{
  min-height: 937px;
  background-color: pink;
}
.box-app{
  clear: both;
}
.el-card{
  min-height: 500px;
}
</style>
