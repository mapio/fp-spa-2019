<template>
  <b-card no-body>
    <b-tabs pills card vertical v-model="tabindex">
      <b-tab v-for="(user, idx) of allUsers" :key="idx" :title="user.screen_name">
        <Tweets :tweets="allTweets"/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>


<script>
import gql from 'graphql-tag';
import Tweets from "@/components/Tweets.vue";

export default {
  name: "home",
  components: {
    Tweets
  },
  data() {
    return {
      allUsers: null,
      tabindex: 0,
      query: ""
    };
  },
  computed: {
    current_user_id() {
      if (this.allUsers != null) {
        let current_user = this.allUsers[this.tabindex];
        if (current_user != null) return current_user.id;
      }
      return '<NONE>';
    }
  },
  methods: {},
  apollo: {
    allUsers: {
      query: gql`query {allUsers { id screen_name }}`,
    },
    allTweets: {
      query: gql`query T($user_id: ID) {allTweets(filter: {user_id: $user_id}) { id text }}`,
      variables() { return {'user_id': this.current_user_id}; }
    },
  }
};
</script>

<style>
.container-fluid {
  margin-top: 1em;
}
</style>