import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

export default new Vuex.Store({
  state: {
    food: FOOD,
    tweets: [],
  },
  mutations: {
    add(state, {kind, name, price}) {
      state.food[kind].push({name, price});
    },
    add_fruits(state, data) {
      state.food.fruits.push(...data);
    }
  },
  actions: {
    load_fruits({commit}) {
      fetch('/data/fruits.json').then(req => req.json()).then(data => {
        commit('add_fruits', data)
      });
    }
  }
})
