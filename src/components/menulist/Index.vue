<template>
  <div>
    <el-menu :unique-opened="true" :router="true">
      <el-submenu
        :index="item.id.toString()"
        v-for="(item, index) in menuList"
        :key="index"
      >
        <template slot="title">
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(item1, index1) in item.children"
            :key="index1"
            :index="'/fontStudy/' + item1.path"
            >{{ item1.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    this.$store.dispatch("getFontStudyMenuList", this.id);
  },
  computed: {
    ...mapState({
      menuList: (state) => state.menuList.menuList,
    }),
  },
};
</script>
<style lang="less" scoped>
</style>