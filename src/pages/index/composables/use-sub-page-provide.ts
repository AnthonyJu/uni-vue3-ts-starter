import { getCurrentInstance, inject } from 'vue'
import { indexPageContextKey } from '../tokens'

interface SubPageProvideOptions {
  onLoad?: IndexPageOnLoadFunc
  onShow?: IndexPageOnShowFunc
  onScroll?: IndexPageOnScrollFunc
}

export function useSubPageProvide(index: number, options: SubPageProvideOptions = {}) {
  const instance = getCurrentInstance()
  const { uid } = instance!

  const indexPage = inject(indexPageContextKey, null)

  indexPage?.addItem({
    uid,
    index,
    onLoad: options?.onLoad,
    onShow: options?.onShow,
    onScroll: options?.onScroll,
  })

  return {
    indexPage,
  }
}
