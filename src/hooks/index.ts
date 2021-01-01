import { SET_TODO } from '../store/actionType'
import { ITodo, TODO_STATUS } from '../typings'
import { Store, useStore } from 'vuex'

export interface IUseTodo {
  setTodo: (value: string) => void
  setTodoList: () => void
  removeTodo: () => void
  setStatus: () => void
  setDoing: () => void
}

function useTodo(): IUseTodo {
  const store: Store<any> = useStore()

  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO,
    }

    store.dispatch(SET_TODO, todo)
  }
  const setTodoList = () => {}
  const removeTodo = () => {}
  const setStatus = () => {}
  const setDoing = () => {}

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing,
  }
}

export { useTodo }
