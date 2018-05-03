<template>
  <swiper class="icons" :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key=item.icon_id>
        <div class="icon-img">
          <img class="icon-img-content" :src="item.url" />
        </div>
        <p class="icon-text">{{item.text}}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default{
  name: 'HomeIcons',
  data: function () {
    return {
      icons: [{
        icon_id: '0001',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      }, {
        icon_id: '0002',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票1'
      }, {
        icon_id: '0003',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票2'
      }, {
        icon_id: '0004',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票3'
      }, {
        icon_id: '0005',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票455555555'
      }, {
        icon_id: '0006',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票5'
      }, {
        icon_id: '0007',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门6'
      }, {
        icon_id: '0008',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票7'
      }, {
        icon_id: '0009',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票8'
      }, {
        icon_id: '0010',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票9'
      }],
      swiperOption: {
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
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
