<template>
  <div>
    <el-card>
      <p>url: {{url}}</p>
      <p>这个案例存在缺陷，只是为了使用树型组件，请选一个看看params和query参数的区别就可以了</p>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        ref="treeRef"
      >
      </el-tree>
      <el-button type="primary" @click="submit">确定</el-button>
      <div class="content">
        <p>这两个都是跳转url的时候传递参数。query可以用name和path来传递，但是params只能用name来传递，query是直接在url中，页面刷新后url传递的参数依旧在，params在刷新跳转页面的时候就没有了</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://localhost:8080/#/fontStudy/route',
      data: [
        {
          id: '1',
          label: "添加query参数",
          children: [
            {
              id: '21',
              label: "/21",
            },
            {
              id: '22',
              label: "/22",
            },
          ],
        },
        {
          id: '2',
          label: "添加params参数",
          children: [
            {
              id: '11',
              label: "id=11",
            },
            {
              id: '12',
              label: "id=12",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      count: 1,
    };
  },
  methods: {
   submit(){
     this.url = 'http://localhost:8080/#/fontStudy/route'
    //  获取列表节点选中状态
     console.log(this.$refs.treeRef.getCheckedKeys());
    //  this.$refs.treeRef.getHalfCheckedKeys()获取全选的按钮
    //  console.log(this.$refs.treeRef.getHalfCheckedKeys());
     var array = this.$refs.treeRef.getCheckedKeys();

     for(var i =0; i < array.length; i++){
       if(array[i] > 10){
         if(array[i] < 20){
          this.url = this.url + "?id=" + array[i]
         }
         if(array[i] > 20){
           this.url = this.url + "/" + array[i]
         }
       }
     }
   }
  },
};
</script>

<style lang="less" scoped>
</style>