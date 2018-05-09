<template>
  <ul class="list">
    <li
      class="item"
      v-for="(value, key, index) in cities"
      :key="index"
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      color: $commom_bgColor
      text-align: center
      line-height: .44rem
</style>
