// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.config.productionTip = false

Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8)
  }
})
Vue.directive("theme",{
  bind(el,binding,vnode){
/*    if (binding.value == 'wide') {
      el.style.maxWidth="1260px";
    }
    else {
      el.style.maxWidth="560px";
    }*/

    if (binding.arg == 'column') {
      el.style.background = '#f94a48';
      el.style.padding = '20px';
      // console.log(binding)
    }

  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
