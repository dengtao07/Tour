<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-image" :src="item" />
        </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 启用swiper的监听功能，当改变swiper样式时，自动初始化swiper
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow: visible
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 3
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-image
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
