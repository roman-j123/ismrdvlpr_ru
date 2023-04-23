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
      version: '0.3',
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('./vendor/fonts/Montserrat-Light.ttf');
  font-weight: 300;
}
@font-face {
  font-family: 'Montserrat';
  src: url('./vendor/fonts/Montserrat-Regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Montserrat';
  src: url('./vendor/fonts/Montserrat-Bold.ttf');
  font-weight: 700;
}
:root {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  --mt: 60px;
  --m-title: 15px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a1110;
}

.container {
  margin: 0 auto;
  width: 80%;
}

.title {
  margin: 0 0 var(--m-title) 0;
}
</style>