<template>
  <div id="app">
    <!-- Fixed navbar -->
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand href="#">GiroMilano</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <Home/>
    </b-container>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'app', 
  components: {
    Home
  }
}
</script>

