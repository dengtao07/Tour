<template>
  <div>
    <router-link class="head-abs" tag="div" to="/" v-show="showAbs">
      <div class="iconfont abs-icon">&#xe624;</div>
    </router-link>
    <div
      class="head-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      天堂海洋乐园
      <router-link to="/">
        <div class="iconfont fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        // 60到140的区间,opacity: 0-1
        let opacity = (top - 60) / 80
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // keepalive中的，页面被展示的时候会执行
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面被隐藏或者被更新时会执行
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .head-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .abs-icon
      color: #ffffff
      font-size: .4rem
  .head-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    width: 100%
    // right: 0  // ?
    overflow: hidden
    height: $header_height
    line-height: $header_height
    text-align: center
    color: #fff
    background: $commom_bgColor
    font-size: .3rem
    .fixed-back
      width: .5rem
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
