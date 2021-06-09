<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
      Navbar
  }
}

</script>

<style scoped>

</style>
