<script setup lang="ts">
import { ref } from 'vue'
import { addAddressAPI } from '@/services/address'
import { getAddressDetailAPI } from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'
import { updateAddressAPI } from '@/services/address'

// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0 // 默认地址，1为是，0为否
})

// 表单验证规则
const rules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [{ required: true, errorMessage: '请填写收货人姓名' }]
  },
  contact: {
    rules: [
      { required: true, errorMessage: '请填写收货人手机号码' },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '请填写正确的手机号码' }
    ]
  },
  fullLocation: {
    rules: [{ required: true, errorMessage: '请选择省/市/区(县)' }]
  },
  address: {
    rules: [{ required: true, errorMessage: '请填写详细地址' }]
  }
}

// 获取表单组件实例
const formRef = ref<UniHelper.UniFormsInstance>()

// 获取页面参数
const query = defineProps<{
  id?: string
}>()

// 设置导航栏标题
uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '新增地址' })

// 监听地区选择
const onRegionChange: UniHelper.RegionPickerOnChange = (ev) => {
  // console.log(ev.detail)
  // 前端展示
  form.value.fullLocation = ev.detail.value.join(' ')
  // 后端参数
  form.value.provinceCode = ev.detail.code![0]
  form.value.cityCode = ev.detail.code![1]!
  form.value.countyCode = ev.detail.code![2]!
}

// 监听开关切换
const onSwitchChange: UniHelper.SwitchOnChange = (ev) => {
  // console.log(ev.detail)
  form.value.isDefault = ev.detail.value ? 1 : 0
}

// 提交表单
const handleSubmit = async () => {
  try {
    // 表单验证
    await formRef.value?.validate?.()
    if (query.id) {
      // 修改地址
      await updateAddressAPI(query.id!, form.value)
    } else {
      // 添加地址
      await addAddressAPI(form.value)
      uni.showToast({ title: query.id ? '修改成功' : '添加成功', icon: 'success' })
    }
    // console.log(res)
    setTimeout(() => {
      // 返回上一页
      uni.navigateBack()
    }, 500)
  } catch (error) {
    uni.showToast({ title: '请填写完整信息', icon: 'error' })
  }
}

// 获取地址详情 （修改时用）
const getAddressDetail = async () => {
  const res = await getAddressDetailAPI(query.id!)
  console.log(res)
  // 数据合并
  Object.assign(form.value, res.result)
}

onLoad(() => {
  if (query.id) {
    // 有id时才调用获取地址详情
    getAddressDetail()
  }
})
</script>

<template>
  <view class="content">
    <uni-forms :rules="rules" :model="form" ref="formRef">
      <!-- 表单内容 -->
      <uni-forms-item name="receiver">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item name="contact">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item name="fullLocation">
        <text class="label">所在地区</text>
        <picker
          @change="onRegionChange"
          class="picker"
          mode="region"
          :value="form.fullLocation.split(' ')"
        >
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="address">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <uni-forms-item>
        <label class="label">设为默认地址</label>
        <switch
          @change="onSwitchChange"
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
        />
      </uni-forms-item>
    </uni-forms>
    <!-- {{ form }} -->
  </view>
  <!-- 提交按钮 -->
  <button @tap="handleSubmit" class="button">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
