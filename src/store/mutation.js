export default {
  changeCity (state, city) {
    state.city = city
    try {
      // 尝试将city添加到localStorage中
      localStorage.city = city
    } catch (err) {}
  },
  handleDialogClick (state, dialogIsShow) {
    state.dialogIsShow = dialogIsShow
    try {
      // 尝试将city添加到localStorage中
      localStorage.dialogIsShow = dialogIsShow
    } catch (err) {}
  }
}
