import gettopics from '../api/gettopics'
import getTopicById from '../api/gettopicsdetail'
import getUserByName from '../api/getuserdetail'
export default {
  getArticleLists (context) {
    context.commit('addArticleNumber')
    const number = context.getters.getArticleNumber
    // 获取文章列表
    gettopics({
      page: 1,
      limit: number,
      mdrender: 'false'
    }).then((res) => {
      context.commit('addArticleLists', res.data)
    }).catch((res) => {
      console.log('MaiSec.vue: ', res)
    })
  },
  // 获取文章详细信息
  getArticle (context, id) {
    getTopicById(id).then((res) => {
      if (res.success === true) {
        context.commit('addArticle', res.data)
        context.commit('addArticleAuthor', res.data.author.loginname)
      } else {
        console.log('Sorry, Something wrong happened when getting the remote data')
      }
    }).catch((res) => {
      console.log('ArticleCom.vue: ', res)
    })
  },
  // 获取用户详细信息
  getUserInfo (context, loginame) {
    getUserByName(loginame).then((res) => {
      context.commit('addUserInfo', res.data)
    }).catch((res) => {
      console.log('SideSec.vue :', res)
    })
  }
}
