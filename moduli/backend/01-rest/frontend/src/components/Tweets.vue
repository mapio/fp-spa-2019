<template>
  <b-list-group>
    <b-list-group-item
      v-for="tweet of tweets"
      :key="tweet.id"
    >
    {{tweet.text}}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "Tweets",
  props: {
    tweets: Array
  }
};
</script>
