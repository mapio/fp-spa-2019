import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const URL = 'http://easystaff.divsi.unimi.it/PortaleStudenti/rooms_call.php?view=rooms&include=rooms&sede=23200&date=10-06-2019';

export default new Vuex.Store({
  state: {
    rooms: null,
    events: null
  },
  mutations: {
    add_rooms(state, {rooms}) {
      state.rooms = rooms;
    },
    add_events(state, {table}) {
      let events = {};
      for (let room in table) {
        for (let slot of table[room]) {
          let id = slot.id;
          if (id === undefined) continue;
          events[id] = slot;
        }
      }
      state.events = events;
    }
  },
  actions: {
    fetch_data({commit}) {
      fetch(URL).then(resp => resp.json()).then(data => {
        commit('add_rooms', {rooms: data.rooms});
        commit('add_events', {table: data.table});
      });
    }
  }
})
