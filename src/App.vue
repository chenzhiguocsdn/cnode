<template>
  <div id="app">
    <cnodeHead></cnodeHead>
    <router-view name="main"></router-view>
    <router-view name="side"></router-view>
  </div>
</template>

<script>
import cnodeHead from './components/cnodeHead.vue'
export default {
  components: {
    cnodeHead
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.main-section {
  margin: auto;
  margin-top: 40px;
  width: 1200px;
}
</style>
