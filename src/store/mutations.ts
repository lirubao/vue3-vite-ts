import { IState, ITodo } from '../typings'
import { SET_TODO } from './actionType'

export default {
  [SET_TODO](state: IState, todo: ITodo): void {
    state.list.unshift(todo)
    console.log(state.list)
  },
}