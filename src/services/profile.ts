import { http } from '@/utils/http'
import type { ProfileDetail } from '@/types/member'
import type { ProfileParams } from '@/types/member'

// 获取用户信息
/**
 * 获取用户信息 token自动加过了
 * @returns 用户信息
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile'
  })
}

/**
 * 修改个人信息
 * @param data 个人信息
 * @returns 个人信息
 */
export const updateMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data
  })
}
