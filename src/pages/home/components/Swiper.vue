<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class="swiper-image" src="http://img1.qunarzz.com/piao/fusion/1804/8b/f7f0585bbb539202.jpg_640x200_c4096429.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-image" src="http://img1.qunarzz.com/piao/fusion/1804/c7/15d167c86f961a02.jpg_640x200_e9d5a5ff.jpg" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  neme: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-image
      width: 100%
</style>
