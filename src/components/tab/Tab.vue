<template>
  <div class="tab">
    <div class="tab-wrapper">
      <div class="tab-item active">选项一</div>
      <div class="tab-item">选项二</div>
      <div class="tab-item">选项三</div>
      <div class="tab-item">选项四</div>
    </div>
    <div class="page-wrapper">
      <div class="inner">
        <div class="page-item active">页面一</div>
        <div class="page-item">页面二</div>
        <div class="page-item">页面三</div>
        <div class="page-item">页面四</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import Tab from './'

  export default defineComponent({
    name: 'App',
    // components: {},
    setup() {
      const init = () => {
        const tab: Tab = new Tab({
          el: '.tab',
          type: 'slide',
        })
        tab.create()
      }
      onMounted(() => {
        init()
      })
    },
  })
</script>

<style lang="scss">
  .tab {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #000;
    .tab-wrapper {
      height: 50px;
      border-bottom: 1px solid #000;
      .tab-item {
        float: left;
        width: 25%;
        height: 100%;
        text-align: center;
        line-height: 50px;
      }
      .tab-item.active {
        background-color: #000;
        color: #fff;
      }
    }
    .page-wrapper {
      position: relative;
      height: 450px;
      .page-item {
        width: 500px;
        height: 100%;
        text-align: center;
        line-height: 450px;
        font-size: 100px;
      }
    }
  }
  .tab.fade {
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .page-item {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
    }
    .page-item.active {
      display: block;
    }
  }
  .tab.slide {
    .inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 2000px;
      height: 100%;
      transition: transform 0.3s;
    }
    .page-item {
      float: left;
      display: block;
      width: 500px;
      height: 100%;
    }
  }
</style>
