<template>
  <div id="app">
    <ItemList name="Fruit" :items='fruits'/>
    <ItemList name="Vegetables" :items='vegetables'/>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue'
import {FOOD} from './main.js'

export default {
  name: 'app',
  data() {
    return FOOD;
  },
  components: {
    ItemList,
  },
}
</script>

<style>
#app {
  margin: 60px;
}
</style>
