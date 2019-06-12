<template>
  <div class="hello">
    <button @click='start -= 5'>←</button> {{ start }} ma<button @click='start += 5'>→</button>
    <table>
      <tr><th @click='sort_rt'>Retweets</th><th @click='sort_text'>Text</th></tr>
      <tr v-for="tweet of tweets.slice(start, start + 5)" :key="tweet.id">
        <td>{{tweet.retweet_count}}</td>
        <td>{{tweet.text}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TweetsTable",
  props: {
    tweets: Array
  },
  data: () => ({
    start: 0,
    rt_dir: 1,
    text_dir: 1
  }),
  methods: {
    sort_rt() {
      this.tweets.sort((t, u) => this.rt_dir * (t.retweet_count - u.retweet_count));
      this.rt_dir = -this.rt_dir;
    },
    sort_text() {
      this.tweets.sort((t, u) => this.text_dir * t.text.localeCompare(u.text));
      this.text_dir = -this.text_dir;
    },
  },
  computed: {}
};
</script>

<style scoped>
table,
tr,
td,
th {
  border: 1pt solid black;
  border-collapse: collapse;
}
</style>