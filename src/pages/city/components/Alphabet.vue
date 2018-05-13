<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (event) {
      // 函数节流，防止函数在短时间内反复执行，通过设置延迟执行函数的方式来实现
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        } // 如果用户频繁的执行touch操作，时间间隔小于设定的值，就会清除上一次延迟执行
        // 重新设定一次延迟执行，重新计时
        this.timer = setTimeout(() => {
          // 为什么一个是offsetTop，另一个是clientY
          const touchY = event.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            // 子组件先向父组件传值，父组件再传递给别的子组件
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
