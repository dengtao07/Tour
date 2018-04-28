<template>
  <div class="icons">
    <div class="icon" v-for="item of icons" :key=item.icon_id>
      <div class="icon-img">
        <img class="icon-img-content" :src=item.url>
      </div>
      <p class="icon-text">热门景点</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'HomeIcons',
  data: function () {
    return {
      icons: [{
        icon_id: '0001',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      },
      {
        icon_id: '0002',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      },
      {
        icon_id: '0003',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      },
      {
        icon_id: '0004',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      },
      {
        icon_id: '0005',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      },
      {
        icon_id: '0006',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        icon_id: '0007',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        icon_id: '0008',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    background-color: #eee
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
        top: 0
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
</style>
