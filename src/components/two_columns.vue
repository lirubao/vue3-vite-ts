<template>
  <!-- 左边 -->
  <div class="left"></div>
  <!-- 右边 -->
  <div class="right"></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'two_columns',
    components: {},
  })
</script>
<style>
  html,
  body {
    height: 100%;
    margin: 0;
    /* 去除滚动条 */
    overflow-y: hidden;
  }
  div {
    height: 100%;
  }
  /* 
  .left {
    margin-right: 200px;
    background-color: orange;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    background-color: green;
  } */

  .left {
    margin-left: 200px;
    background-color: orange;
  }
  .right {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    background-color: green;
  }
</style>
