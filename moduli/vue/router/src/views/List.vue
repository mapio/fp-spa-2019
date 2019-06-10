<template>
  <div class="list">
    <h2>This is the list page for {{ $route.params.id }}</h2>
    <ItemList :items='items'/>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'
import {FOOD} from '@/main.js'

export default {
  name: 'list',
  components: {
    ItemList,
  },
  computed: {
    items() {return FOOD[this.$route.params.id]; }
  }
}

</script>