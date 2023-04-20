<template>
  <footer class="footer">
    <span class="footer__version">version. {{ version }}</span>
  </footer>
</template>
<script>
  export default {
    name: 'AppFooter',
    props: ['version'],
  }
</script>
<style>
  .footer {
    margin-top: var(--mt);
    margin-bottom: var(--mt);
    width: 100%;
    display: flex;
  }
  .footer__version {
    font-size: .7rem;
  }
</style>