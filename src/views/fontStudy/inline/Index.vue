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
          title: '常见的行内元素有那些？',
          id: 1,
          list:[
            {
              content: ' < a >、< strong >、< b >、< em >、< i >、< del >、< s >、< ins >、< u >、< span >、< img />、< input />、< select >、< textarea >、< br />、等，其中 < span > 标签是最典型的行内元素。有的地方也将行内元素称为内联元素。'
            },
          ]
        },
        {
          title: '行内级元素的特点有那些？',
          id: 2,
          list:[
            {
              content: '相邻行内元素在一行上，一行可以显示多个'
            },
            {
              content: '高、宽直接设置是无效的'
            },
            {
              content: '默认宽度就是它本身内容的宽度'
            },
            {
              content: '行内元素只能容纳文本或其他行内元素'
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