<template>
  <div>
    <el-card>
      <div>
        <p>什么是闭包？</p>
        <p>1.闭包就是把函数的局部变量变成全局变量，以下案例，在全局访问b,输出1,但是通过闭包，输出为2,访问到了局部变量,但是闭包里的数据不会被回收，永远保存了起来</p>
        <p>2.函数e是为了释放闭包的内部变量</p>
        <p>3.jq中使用let去解决循环给节点添加事件时i产生问题</p>
      </div>
      <div>
        <pre class="code">
          {{content}}
        </pre>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      content: `
      var b = 1;
      function a(){
        var b = 2;
        function c(){
          console.log(b)
        }
        function e(){
          b = null;
          console.log(b);
        }
        return {c,e};
      }
      a().c()
      a().e()
      `
    }
  }
}
</script>

<style lang="less" scoped>
  .code{
    background-color: black;
    color: white;
  }
</style>