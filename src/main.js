import Vue from 'vue'
import App from './App.vue'

import ElementUI from './element-ui';
// Vue.use 会自动执行 ElementUI 这个对象当中的 install方法，并且把 Vue 传递过去
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
