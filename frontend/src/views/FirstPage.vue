<template>
  <section class="person">
    <div class="wisdom">
      <h2 class="wisdom__text">
        Привет! Меня зовут Роман Исмагилов, я <b class="wisdom__work">junior frontend-developer</b>
      </h2>
    </div>
    <h2 class="person__title">SKILLS</h2>
    <ul class="technologies">
      <li 
        class="technologies__item"
        v-for="(item, index) of store.showMainPage" :key="index">
        <img 
          class="technologies__icon"
          :src="getImageUrl(item.attributes.icon.data.attributes.url)" 
          :alt="item.attributes.name">
        <h3>
          {{item.attributes.name}}
        </h3>
      </li>
    </ul>
  </section>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useFirstPageStore } from '@/store/useFirstPageStore'; 
export default {
  name: 'FirstPage',
  setup() {
    const store = useFirstPageStore();
    const { getImageUrl } = storeToRefs(store)
    store.getTechnologies();
    return {
      store,
      getImageUrl
    }
  }
}

</script>

<style>
.person {
  margin: var(--mt) 0 0 0;
  display: flex;
  flex-direction: column;
}
.person__title {
  margin: 0 auto 30px auto;
  font-size: 2.3rem;
  line-height: 2.7rem;
  display: inline-block;
  text-transform: uppercase;
  box-shadow: 0 4px #800080;
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
.technologies {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}
.technologies__item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.technologies__icon {
  display: block;
  width: 80px;
  height: 80px;
  object-fit: cover;
}
@media (max-width: 570px) {
  .person__title {
    font-size: 1.5rem;
    line-height: 2rem;
  }
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
  .technologies__icon {
    width: 50px;
    height: 50px;
  }
}
</style>