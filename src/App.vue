<template>
  <Tab />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Tab from './components/tab/Tab.vue'
  export default defineComponent({
    name: 'App',
    components: { Tab },
  })
</script>
