<template>
  <div id="app">
    <!-- 路由的内容被加载一次后就存入缓存，下次加载相同内容直接调用 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
