<template>
  <div id="app">
    <Gradimento :nomi="['Massimo', 'Pierino']"/> 
    <Gradimento :nomi="['Carla', 'Bruna']"/> 
  </div>
</template>

<script>
import Gradimento from './components/Gradimento.vue'

export default {
  name: 'app',
  components: {
    Gradimento
  }
}
</script>

<style>
#app {
  margin: 60px;
}
</style>
