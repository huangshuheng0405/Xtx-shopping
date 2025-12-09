import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'

/**
 * 获取猜你喜欢组件实例，用于调用猜你喜欢组件方法
 * @returns { guessRef, loadMore }
 */
export const useGuess = () => {
  // 获取猜你喜欢组件实例，用于调用猜你喜欢组件方法
  const guessRef = ref<XtxGuessInstance>()
  // 加载更多
  const loadMore = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    loadMore
  }
}
