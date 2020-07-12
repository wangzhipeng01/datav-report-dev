import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// eslint-disable-next-line no-unused-vars
import ECharts from 'echarts'

Vue.prototype.$echarts = ECharts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
