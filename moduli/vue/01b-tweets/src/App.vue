<template>
  <div id="app">
    <TweetsTable :tweets='tweets'/>
  </div>
</template>

<script>
import TweetsTable from '@/components/TweetsTable.vue'
import {TWEETS} from '@/tweets.js'

export default {
  name: 'app',
  data() {
    return TWEETS;
  },
  components: {
    TweetsTable,
  },
}
</script>

<style>
#app {
  margin: 60px;
}
</style>
