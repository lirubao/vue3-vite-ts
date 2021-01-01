<template>
  <div>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IUseTodo, useTodo } from '../../hooks'
  import { ITodo } from '../../typings'
  import TodoItem from './item.vue'
  export default defineComponent({
    name: 'TodoList',
    props: {
      // 断言
      todoList: Array as PropType<ITodo[]>,
    },
    components: {
      TodoItem,
    },
    setup(props) {
      const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo()

      return {
        removeTodo,
        setStatus,
        setDoing,
      }
    },
  })
</script>

<style></style>
