<template>
  <!--  此处wrapper是一个字符串，所以不需要使用数据绑定 -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="tittle border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="tittle border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wraper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(value, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="tittle border-topbottom">{{key}}</div>
        <!--  此处key是一个js表达式，所以需要使用数据绑定 -->
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="item in value"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  // 什么意思
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
    // &:after
    //   border-color: red // ???
  .list
    // 使用绝对定位直接把位置定死，不会出现滚动
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    .tittle
      padding-left: 0.1rem
      height: .62rem
      line-height: .62rem
      background: #eee
      color: #666666
      font-size: .26rem
    // .button-list
    //   overflow: hidden  // 目的是触发BFC，查一下
    //   padding: .1rem .6rem .1rem .1rem
    //   .button-wrapper
    //     float: left
    //     width: 33.33%
    .button-list
      display: flex
      flex-wrap: wrap
      padding: .1rem .6rem .1rem .1rem
      .button-wraper
        box-sizing: border-box
        flex: 0 0 33.33%
        .button
          margin: .1rem
          text-align: center
          border: .02rem solid #cccccc
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem

</style>
