import Vue from 'vue'
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000" }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider: apolloProvider,
  render: h => h(App)
}).$mount("#app");
