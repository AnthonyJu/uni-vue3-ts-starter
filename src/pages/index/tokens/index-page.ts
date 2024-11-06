import type { InjectionKey } from 'vue'

export interface IndexSubPageContext {
  uid: number
  index: number
  onLoad?: IndexPageOnLoadFunc
  onShow?: IndexPageOnShowFunc
  onScroll?: IndexPageOnScrollFunc
}

export interface IndexPageContext {
  items: IndexSubPageContext[]
  addItem: (item: IndexSubPageContext) => void
  removeItem: (uid: number) => void
}

export const indexPageContextKey: InjectionKey<IndexPageContext> = Symbol(
  'indexPageContextKey',
)
