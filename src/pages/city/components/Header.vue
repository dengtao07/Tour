<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    overflow: hidden
    height: $header_height
    line-height: $header_height
    text-align: center
    color: #fff
    background: $commom_bgColor
    font-size: .3rem
    .header-back
      width: .5rem
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
