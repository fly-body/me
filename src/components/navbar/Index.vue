<template>
  <div class="navBar">
    <ul class="menu">
      <li
        class="item"
        v-for="(item, index) in menuList"
        :key="index"
        @click="goPage(item.url)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'NavBar',
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('getMenuList');
  },
  computed: {
    ...mapState({
      menuList: state => state.common.menuList,
    }),
  },
  methods:{
    goPage(url) {
      this.$router.push(url);
    },
  }
};
</script>
<style lang="less" scoped>
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
</style>