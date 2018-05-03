<template>
  <swiper class="icons" :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" />
        </div>
        <p class="icon-text">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default{
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // 计算当前icon属于第几页
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      height: 0
      width: 25% //基于父元素的宽度
      padding-bottom: 25% //基于父元素的宽度
      //box-sizing: border-box
      .icon-img
        position: absolute
        top: .2rem
        left: 0
        right: 0
        bottom: .4rem
        padding: .05rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-text
          position: absolute
          text-align: center
          height: .4rem
          line-height: .4rem
          bottom: 0
          left: 0
          right: 0
          color: $dark_text_color
          ellipsis()
</style>
