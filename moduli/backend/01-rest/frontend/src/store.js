import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    tweets: []
  },
  mutations: {
    add_users(state, users) {
      state.users = users;
    },
    add_tweets(state, tweets) {
      state.tweets = tweets;
    }
  },
  actions: {
    fetch_data({commit}) {
      axios.all([
        axios.get("http://localhost:3000/users"),
        axios.get("http://localhost:3000/tweets")
      ]).then(axios.spread((resp_users, resp_tweets) => {
        commit('add_users', resp_users.data);
        commit('add_tweets', resp_tweets.data);
      }));
    }
  }
})
