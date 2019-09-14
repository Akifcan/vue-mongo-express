import Vue from 'vue'
import Router from 'vue-router'

const Posts = () => import('@/components/Post')
const AddPost = () => import('@/components/AddPost')
const PostDetail = () => import('@/components/PostDetail')

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/add',
    name: 'add',
    component: AddPost,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostDetail,
  }

  ],
  mode: 'history'
})
