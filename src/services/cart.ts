import { http } from '@/utils/http'

/**
 * 添加购物车
 * @param data { skuId: string; count: number }
 * @returns
 */
export const addCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data
  })
}
