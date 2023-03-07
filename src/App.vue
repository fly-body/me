<template>
  <div id="app">
    <NavBar />
    <div class="box"></div>
    <router-view/>
  </div>
</template>
<script>
</script>

<style lang="less" scoped>
#app{
  min-height: 937px;
  background-color: pink;
}
.box{
  clear: both;
}
</style>
