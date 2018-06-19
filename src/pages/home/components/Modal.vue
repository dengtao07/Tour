<template>
  <div class="warp">
    <el-collapse-transition>
      <el-dialog
        title="提示"
        :visible="dialogVisible"
        width="100%"
        @open="handleDialogClick(true)"
        @close="handleDialogClick(false)"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleDialogClick(false)">取 消</el-button>
          <el-button type="primary" @click="handleDialogClick(false)">确 定</el-button>
          <el-date-picker
            v-model="value1"
            type="date"
            align="center"
            placeholder="日期">
          </el-date-picker>
        </span>
      </el-dialog>
    </el-collapse-transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DialogDt',
  data () {
    return {
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: ''
    }
  },
  computed: {
    ...mapState({
      dialogVisible: 'dialogIsShow'
    })
  },
  methods: {
    ...mapMutations(['toggleShowDialog']),
    handleDialogClick (dialogIsShow) {
      // this.$store.commit('changeCity', city)
      this.toggleShowDialog(dialogIsShow)
    },
    showDatePick () {
      this.showDate = true
    }
  }
}
</script>

<style lang="stylus">
  .el-dialog
    position: absolute
    bottom: 0
    margin: 0 !important
  body
    position relative
</style>
