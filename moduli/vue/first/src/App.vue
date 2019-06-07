<template>
  <div id="app">
    <ItemList name="Fruit" :items='fruits'/>
    <ItemList name="Vegetables" :items='vegetables'/>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue'
import {DATA} from './main.js'

export default {
  name: 'app',
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
