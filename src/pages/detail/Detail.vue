<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list
        :list="categoryList"
        @click="handleClick"
        :dialogVisible="dialogVisible"
      >
      </detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  // 递归组件，取消缓存，vue开发者工具中的名字
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      lastId: '',
      dialogVisible: false
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      // 这个allData包含ret和data
      var allData = res.data
      if (allData.data && allData.ret) {
        const data = allData.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    },
    handleClick () {
      this.dialogVisible = true
    }
  },
  // 因为使用了keep-alive，mounted钩子只会执行一次
  mounted () {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  // 如果上次进入的是同样的界面，从缓存中拿数据，如果不一样，重新发送ajax请求
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 20rem
</style>
