<!--
此文件为开发者工具生成，生成时间: 2025/12/7下午2:46:23
使用方法：
在 D:\uniapp-study\xtx-shopping\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\uniapp-study\xtx-shopping\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPannel">
    <view class="category CategoryPannel--category">
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-928 sk-text"
          >居家</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-233 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-350 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-463 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-945 sk-text"
          >个护</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-157 sk-text"
          >严选</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-397 sk-text"
          >数码</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-332 sk-text"
          >运动</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-419 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-873 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPannel">
    <view class="panel HotPannel--panel hot HotPannel--hot">
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-39 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-986 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-450 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-35 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-521 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-157 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-21 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-87 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption">
      <text
        class="text XtxGuess--text sk-transparent sk-text-0-0000-239 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2025/12/7下午2:46:23

在 D:\uniapp-study\xtx-shopping\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-389 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-698 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-928 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-233 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-350 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-463 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-945 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-157 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-397 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-332 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-419 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-873 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-39 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-986 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-450 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-35 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-521 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-21 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-87 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-239 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
