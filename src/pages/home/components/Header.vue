<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <router-link
      to="/search"
      class="header-input"
      tag="div"
    >
      <div>
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
    </router-link>
    <!-- <div class="header-input" @click="handleInputClick">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div> -->
    <router-link to="/city" tag="div">
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      showSearch: false
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    height: $header_height
    line-height: $header_height
    background-color:  $commom_bgColor
    color : #fff
    .header-left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .2rem
    .header-input
    // flex布局
      flex: 1
      height: .64rem
      line-height: .64rem
      background-color: #fff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      color: #ccc
      padding-left: .2rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .2rem
</style>
