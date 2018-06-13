<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="100%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDialogClick">取 消</el-button>
        <el-button type="primary" @click="handleDialogClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DialogDt',
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
    }
  }
}
</script>

<style scoped>

</style>
