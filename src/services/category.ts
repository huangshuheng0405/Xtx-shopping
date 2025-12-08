import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

/**
 *
 * @description 获取分类列表
 */
export const getCategoryTypeAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top'
  })
}
