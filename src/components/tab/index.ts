import { setEl, setType } from '../utils'
import { Fade, Slide } from './factory'
interface IOptions {
  el: string
  type: TYPE | string
}

export enum TYPE {
  FADE = 'fade',
  SLIDE = 'slide',
}

class Tab {
  private _el: HTMLElement
  private _type: TYPE | string

  constructor(options: IOptions) {
    const { el, type }: IOptions = options
    this._type = setType(type)
    this._el = setEl(el, this._type as TYPE)
  }

  public create() {
    switch (this._type) {
      case TYPE.FADE:
        return new Fade(this._el)
      case TYPE.SLIDE:
        return new Slide(this._el)
      default:
        break
    }
  }
}

export default Tab
