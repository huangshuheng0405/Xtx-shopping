<script setup lang="ts">
import { getHomeBannerAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPannel from '@/pages/index/components/CategoryPannel.vue'
import { getHomeCategoryAPI } from '@/services/home'
import HotPannel from '@/pages/index/components/HotPannel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
//获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
// 获取前台数据分类
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  // console.log(res)
  categoryList.value = res.result
}
// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  // console.log(res)
  hotList.value = res.result
}
// 滚动触底
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  // console.log('触底')
  guessRef.value?.getMore()
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view @scrolltolower="onScrolltolower" scroll-y class="scroll-view">
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPannel :list="categoryList"></CategoryPannel>
    <!-- 热门推荐 -->
    <HotPannel :list="hotList"></HotPannel>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
