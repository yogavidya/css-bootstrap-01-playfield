<template>
  <div id="app" class="container-fluid">
    <!-- Il navigatore va in APP.VUE, non in HOME.VUE che è solo la route principali -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test-view">TestView</router-link> |
      <router-link to="/containers">Containers</router-link> |
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
}
</script>

<style>

</style>
<script>
export default {

}
</script>

<style>

</style>

<style lang="scss">
// Qui gli stili globali e quelli riferiti ad app e a html

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgrey;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>
