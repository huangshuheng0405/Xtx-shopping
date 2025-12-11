import type { CartItem } from '@/types/cart'
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

/**
 * 获取购物车列表
 * @returns
 */
export const getCartListAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart'
  })
}

/**
 * 删除购物车
 * @param data 请求体参数 ids skuid 集合
 * @returns
 */
export const deleteCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/cart`,
    data
  })
}

/**
 * 修改购物车单品
 * @param data selected 选中状态 count 数量
 * @param skuId
 * @returns
 */
export const updateCartAPI = (skuId: string, data: { selected?: boolean; count?: number }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data
  })
}

/**
 * 修改购物车选中状态 (全选/反选)
 * @param data selected 选中状态
 * @param skuId
 * @returns
 */
export const updateCartSelectedAllAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/selected`,
    data
  })
}
