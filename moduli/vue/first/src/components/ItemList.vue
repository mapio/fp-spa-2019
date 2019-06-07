<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <ul>
      <Item v-for='item of sorted_items' :key='item.name' :name='item.name' :price='item.price'/>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'ItemList',
  props: {
    name: String,
    items: Array
  },
  components: {
    Item
  },
  computed: {
    sorted_items() {
      return this.items.sort((a, b) => a.name.localeCompare(b.name))
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
