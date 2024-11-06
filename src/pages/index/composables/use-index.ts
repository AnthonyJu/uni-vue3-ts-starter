import type { IndexSubPageContext } from '../tokens'

import { useOrderedChildren } from '@/uni_modules/tuniaoui-vue3/hooks'
import { indexPageContextKey } from '../tokens'

interface TabbarItem {
  text: string
  icon: string
  activeIcon: string
}
type TabbarData = TabbarItem[]

export function useIndex() {
  // 导航栏数据
  const tabbarData: TabbarData = [
    {
      text: '首页',
      icon: 'home-smile',
      activeIcon: 'home-smile-fill',
    },
    {
      text: '订单',
      icon: 'order',
      activeIcon: 'order-fill',
    },
    {
      text: '动态',
      icon: 'reload-planet-fill',
      activeIcon: 'discover-planet',
    },
    {
      text: '消息',
      icon: 'message',
      activeIcon: 'message-fill',
    },
    {
      text: '我的',
      icon: 'my',
      activeIcon: 'my-fill',
    },
  ]

  // 当前选中的tabbar索引
  const currentTabbarIndex = ref(-1)
  // 标记页面是否已经渲染
  const renderPageStatus = ref<boolean[]>(
    Array.from({ length: tabbarData.length }).map(() => false),
  )

  // 子页面数据
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem,
  } = useOrderedChildren<IndexSubPageContext>()

  // 底部导航栏发生切换事件
  // 根据index查找对应的页面
  const _findPageByIndex = (index: string | number) => {
    return items.value.find(item => item.index === index)
  }
  const tabbarChangeHandle = (index: string | number) => {
    if (typeof index === 'string') {
      index = Number.parseInt(index)
    }
    if (!renderPageStatus.value[index]) {
      renderPageStatus.value[index] = true
      nextTick(() => {
        _findPageByIndex(index)?.onLoad?.()
      })
    }
    nextTick(() => {
      _findPageByIndex(index)?.onShow?.()
    })
  }

  // 处理页面对应scroll-view滚动事件
  const scrollViewScrollHandle = (event: any) => {
    const { scrollTop, scrollLeft } = event.detail
    _findPageByIndex(currentTabbarIndex.value)?.onScroll?.({
      top: scrollTop,
      left: scrollLeft,
    })
  }

  provide(
    indexPageContextKey,
    reactive({
      items,
      addItem,
      removeItem,
    }),
  )

  return {
    tabbarData,
    currentTabbarIndex,
    renderPageStatus,
    tabbarChangeHandle,
    scrollViewScrollHandle,
  }
}
