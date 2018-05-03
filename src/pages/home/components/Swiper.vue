<template>
<div class="wrapper">
  <!-- v-if="isSwiperEmpty" ajax读取的信息放入数组后才开始渲染，避免出现初始为最后一页 -->
  <swiper :options="swiperOption" v-if="isSwiperEmpty">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-image" :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  neme: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    isSwiperEmpty () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background-color: #fff !important
  .wrapper
    // 给图片预留位置，解决图片加载缓慢带来的抖动问题
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background-color: #eee
    .swiper-image
      width: 100%
</style>
