<template>
  <div>
    <div class="header">
      <router-link to="/" tag="div">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      <input
        class="search-input"
        placeholder="输入城市或景点"
        v-model="keywords"
      >
      <div
        class="iconfont deleteIcon"
        v-show="deleteShow"
        @click="handleDelete"
      >
        &#xe6f2;
      </div>
      <div
        class="clickSearch"
        @click="handleSearch"
      >
      搜索
      </div>
    </div>
    <ul>
      <li
        class="itemList border"
        v-for="item in list"
        :key="item.id"
      >
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchHome',
  data () {
    return {
      keywords: '',
      cities: {},
      list: [],
      deleteShow: false
    }
  },
  watch: {
    keywords () {
      if (this.keywords) {
        this.deleteShow = true
      } else {
        this.list = []
        this.deleteShow = false
      }
    }
  },
  methods: {
    handleSearch () {
      if (this.keywords) {
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach(element => {
            if (element.spell.indexOf(this.keywords) > -1 ||
                element.name.indexOf(this.keywords) > -1) {
              result.push(element)
            }
          })
        }
        this.list = result
        console.log(this.list)
      }
    },
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      const values = res.data
      if (values.data && values.ret) {
        const data = values.data
        this.cities = data.cities
      }
    },
    handleDelete () {
      this.keywords = ''
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    width: 100%
    height: .64rem
    padding: .15rem 0
    align-items: center
    .search-input
      flex: 1
      line-height: .64rem
      height: .64rem
      text-align: center
      background: #eeeeee
      border-radius: .4rem
      position: relative
    .back-icon
      // width: .86rem
      line-height: .64rem
      height: .64rem
      padding: 0 .2rem
    .clickSearch
      margin-left: .1rem
      line-height: .64rem
      height: .64rem
      padding: 0 .2rem
    .deleteIcon
      font-size: .4rem
      height: .5rem
      line-height: .5rem
      position: absolute
      right: 1.3rem
  .itemList
    height: .62rem
    line-height: .62rem
    padding-left: .2rem
</style>
