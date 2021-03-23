<template>
  <div id="app">
    <menu1/>
    <display/>
  </div>
</template>

<script>
import menu1 from './components/side-bar/menu'
import display from './components/display/display'

export default {
  name: 'App',
  components: {
    menu1,
    display
  }
}
</script>

<style>
</style>
