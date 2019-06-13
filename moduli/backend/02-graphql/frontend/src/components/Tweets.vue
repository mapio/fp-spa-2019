<template>
  <b-card-group deck>
    <b-card
      style="max-width: 20rem;"
      v-for="tweet of tweets"
      :key="tweet.id"
    >
    {{tweet.text}}
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "Tweets",
  props: {
    tweets: Array
  }
};
</script>
