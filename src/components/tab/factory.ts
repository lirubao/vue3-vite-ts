import { TYPE } from '.'

abstract class Base {
  private _curIdx: number = 0
  private _el: HTMLElement
  private _tabItems: HTMLCollection
  private _methodArr: any[] = []
  private _pageElement: HTMLElement | HTMLCollection

  constructor(el: HTMLElement, type: TYPE) {
    this._el = el
    this._tabItems = this._el.getElementsByClassName('tab-item')
    switch (type) {
      case TYPE.FADE:
        this._pageElement = this._el.getElementsByClassName('page-item')
        break
      case TYPE.SLIDE:
        this._pageElement = this._el.getElementsByClassName('inner')[0] as HTMLElement
        break
      default:
        break
    }
    this.init()
  }
  private init() {
    this.bindEvent()
  }
  private bindEvent() {
    this._el.addEventListener('click', this.setTab.bind(this), false)
  }
  private setTab(e: MouseEvent) {
    const tar = e.target as HTMLElement
    const className = tar.className
    if (className === 'tab-item') {
      this._tabItems[this._curIdx].className = 'tab-item'
      this._curIdx = [].indexOf.call(this._tabItems, tar as never)
      this._tabItems[this._curIdx].className += ' active'
      // 当_curIdx变更的时候执行
      this.notify()
    }
  }

  private notify() {
    this._methodArr.forEach((item: any) => {
      item(this._pageElement, this._curIdx)
    })
  }

  // 观察者模式
  protected getMethod(method: any) {
    this._methodArr.push(method)
  }
}

class Fade extends Base {
  constructor(el: HTMLElement) {
    super(el, TYPE.FADE)
    this.getMethod(this.setPage)
  }

  private setPage(pageItems: HTMLCollection, curIdx: number) {
    ;[...pageItems].forEach((item: HTMLElement) => {
      item.className = 'page-item'
    })
    pageItems[curIdx].className += ' active'
  }
}

class Slide extends Base {
  constructor(el: HTMLElement) {
    super(el, TYPE.SLIDE)
    this.getMethod(this.setPage)
  }
  private setPage(pageInner: HTMLElement, curIdx: number) {
    pageInner.style.transform = `translate3d(${-(curIdx * 500)}px, 0, 0)`
  }
}

export { Fade, Slide }
