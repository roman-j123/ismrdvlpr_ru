<template>
  <section class="container">
      <AppHeader />
      <router-view />
      <AppFooter 
        :version="this.version"
      />
    <transition name="modal">
      <AppModal 
        v-if="modal.modalState"
        :data="modal.modalData"
      />
  </transition>
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppModal from './components/AppModal.vue';
import { useModalStore } from './store/useModalStore';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppModal
  },
  data() {
    const modal = useModalStore();
    return {
      version: '0.5.0',
      modal,
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
.overflow {
  overflow: hidden;
}
.container {
  margin: var(--mt) auto 0;
  max-width: 792px;
  width: 100%;
}

.title {
  margin: 0 0 var(--m-title) 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity .2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 570px) {
  .container {
    width: 90%;
  }
}
</style>