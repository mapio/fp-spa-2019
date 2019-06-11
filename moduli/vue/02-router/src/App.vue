<template>
  <div id="app">
    <h1>Menu</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/list/fruits">Fruits</router-link></li>
      <li><router-link to="/list/vegetables">Vegetables</router-link></li>
    </ul>
    <div id=lit>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  margin: 60px;
}
</style>
