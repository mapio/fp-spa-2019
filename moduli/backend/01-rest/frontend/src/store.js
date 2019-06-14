import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null,
    tweets: null
  },
  mutations: {
    add_users(state, users) {
      console.log("add_users");
      state.users = users;
    },
    add_tweets(state, tweets) {
      console.log("add_tweets");
      state.tweets = tweets;
    }
  },
  actions: {
    fetch_tweet({ commit }, userId) {
      axios
        .get(`http://localhost:3000/tweets?userId=${userId}`)
        .then(resp => {
          commit("add_tweets", resp.data);
        });
    },
    fetch_users({ commit }) {
      axios.get("http://localhost:3000/users").then(resp => {
        commit("add_users", resp.data);
      });
    }
  }
});
