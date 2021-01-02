import {
  SET_TODO,
  SET_TODO_LIST,
  REMOVE_TODO,
  SET_TODO_STATUS,
  SET_DOING_STATUS,
} from '../store/actionType'
import { ITodo, TODO_STATUS } from '../typings'
import { Store, useStore } from 'vuex'
import { watch } from 'vue'

export interface IUseTodo {
  setTodo: (value: string) => void
  setTodoList: () => void
  removeTodo: (id: number) => void
  setStatus: (id: number) => void
  setDoing: (id: number) => void
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[]
  setLocalList: (todoList: ITodo[]) => void
}

const useTodo = (): IUseTodo => {
  const store: Store<any> = useStore()
  const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage()
  const todoList: ITodo[] = getLocalList()

  watch(
    () => {
      return store.state.list
    },
    (todoList) => {
      setLocalList(todoList)
    }
  )
  const setTodo = (value: string): void => {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO,
    }

    store.dispatch(SET_TODO, todo)
  }

  const setTodoList = (): void => {
    store.dispatch(SET_TODO_LIST, todoList)
  }

  const removeTodo = (id: number): void => {
    store.dispatch(REMOVE_TODO, id)
  }
  const setStatus = (id: number): void => {
    store.dispatch(SET_TODO_STATUS, id)
  }
  const setDoing = (id: number): void => {
    store.dispatch(SET_DOING_STATUS, id)
  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing,
  }
}

const useLocalStorage = (): IUseLocalStorage => {
  const getLocalList = (): ITodo[] => {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  const setLocalList = (todoList: ITodo[]): void => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return {
    getLocalList,
    setLocalList,
  }
}

export { useTodo, useLocalStorage }
