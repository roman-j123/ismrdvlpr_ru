<template>
  <section class="about">
    <h2 class="about__title title">Резюме</h2>
    <div class="about__section resume">
      <h3 class="resume__title">
        <span 
        class="resume__lookingjob"
        :class="{ 'resume__lookingjob_true': store.lookingJob === true }">
        </span>
        {{ store.fullname }}
      </h3>
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
          <h4 class="list__item-header">{{ course.attributes.title }}</h4>
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
  .resume__title {
    display: flex;
    align-items: center;
  }
  .resume__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  .resume__lookingjob {
    margin: 0 10px 0 0;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
  }
  .resume__lookingjob_true {
    background-color: green;
  }
  .list_courses {
    justify-content: space-between;
  }
  .list__item {
    margin: 0 10px 0 0;
  }
  .list__item_course {
    padding: 20px 10px;
    margin: 0 0 0 0;
    max-width: 280px;
    width: 100%;
    background-color: #f8f4ff;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .list__item-header {
    margin: 0;
  }
</style>
