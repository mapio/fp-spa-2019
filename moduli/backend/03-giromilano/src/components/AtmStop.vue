<template>
  <b-card :title="stop">
    <b-list-group v-for="[line, dirs] in Object.entries(lines)" :key="line">
      <AtmLine :line="line" :dirs="dirs"/>
    </b-list-group>
  </b-card>
</template>

<script>
import AtmLine from '@/components/AtmLine.vue';

export default {
  name: "AtmStop",
  components: {AtmLine},
  props: {
    stop: String,
    lines: Object
  }
};
</script>
