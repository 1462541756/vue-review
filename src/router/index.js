import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Router)

import AddBlog from '../components/AddBlog'
import ShowBlog from '../components/ShowBlogs'
import SingleBolg from '../components/SingleBlog'
export default new Router({
  routes: [
    {path: '/', name: 'showBlogs', component: ShowBlog},
    {path: '/addBlog', name: 'addBlog', component: AddBlog},
    {path:"/singleBlog/:id",name:'singleBlog',component:SingleBolg},
    {path: '*', redirect: '/'}
  ],
  mode: 'history',
});
