<template>
  <div class="search">
    <input class="searchInput" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height: .72rem
    background: $commom_bgColor
    padding: 0 .1rem
    .searchInput
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      border-radius: .1rem
      text-align: center
      color: #666
      padding: 0 .2rem
</style>
