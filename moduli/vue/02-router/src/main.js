import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

export const FOOD = {
  fruits: [
    { name: 'Banana', price: 10 },
    { name: 'Apple', price: 20 },
  ],
  vegetables: [
    { name: 'Cucumber', price: 10 },
    { name: 'Potato', price: 20 },
  ],
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
