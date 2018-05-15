let defaultCity = '上海'
try {
  // 尝试localStorage功能是否好用
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (err) {}

export default {
  city: defaultCity
}
