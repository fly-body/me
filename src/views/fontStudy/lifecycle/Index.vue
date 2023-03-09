<template>
  <div>
    <el-card>
      <el-steps :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="created"></el-step>
        <el-step title="mounted"></el-step>
        <el-step title="updated"></el-step>
        <el-step title="destroyed"></el-step>
      </el-steps>
      <el-tabs :tab-position="tabPosition" v-model="activeIndex">
        <el-tab-pane label="created">
          <el-card>
            <p>beforeCreate：在实例初始化之后，数据观测 (Data Observer) 和 event/watcher 事件配置之前被调用。</p>
            <p>created：在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)、属性和方法的运算，watch/event 事件回调；然而，挂载阶段还没开始，$el 属性目前不可见。</p>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="mounted">
          <el-card>
            <p>beforeMount：在挂载开始之前被调用，相关的 render 函数首次被调用。</p>
            <p>mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。</p>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="updated">
          <p>beforeUpdate：数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。</p>
          <p>updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以现在可以执行依赖于 DOM 的操作，然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之（PS：计算属性与 watcher 会在后面的篇幅中进行介绍）。</p>
        </el-tab-pane>
        <el-tab-pane label="destroyed">
          <p>beforeDestroy：实例销毁之前调用，在这一步，实例仍然完全可用。</p>
          <p>destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</p>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      tabPosition: "left"
    };
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.el-card {
  min-height: 485px;
}
</style>