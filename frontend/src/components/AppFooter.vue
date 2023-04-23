<template>
  <footer class="footer">
    <section class="footer__container">
      <h3 class="footer__title title">Социальные сети</h3>
      <ul class=" contacts">
        <li class="contacts__item">
          <a class="contacts__link" href="https://github.com/roman-j123" target="_blank">GitHub</a>
        </li>
        <li class="contacts__item">
          <a class="contacts__link" href="https://vk.com/roman_j123" target="_blank">VK</a>
        </li>
      </ul>
    </section>
    <section class="footer__container">
      <h3 class="footer__title title">Контакты</h3>
      <ul class="contacts">
        <li class="contacts__item">
          <a class="contacts__link" href="mailto:roman.j123@ya.ru">roman.j123@ya.ru</a>
        </li>
        <li class="contacts__item">
          <a class="contacts__link" href="https://t.me/rjonetwothree" target="_blank">@rjonetwothree</a>
        </li>
      </ul>
    </section>
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
    gap: 30px;
  }

  .contacts {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .contacts__item {
    margin: 0 0 10px 0;
  }
  .contacts__item:last-child {
    margin: 0 0 0 0;
  }
  .contacts__link {
    font-weight: 400;
  }
  .footer__version {
    margin-left: auto;
    font-size: .7rem;
  }
  @media (max-width: 570px) {
    .footer {
      flex-direction: column;
    }
  }
</style>