<template>
  <!-- v-loading 是 element-ui 组件中的属性 加载动画开关 -->
  <div class='secDiv'
       v-loading='loading'>
    <div v-for='item of articleLists'
         :key='item.length'>
      <!-- 点击头像进行路由跳转 跳转到用户页面-->
      <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
        <img :src='item.author.avatar_url'
             :title='item.author.loginname'>
      </router-link>
      <div class='textDiv'>
        <!-- 点击文本进行路由跳转 跳转到文章页面-->
        <router-link :to='{name:"ArticleRoute",params:{id:item.id}}'>{{item.title}}</router-link>
        <div class='stuff'>
          <span>回复：{{item.reply_count}}</span>
          <span>创建于：{{dealTime(item.create_at)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainSection',
  data () {
    return {
      item: {
        author: {
          loginname: 'test' // 设置默认值，否则可能报错，原因是Vue一系列初试化过程中，调用到它，却没赋值。
        }
      },
      loading: true
    }
  },
  computed: {
    // 把 state中 articleLists 作为计算属性，方便直接使用
    articleLists () {
      return this.$store.state.articleLists
    }
  },
  methods: {
    // 滚动页面函数
    scrollMethod () {
      const sumH = document.body.scrollHeight || document.documentElement.scrollHeight
      const viewH = document.documentElement.clientHeight
      const scrollH = document.body.scrollTop || document.documentElement.scrollTop
      if (viewH + scrollH >= sumH) {
        // 如果到了页面底部，则调用 getData 函数
        this.getData()
      }
    },
    // 获取数据函数
    getData () {
      this.$store.dispatch('getArticleLists')
    },
    // 时间格式化
    dealTime (time) {
      return String(time).match(/.{10}/)[0]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollMethod)
  },
  created () {
    this.getData()
  },
  watch: {
    // 如果 文章列表数据发生变化， 这个 articleLists 函数就会运行
    articleLists (val) {
      if (val) {
        // 把加载页面进行关闭
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.secDiv {
  width: 100%;
  background: #f9fafc;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  padding: 2rem;
  min-height: 40rem;
}

a {
  text-decoration: none;
}

.secDiv > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
  border-bottom: 2px solid #c0ccda;
  padding-bottom: 1rem;
}

.secDiv > div img {
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
}

.textDiv {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.textDiv a {
  color: black;
  font-size: 25px;
}

.textDiv a:visited {
  color: grey;
}

.stuff {
  font-size: 17px;
  margin-top: 1rem;
  color: #8492a6;
}

.stuff span:first-child {
  margin-right: 2rem;
}
</style>
