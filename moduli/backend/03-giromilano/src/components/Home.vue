<template>
  <div>
    <b-form @submit.prevent="search_stop" inline class="mb-3">
      <b-input v-model="query" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Indirizzo…"></b-input>
      <b-button variant="danger" @click="search_stop">Cerca</b-button>
    </b-form>
    <div class="progress mb-3" style="height: 2px;">
      <div class="progress-bar bg-danger" role="progressbar" :style="`width: ${100 - parseInt(done * 100.0 / todo)}%`" :aria-valuenow="done" aria-valuemin="0" :aria-valuemax="todo"></div>
    </div>
    <b-card-group columns>
      <AtmStop
        v-for="[desc, lines] in Object.entries(stops)"
        :key="desc"
        :stop="desc"
        :lines="lines"
      />
    </b-card-group>
  </div>
</template>


<script>
import axios from "axios";

import AtmStop from "@/components/AtmStop.vue";

export default {
  name: "Home",
  components: { AtmStop },
  data() {
    return {
      todo: 0,
      done: 0,
      query: "",
      stops: {}
    };
  },
  methods: {
    search_stop() {
      axios
        .post(
          "https://giromilano.atm.it/proxy.ashx",
          `url=tpPortal/tpl/stops/search/${this.query}`
        )
        .then(json => {
          this.stops = {};
          this.todo = json.data.length;
          this.done = 0;
          json.data.forEach(stop => {
            axios
              .post(
                "https://giromilano.atm.it/proxy.ashx",
                `url=tpPortal/geodata/pois/${stop.Code}`
              )
              .then(json => {
                let stop = json.data;
                let nome_fermata = stop.Description;
                if (!(nome_fermata in this.stops))
                  this.$set(this.stops, nome_fermata, {});
                stop.Lines.forEach(line => {
                  let nome_linea = line.Line.LineCode;
                  if (!(nome_linea in this.stops[nome_fermata]))
                    this.$set(this.stops[nome_fermata], nome_linea, []);
                  this.stops[nome_fermata][nome_linea].push({
                    name: line.Line.LineDescription,
                    msg: line.WaitMessage
                  });                  
                });
                this.done++;
              });
          });
        }).catch(error =>{this.stops = {}});
    }
  }
};
</script>

<style>
.container-fluid {
  margin-top: 1em;
}
</style>    