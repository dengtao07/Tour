<template>
  <div>
    <div class="search">
      <input
        class="searchInput"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <!-- 把逻辑运算都放到js代码中 -->
        <li
          v-show="hasNoData"
          class="search-item border-bottom"
        >
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
      } else {
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((item) => {
              if (item.spell.indexOf(this.keyword) > -1 ||
                  item.name.indexOf(this.keyword) > -1) {
                result.push(item)
              }
            })
          }
          this.list = result
        }, 100)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      background: #ffffff
      color: #666
      padding-left: .2rem
      line-height: .62rem
</style>
