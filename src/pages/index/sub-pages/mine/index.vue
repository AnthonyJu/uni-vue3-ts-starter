<template>
  <PageContainer tab-bottom>
    <!-- 顶部背景 -->
    <view class="top-bg" />
    <!-- 页面内容 -->
    <view class="page" :style="{ paddingTop: `${navBarInfo.height + 12}px` }">
      <!-- 用户信息 -->
      <view v-if="userInfo?.uid" class="user-info" @tap.stop="navUserInfoPage">
        <view class="info-content">
          <view class="avatar">
            <image class="tn-image" :src="userInfo?.avatar" mode="aspectFill" />
          </view>
          <view class="content">
            <view class="nickname">{{ userInfo?.nickname }}</view>
            <view class="uid">
              <view class="label-text">uid: {{ userInfo?.uid }}</view>
              <view class="copy">
                <TnIcon name="copy" />
              </view>
            </view>
          </view>
        </view>
        <view class="setting-icon">
          <TnIcon name="install" />
        </view>
      </view>
      <view v-else class="login-btn tn-shadow" @tap.stop="loginHandle">
        <view class="icon">
          <TnIcon name="wechat" />
        </view>
        <view class="label-text">授权登录</view>
      </view>

      <!-- 会员等级、权益 -->
      <view
        class="tn-shadow-blur member-rights"
        @tap.stop="navVipInfoPage"
      >
        <view class="member-content">
          <view class="grade tn-text-transparent flex items-center">
            <view class="mr-10rpx text-48rpx text-#ffe3a3">
              <TnIcon name="vip" />
            </view>
            VIP
          </view>
          <view class="desc">会员福利，助力生活一骑绝尘</view>
        </view>
        <view class="tn-shadow-blur rights-btn tn-flex-center">
          <view>权 益</view>
        </view>

        <!-- 图片波浪 -->
        <view class="image-wave-container">
          <view class="image-wave" />
          <view class="image-wave" />
          <view class="image-wave" />
        </view>
      </view>

      <!-- 分类 -->
      <view class="tn-shadow category">
        <view class="category-item" @tap.stop="navMoneyInfoPage">
          <view class="icon">
            <TnIcon name="lucky-money" />
          </view>
          <view class="title">我的钱包</view>
        </view>

        <view class="category-item" @tap.stop="$emit('setTabBar', 1)">
          <view class="icon">
            <TnIcon name="order" />
          </view>
          <view class="title">我的订单</view>
        </view>

        <view class="category-item" @tap.stop="navFollowInfoPage">
          <view class="icon">
            <TnIcon name="star" />
          </view>
          <view class="title">我的关注</view>
        </view>

        <view class="category-item" @tap.stop="navProblemInfoPage">
          <view class="icon">
            <TnIcon name="help" />
          </view>
          <view class="title">常见问题</view>
        </view>
      </view>

      <!-- 列表 -->
      <view class="tn-shadow list">
        <TnButton only-button @click="navServiceInfoPage">
          <view class="list-item">
            <view class="left">
              <view class="icon">
                <TnIcon name="trust" />
              </view>
              <view class="left-text"> 服务协议 </view>
            </view>
            <view class="right">
              <view class="icon">
                <TnIcon name="right" />
              </view>
            </view>
          </view>
        </TnButton>
        <TnButton only-button @click="navPrivacyInfoPage">
          <view class="list-item">
            <view class="left">
              <view class="icon">
                <TnIcon name="safe" />
              </view>
              <view class="left-text"> 隐私政策 </view>
            </view>
            <view class="right">
              <view class="icon">
                <TnIcon name="right" />
              </view>
            </view>
          </view>
        </TnButton>
      </view>

      <!-- 列表 -->
      <view class="list tn-shadow">
        <TnButton only-button @click="navFeedbackInfoPage">
          <view class="list-item">
            <view class="left">
              <view class="icon">
                <TnIcon name="edit-form" />
              </view>
              <view class="left-text"> 意见反馈 </view>
            </view>
            <view class="right">
              <view class="icon">
                <TnIcon name="right" />
              </view>
            </view>
          </view>
        </TnButton>
        <TnButton only-button @click="navAboutInfoPage">
          <view class="list-item">
            <view class="left">
              <view class="icon">
                <TnIcon name="company" />
              </view>
              <view class="left-text"> 关于我们 </view>
            </view>
            <view class="right">
              <view class="icon">
                <TnIcon name="right" />
              </view>
            </view>
          </view>
        </TnButton>
      </view>
    </view>
    <view class="footer">
      <tn-footer :fixed="false" content="谁提供技术支持" />
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/page-container/index.vue'
import { useSubPageProvide } from '@/pages/index/composables'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'

const { navBarInfo } = useUniAppSystemRectInfo()

// 用户信息
const userInfo = ref<any>()

// 点击获取用户信息
function loginHandle() {
  uni.showLoading({
    title: '登录中...',
    mask: true,
  })
  setTimeout(() => {
    uni.hideLoading()
    userInfo.value = {
      uid: generateRandomNumber(100000, 999999).toString(),
      nickname: '不许凶我吖',
      username: '',
      avatar: 'https://resource.tuniaokj.com/images/avatar/xiong.jpg',
      sex: 0,
      phone: '',
      desc: '',
      birthday: '',
      profession: '',
    }
  }, 1500)
}

// 跳转到个人信息页面
function navUserInfoPage() {
  tnNavPage('/pages/info-page/user-info/index')
}

// 跳转到常见问题页面
function navProblemInfoPage() {
  tnNavPage('/pages/info-page/problem-info/index')
}

// 跳转到会员权益页面
function navVipInfoPage() {
  tnNavPage('/pages/info-page/vip-info/index')
}

// 我的钱包
function navMoneyInfoPage() {
  tnNavPage('/pages/info-page/money-info/index')
}

// 我的关注
function navFollowInfoPage() {
  tnNavPage('/pages/info-page/follow-info/index')
}

// 服务协议
function navServiceInfoPage() {
  tnNavPage('/pages/info-page/service-info/index')
}

// 隐私政策
function navPrivacyInfoPage() {
  tnNavPage('/pages/info-page/privacy-info/index')
}

// 意见反馈
function navFeedbackInfoPage() {
  tnNavPage('/pages/info-page/feedback-info/index')
}

// 关于我们
function navAboutInfoPage() {
  tnNavPage('/pages/info-page/about-info/index')
}

useSubPageProvide(4)
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<style lang="scss" scoped>
@import "./index";
</style>
