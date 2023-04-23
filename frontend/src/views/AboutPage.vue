<template>
  <section class="about">
    <h2 class="about__title title">Резюме</h2>
    <div class="about__section resume">
      <h3 class="resume__title">{{ store.fullname }}</h3>
      <span>{{ store.birthday }}, Москва</span>
    </div>
    <div class="about__section resume">
      <h3 class="resume__title">Ключевые навыки</h3>
      <ul class="resume__list list">
        <li class="list__item" v-for="tech in store.technologies" :key="tech.id">
          {{ tech.attributes.name }}
        </li> 
      </ul>
    </div>
    <div class="about__sction resume">
      <h3 class="resume__title">Портфолио</h3>
    </div>
    <div class="about__section resume">
      <h3 class="resume__title">Повышение квалификации, курсы</h3>
      <ul class="resume__list list list_courses">
        <li class="list__item list__item_course" v-for:="course in store.courses" :key="course.id">
          <h4>{{ course.attributes.title }}</h4>
          <span>{{ course.attributes.courseName }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { useResumeStore } from '../store/useResumeStore';
export default {
  name: 'AboutPage',
  setup() {
    const store = useResumeStore();
    store.resumeResponse();
    return {
      store
    }
  }
}
</script>

<style>
  .about {
    margin-top: var(--mt);
  }
  p {
    margin: 0;
  }
  .resume__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  .list_courses {
    justify-content: space-between;
  }
  .list__item {
    margin: 0 10px 0 0;
  }
  .list__item_course {
    margin: 0 0 0 0;
  }
</style>
