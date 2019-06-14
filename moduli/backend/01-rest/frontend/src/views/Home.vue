<template>
  <b-card no-body>
    <b-tabs pills card vertical v-model="tabindex">
      <b-tab v-for="(user, idx) of users" :key="idx" :title="user.screen_name">
        <Tweets :tweets="selected_tweets"/>
      </b-tab>
    </b-tabs>
  </b-card>
</template>


<script>
import {mapState} from 'vuex';

import Tweets from "@/components/Tweets.vue";

export default {
  name: "home",
  components: {
    Tweets
  },
  data() {
    return {
      tabindex: 0,
      query: ""
    };
  },
  computed: {
    ...mapState(['users', 'tweets']),
    selected_tweets() {
      if (this.users != null) {
        let current_user = this.users[this.tabindex];
        if (current_user != null) 
          return this.tweets.filter(t => t.userId == current_user.id)
      }
      return [];
    }
  },
  beforeCreate() {
    this.$store.dispatch('fetch_data');
  },
};
</script>

<style>
.container-fluid {
  margin-top: 1em;
}
</style>