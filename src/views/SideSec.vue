<template>
  <div class='secDiv'
       v-loading.lock='loading'>
    <div>
      <!-- 命名路由有个警告 -->
      <router-link :to='{name: "UserRoute",params:{name: userInfo.loginname}}'>
        <img :src='userInfo.avatar_url'>
      </router-link> &nbsp;
      <span>{{userInfo.loginname}}</span>
    </div>
    <p>
      <span name='score'
            scale='4'>积分&nbsp;</span>{{userInfo.score}}
    </p>
    <p>
      <span name='github'
            scale='4'>网址:</span>https://github.com/{{userInfo.githubUsername}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SideSection',
  data () {
    return {
      loading: true,
      item: {
        author: {
          loginname: 'test'
        }
      }
    }
  },
  computed: {
    // 计算属性
    articleAuthor () {
      return this.$store.state.articleAuthor
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  watch: {
    // 侦听器
    userInfo (val) {
      if (val) {
        this.loading = false
      }
    },
    articleAuthor (val) {
      const url = `${val}`
      this.$store.dispatch('getUserInfo', url)
    }
  },
  created () {
    if (this.articleAuthor) {
      const url = `${this.articleAuthor}`
      this.$store.dispatch('getUserInfo', url)
    }
  }
}
</script>

<style scoped>
.secDiv {
  width: 25%;
  height: 10rem;
  background: #e5e9f2;
  border: 1px solid #ddd;
  word-break: break-all;
  font-size: 21px;
  padding: 2rem;
  position: fixed;
  top: 50px;
  right: 0px;
}
</style>
