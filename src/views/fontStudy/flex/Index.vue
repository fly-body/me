<template>
  <div>
    <el-card>
      <div class="all">
        <div>
          <el-cascader
            v-model="value"
            :options="list.options"
            @change="handleChange"
          >
          </el-cascader>
        </div>
        <div v-for="(item,index) in list.content" :key="index">
          <template v-if="currentValue === item.id">
            <div class="content">
              <h5>{{item.title}}</h5>
              <ul class="content-case" v-if="item.contentlist.length > 0">
                <li v-for="(itemList,itemIndex) in item.contentlist" :key="itemIndex">
                  {{itemList}}
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentValue: "",
      value: "",
      list: {
        options: [
          {
            value: "1",
            label: "父级",
            children: [
              {
                value: '1-1',
                label: 'flex-direction'
              },
              {
                value: '1-2',
                label: 'flex-wrap'
              },
              {
                value: '1-3',
                label: 'flex-flow'
              },
              {
                value: '1-4',
                label: 'justify-content'
              },
              {
                value: '1-5',
                label: 'align-items'
              },
              {
                value: '1-6',
                label: 'align-content'
              },
            ]
          },
          {
            value: "2",
            label: "子级",
            children: [
              {
                value: '2-1',
                label: 'order'
              },
              {
                value: '2-1',
                label: 'flex-grow'
              },
              {
                value: '1-1',
                label: 'flex-shrink'
              },
              {
                value: '1-1',
                label: 'flex-basis'
              },
              {
                value: '1-1',
                label: 'flex'
              },
              {
                value: '1-1',
                label: 'align-self'
              }
            ]
          },
        ],
        content:[
          {
            id: '1-1',
            title: 'flex-direction：设置主轴的方向。',
            url: '',
            contentlist:[
              "row: （默认值）主轴为水平方向，起点在左端，从左至右排列；",
              "row-reverse：主轴为水平方向，起点在右端，从右至左排列；",
              "column：主轴为垂直方向，起点在上沿，从上至下排列；",
              "column-reverse：主轴为垂直方向，起点在下沿，从下至上排列。"
            ]
          },
          {
            id: '1-2',
            title: 'flex-wrap： 控制项目(子元素)是否换行。',
            url: '',
            contentlist:[
              "nowrap：（默认值）不换行",
              "wrap：换行，第一行在上方；",
              "wrap-reverse：换行，第一行在下方。"
            ]
          },
          {
            id: '1-3',
            title: 'flex-flow：是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap',
            url: '',
            contentlist:[
            ]
          },
          {
            id: '1-4',
            title: 'justify-content：设置主轴上的子元素对齐方式。',
            url: '',
            contentlist:[
              "flex-start：（默认值），左对齐（沿着主轴开始位置至末尾位置对齐）；",
              "flex-end：右对齐（沿着主轴末尾位置至开始位置对齐）；",
              "center：居中对齐；",
              "space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍；",
              "space-between: 两端对齐，项目之间的间隔都相等。"
            ]
          },
          {
            id: '1-5',
            title: 'align-items：定义项目在交叉轴上如何对齐。',
            url: '',
            contentlist:[
              "flex-start：交叉轴的起点对齐；",
              "flex-end：交叉轴的终点对齐；",
              "center：交叉轴的中点对齐(可以理解为垂直居中)；",
              "baseline：项目的第一行文字的基线对齐；",
              "stretch：(默认值)，如果项目未设置高度或设为auto，将占满整个容器的高度。"
            ]
          },
          {
            id: '1-6',
            title: 'align-content：小shy在3.5提到过align-items适用于子元素在单行中使用，这个align-content则就是为了子元素多行的时候设置交叉轴的子元素的排列方式。',
            url: '',
            contentlist:[
              "flex-start：与交叉轴的起点对齐；",
              "flex-end：与交叉轴的终点对齐；",
              "center：与交叉轴的中点对齐；",
              "space-around：根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍；",
              "space-between：与交叉轴两端对齐，轴线之间的间隔平均分布；",
              "stretch：(默认值)，占满整个交叉轴。"
            ]
          },
          {
            id: '2-1',
            title: 'order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。',
            url: '',
            contentlist:[
            ]
          },
          {
            id: '2-2',
            title: 'flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。',
            url: '',
            contentlist:[
            ]
          },
          {
            id: '2-3',
            title: 'flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。',
            url: '',
            contentlist:[
            ]
          },
          {
            id: '2-4',
            title: 'flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间',
            url: '',
            contentlist:[
            ]
          },
          {
            id: '2-5',
            title: 'flex属性是flex-grow, flex-shrink 和 flex-basis的合写，默认值为0 1 auto。后两个属性可选。',
            url: '',
            contentlist:[
            ]
          },
          {
            id: '2-6',
            title: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。',
            url: '',
            contentlist:[
              "align-self: auto | flex-start | flex-end | center | baseline | stretch;"
            ]
          },
        ]
      },
    };
  },
  methods:{
    handleChange(value){
      this.currentValue = value[1]
    }
  }
};
</script>
<style lang="less" scoped>
.content{
  margin-top: 50px;
  .content-case{
    margin-top: 20px;
    background-color: black;
    color: white;
    padding: 10px 10px;
  }
}
</style>