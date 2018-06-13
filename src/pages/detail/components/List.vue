<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom" @click.stop="handleClick">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list
          :list="item.children"
        >
        </detail-list>
      </div>
    </div>
    <dialog-dt v-if="dialogVisible"></dialog-dt>
  </div>
</template>

<script>
import DialogDt from '../../home/components/Modal'
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  components: {
    DialogDt
  },
  methods: {
    handleClick () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    display: flex
    align-items: center
    height: .8rem
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-title-icon
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding: 0 .2rem
</style>
