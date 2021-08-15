<template>
  <view
    class="page page-index"
    :style="rootStyle"
  >
    <!-- logo -->
    <view class="logo">
      <image
        class="img"
        :src="logoImg"
        mode="widthFix"
      />
    </view>
    <!-- title -->
    <view class="page-title">道路养护</view>
    <!-- module list -->
    <view class="module-list">
      <view
        class="module-list__item"
        v-for="(item, index) in list"
        :key="index"
        @tap="gotoPanel(item.id)"
      >
        <view class="module-list__icon">
          <image
            class="img"
            :src="item.icon"
            mode="widthFix"
          />
        </view>
        <view class="module-list__info">
          <view class="title">{{ item.title }}</view>
          <view class="content">{{ item.content }}</view>
        </view>
        <view class="module-list__arrow">
          <text class="at-icon at-icon-chevron-right" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import Taro from '@tarojs/taro'
import iconAction from '@/assets/images/icon-list-action.png'
import iconBasic from '@/assets/images/icon-list-basic.png'
import iconForm from '@/assets/images/icon-list-form.png'
import iconView from '@/assets/images/icon-list-view.png'
import logoImg from '@/assets/images/logo_taro.png'
import './index.scss'
export default defineComponent({
  name: "IndexPage",
  setup() {
    const state = reactive({
      list: [
        {
          id: 'road',
          title: '道路情况',
          content: '展示当前道路情况信息',
          icon: iconBasic
        },
        {
          id: 'vehicle',
          title: '车辆作业',
          content: '车辆作业时间、路段管理',
          icon: iconView
        },
        {
          id: 'person',
          title: '人员管理',
          content: '值班日历、人员请假',
          icon: iconAction
        },
        {
          id: 'accident',
          title: '突发状况',
          content: '报警功能、处理突发情况、拍照上传',
          icon: iconForm
        },
      ]
    })
    const rootStyle = computed(() => {
      const deviceWidth = Taro.getSystemInfoSync().windowWidth
      return Taro.getEnv() === Taro.ENV_TYPE.WEB
        ? {
          width: deviceWidth >= 1024 ? '75%' : '100%',
          margin: 'auto'
        }
        : null
    })
    function onShareAppMessage() {
      return {
        title: 'Taro UI Vue3',
        path: '/pages/index/index',
        imageUrl:
          'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
      }
    }
    function gotoPanel(id) {
      Taro.navigateTo({
        url: `/pages/${id.toLowerCase()}/index`
      })
    }
    return {
      ...toRefs(state),
      logoImg,
      rootStyle,
      gotoPanel,
      onShareAppMessage
    }
  }
})
</script>