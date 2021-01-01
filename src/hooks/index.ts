import { SET_TODO, SET_TODO_LIST } from '../store/actionType'
import { ITodo, TODO_STATUS } from '../typings'
import { Store, useStore } from 'vuex'

export interface IUseTodo {
  setTodo: (value: string) => void
  setTodoList: () => void
  removeTodo: () => void
  setStatus: () => void
  setDoing: () => void
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[]
  setLocalList: (todoList: ITodo[]) => void
}

const useTodo = (): IUseTodo => {
  const store: Store<any> = useStore()
  const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage()
  const todoList: ITodo[] = getLocalList()

  const setTodo = (value: string): void => {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO,
    }

    store.dispatch(SET_TODO, todo)
    setLocalList(store.state.list)
  }

  const setTodoList = (): void => {
    store.dispatch(SET_TODO_LIST, todoList)
  }

  const removeTodo = (): void => {
    console.log('removeTodo')
  }
  const setStatus = (): void => {
    console.log('setStatus')
  }
  const setDoing = (): void => {
    console.log('setDoing')
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
