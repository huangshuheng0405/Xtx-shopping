import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'
import type { AddressItem } from '@/types/address'

/**
 * 添加地址
 * @param data 添加地址参数
 * @returns 添加地址结果
 */
export const addAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data
  })
}

/**
 * 获取地址列表
 * @returns 地址列表
 */
export const getAddressListAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address'
  })
}

/**
 * 获取地址详情
 * @param id 地址id
 * @returns 地址详情
 */
export const getAddressDetailAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`
  })
}

/**
 * 修改地址
 * @param id 地址id
 * @param data 修改地址参数
 * @returns 修改地址结果
 */
export const updateAddressAPI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data
  })
}

/**
 * 删除地址
 * @param id 地址id
 * @returns 删除地址结果
 */
export const deleteAddressAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`
  })
}
