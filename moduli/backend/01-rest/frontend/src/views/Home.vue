<template>
  <b-card no-body>
    <b-tabs pills card vertical v-model="tabindex">
      <b-tab v-for="(user, idx) of users" :key="idx" :title="user.screen_name">
        <Tweets :tweets="tweets"/>
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
    };
  },
  watch: {
    tabindex() {
      if (this.users != null) {
        let current_user = this.users[this.tabindex];
        if (current_user != null) 
          this.$store.dispatch('fetch_tweet', current_user.id);
      }
    }
  },
  computed: {
    ...mapState(['users', 'tweets']),
  },
  beforeCreate() {
    this.$store.dispatch('fetch_users');
  },
};
</script>

<style>
.container-fluid {
  margin-top: 1em;
}
</style>