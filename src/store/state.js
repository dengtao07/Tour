let defaultCity = '上海'
let showDialogOrNot = false
try {
  // 尝试localStorage功能是否好用
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (err) {}
export default {
  city: defaultCity,
  dialogIsShow: showDialogOrNot
}
