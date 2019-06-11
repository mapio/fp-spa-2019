<template>
  <div class="list">
    <h2>This is the list page for {{ kind }}</h2>
    <ItemList :items='items'/>
    Name: <input v-model=name type=text/>, price <input v-model=price type=number>, <button @click='add'>add</button>
    <span v-if='kind == "fruits"'><button @click='load'>load fruits</button></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ItemList from '@/components/ItemList.vue'

export default {
  name: 'list',
  data() {
    return {name: '', price: 0};
  },
  components: {
    ItemList,
  },
  computed: {
    kind() { return this.$route.params.id;},
    ...mapState(['food']),
    items() {return this.food[this.kind]; }
  },
  methods:{
    add() {
      this.$store.commit('add', {kind: this.kind, name: this.name, price: Number(this.price)});
      this.name = '';
      this.price = '';
    },
    load() {
      this.$store.dispatch('load_fruits');
    }
  }
}

</script>