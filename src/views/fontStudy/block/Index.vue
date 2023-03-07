<template>
  <div>
    <el-card>
      <el-collapse>
        <el-collapse-item :title="item.title" :name="item.id" v-for="(item,index) in list" :key="index">
          <div v-for="(itemList,indexList) in item.list" :key="indexList">
            {{itemList.content}}
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list: [
        {
          title: '常见的块级元素有那些？',
          id: 1,
          list:[
            {
              content: '常见的块级元素：< h1 >~< h6 >、< p >、< div >、< ul >、< ol >、< li >、< dd >、< dt >、< dl >等，其中 < div > 标签是最典型的块元素。'
            },
          ]
        },
        {
          title: '块级元素的特点有那些？',
          id: 2,
          list:[
            {
              content: '自己独占一行'
            },
            {
              content: '高度，宽度、外边距以及内边距都可以控制'
            },
            {
              content: '宽度默认是容器（父级宽度）的100%'
            },
            {
              content: '是一个容器及盒子，里面可以放行内或者块级元素'
            },
          ]
        }
      ]
    }
  }
};
</script>
<style lang="less" scoped>
</style>