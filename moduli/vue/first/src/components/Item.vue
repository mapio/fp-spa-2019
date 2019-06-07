<template>
    <li>{{name}} (<span :style='color(price)'>{{price}}</span>)</li>
</template>

<script>
export default {
  name: 'Item',
  props: {
      name: String,
      price: Number
  },
  methods: {
    color(price) {
      return price < 20 ? 'background: lightgreen;' : 'background: orange';
    }
  }
}
</script>
