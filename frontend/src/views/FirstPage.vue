<template>
  <section class="person">
    <div class="wisdom">
      <h2 class="wisdom__text">
        Привет! Меня зовут Роман Исмагилов, я <b class="wisdom__work">junior frontend-developer</b>
      </h2>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FirstPage',
}

</script>

<style>
.person {
  margin: var(--mt) 0 0 0;
}
.wisdom {
  margin: 0 0 var(--mt) 0;
  padding: 10px 15px;
  border-left: 5px solid #800080;
  box-sizing: border-box;
}
.wisdom__text {
  margin: 0;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
}
.wisdom__work {
  padding: 0 0 6px 0;
  box-shadow: 0 5px 0px 0 black;
}
@media (max-width: 570px) {
  .wisdom {
    padding: 5px 10px;
    border-left: 2px solid #800080;
  }
  .wisdom__text {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
  .wisdom__work {
    box-shadow: none;
  }
}
</style>