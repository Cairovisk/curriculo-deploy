<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import 'bootstrap-4-grid/css/grid.min.css'
import '@/styles/_font.scss'
import '@/styles/_animations.scss'
export default {
  components: { NavBar }
}
</script>>
<style lang="scss">
#app {
      height: 100%;
      background: $white-secondary;
}
body {
        font-family: $font;
        margin: 0;
        height: 100vh; 
}
</style>
