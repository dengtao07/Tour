<template>
  <div class="wraper">
    <div class="icon">

    </div>
  </div>
</template>

<script>
export default{
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  .wraper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    background-color: #eee
    .icon
      float: left
      width: 25% //基于父元素的宽度
      padding-bottom: 25% //基于父元素的宽度
      background-color: green
</style>
