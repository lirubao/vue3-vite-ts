import { TYPE } from '../tab'

const setEl = (el: string | undefined, type: TYPE): HTMLElement => {
  if (!el) {
    throw new Error('"el" must be exist')
  }
  const isMark: boolean = /^(\.|\#)/.test(el)
  let _el: HTMLElement | null
  let querySelector = (el: string): HTMLElement | null => document.querySelector(el)

  if (!isMark) {
    _el = querySelector(`.${el}`) || querySelector(`#${el}`)
  } else {
    _el = querySelector(el)
  }

  if (!_el) {
    throw new Error('This element with the class or ID name is not exist')
  }
  _el.className = `tab ${type}`
  return _el
}

const setType = (type: TYPE | string | undefined): TYPE => {
  if (!type) {
    return TYPE.FADE
  }
  for (let k in TYPE) {
    if (TYPE[k] === type) {
      return type as TYPE
    }
  }
  return TYPE.FADE
}
export { setEl, setType }
