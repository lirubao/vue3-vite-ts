<template>
  <div class="box">
    <div class="box1"></div>
    <div class="box2"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'ClearFloat',
    components: {},
  })
</script>
<style scoped>
  /*
  相同点:
    1. 都可以用来表示伪类对象，用来设置对象前的内容
    2. :before和::before写法是等效的; :after和::after写法是等效的
  不同点:
    1. :before/:after是Css2的写法，::before/::after是Css3的写法
    2. :before/:after 的兼容性要比::before/::after好 ，
    3. 不过在H5开发中建议使用::before/::after比较好
  注意:
    1. 这些伪元素 要配合content属性一起使用
    2. 这些伪元素 不会出现在DOM中，所以不能通过js来操作，仅仅是在 CSS 渲染层加入
   */
  /* 
    清除浮动:
        方式一:
            .box::after {
                content: '';
                display: block;
                clear: both;
            }
        方式二:(推荐)
            ul::after,
            div::after {
                content: '';
                display: block;
                clear: both;
            }

  */
  ul::after,
  div::after {
    content: '';
    display: block;
    clear: both;
  }
  .box {
    width: 200px;
    border: 10px solid #000;
  }
  .box1 {
    float: left;
    width: 100px;
    height: 100px;
    background-color: green;
  }
  .box2 {
    float: left;
    width: 100px;
    height: 100px;
    background-color: orange;
  }
</style>
