import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.css'
import store from './store/Index'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
