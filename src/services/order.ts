import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult
} from '@/types/order'
import { http } from '@/utils/http'

/**
 * 获取订单预览信息
 * @returns 订单预览信息
 */
export const getOrderListPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre'
  })
}

/**
 * 立即购买
 * @param order 创建订单参数
 * @returns 创建订单结果
 */
export const buyItNowAPI = (data: { skuId: string; count: string; addressId?: string }) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data
  })
}

/**
 * 提交订单
 * @param data 创建订单参数
 * @returns 创建订单结果 只需要id
 */
export const submitOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 * @returns 订单详情
 */
export const getOrderDetailAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`
  })
}

/**
 * 获取再次购买订单
 * @returns 再次购买订单
 */
export const getAgainBuyOrderAPI = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data
  })
}
