import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import type { PageParams, PageResult } from '@/types/global'

// 获取首页广告区域
// distributionSite
// 广告区域展示位置
/**
 *
 * @param distributionSite // 1 为首页（默认值）2 为商品分类页
 * @returns
 */
// 1 为首页（默认值）
// 2 为商品分类页
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

// 获取分类数据
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}

// 获取热门推荐数据
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli'
  })
}

// 获取猜你喜欢数据
// 加？可选data
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}
