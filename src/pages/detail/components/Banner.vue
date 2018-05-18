<template>
  <div class="banner">
    <div class="img-wrapper" @click="handleClick">
      <img class="banner-img" :src="bannerImg" alt="banner-img">
      <div class="banner-ifo">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-num"><span class="iconfont">&#xe6a5;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <common-gallary
      :imgs="gallaryImgs"
      @closeGallary="handleCloseGallary"
      v-show="showGallary"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleClick () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .img-wrapper
    // 这个overflow 仅仅是为了保证图片不会超出父div
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-ifo
      display: flex
      // justify-content: space-between
      color: #fff
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      background: linear-gradient(top,
      rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        padding-left: 0.2rem
      .banner-num
        padding: 0 .4rem
        height: .4rem
        line-height: .4rem
        margin: .1rem .2rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        .iconfont
          width:100%
          margin-right: .1rem
</style>
