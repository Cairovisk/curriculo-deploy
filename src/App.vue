<template>
  <div id="app">
    <div id="nav" class="teste">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.teste {
  display: flex;
  flex-direction: column-reverse;

}
</style>
