<template>
  <b-card no-body>
    <b-tabs pills card vertical v-model="tabindex">
      <b-tab v-for="[id, room] of sorted_rooms" :key="id" :title="room.nome">
        <RoomEvents :events="selected_events"/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>


<script>
import { mapState } from "vuex";
import RoomEvents from "@/components/RoomEvents.vue";

/*        <b-form-input @input="select" v-model="query" placeholder="Search"></b-form-input>
 <RoomEvent v-for="event in selected_events" :event="event" :key="event.id"/>
 */
export default {
  name: "home",
  components: {
    RoomEvents
  },
  data() {
    return {
      tabindex: 0,
      query: ""
    };
  },
  computed: {
    ...mapState(["rooms", "events"]),
    sorted_rooms() {
      if (this.rooms === null) return [];
      return Object.entries(this.rooms).sort(([i, m], [j, n]) =>
        m.nome.localeCompare(n.nome)
      );
    },
    selected_events() {
      if (this.rooms === null || this.events === null) return [];
      let current_room = this.sorted_rooms[this.tabindex];
      if (current_room === undefined) return [];
      return Object.values(this.events)
        .filter(
          e =>
            e.CodiceAula ==
            current_room[0] /*&&
          (this.query == "" || e.nome.indexOf(this.query) != -1)*/
        )
        .sort((e, f) => e.timestamp_from - f.timestamp_from);
    }
  },
  beforeMount() {
    this.$store.dispatch("fetch_data");
  },
  methods: {}
};
</script>

<style>
.container-fluid {
  margin-top: 1em;
}
</style>