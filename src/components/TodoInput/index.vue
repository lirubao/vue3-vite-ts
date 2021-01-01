<template>
  <div>
    <input type="text" v-model="todoValue" @keyup="setTodoValue" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { IUseTodo, useTodo } from '../../hooks'

  export default defineComponent({
    name: 'TodoInput',
    setup(props, ctx) {
      const todoValue = ref<string>('')
      const { setTodo }: IUseTodo = useTodo()

      const setTodoValue = (e: KeyboardEvent): void => {
        if (e.keyCode === 13 && todoValue.value.trim().length) {
          // 设置数据
          setTodo(todoValue.value)
          todoValue.value = ''
        }
      }

      return {
        todoValue,
        setTodoValue,
      }
    },
  })
</script>

<style></style>
