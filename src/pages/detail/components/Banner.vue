<template>
  <div class="banner">
    <div class="img-wrapper">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p64/201211/04/9173ff9f33e97f3193835fbb.jpg_600x330_db50bab7.jpg" alt="">
      <div class="banner-ifo">
        <div class="banner-title">成都杜甫草堂(AAAA景区)</div>
        <div class="banner-num"><span class="iconfont">&#xe6a5;</span>40</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
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
