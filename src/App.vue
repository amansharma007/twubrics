<template>
  <div id="app">
    <h1>Twubrics App</h1>
    <h5>Rubrics for your Twitter Followers!</h5>
    <MainList />
  </div>
</template>

<script>
import MainList from './components/MainList.vue'

export default {
  name: 'app',
  components: {
    MainList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
