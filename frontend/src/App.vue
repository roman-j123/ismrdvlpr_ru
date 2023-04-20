<template>
  <section class="container">
    <AppHeader />
    <router-view />
    <AppFooter 
      :version="this.version"
    />
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      version: '0.2.5',
    }
  }
}
</script>

<style>
:root {
  --mt: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a1110;
}

.container {
  margin: 0 auto;
  width: 80%;
}
</style>