<template>
  <b-list-group-item class='m-1'>
    <h5>{{line}}</h5>
    <b-list-group flush>
      <b-list-group-item
        v-for="(dir, idx) in dirs"
        :key="idx"
        class="d-flex justify-content-between align-items-center"
      >
        {{dir.name}}
        <b-badge variant="primary" pill>{{dir.msg}}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </b-list-group-item>
</template>


<script>
export default {
  name: "AtmLine",
  props: {
    line: String,
    dirs: Array
  }
};
</script>

<style>
</style>