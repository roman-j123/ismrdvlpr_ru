<template>
  <section class="note">
    <button
      class="note__back"
      @click="returnToPage()"
    >Назад</button>
    <div v-if="store.errorMessage">
      <not-found-page/>
    </div>
    <h2 v-else class="note__header">{{ store.note.title }}</h2>
      <vue-markdown 
      class="note__content"
      :source="getPostText" 
      :options="{
        html: true,
        breaks: true,
        typographer: true,
      }"/>
  </section>
</template>

<script>
import { computed } from 'vue';
import VueMarkdown from 'vue-markdown-render';
import NotFoundPage from './NotFoundPage.vue';
import { usePostsStore } from '../store/usePostsStore';
export default {
  components: { NotFoundPage, VueMarkdown },
  name: 'NotePage',
  props: ['id'],
  setup(props) {
    const store = usePostsStore();
    if(!store.errorMessage) {
      store.getPostData(props.id);
    }
    const getPostText = computed(() => {
      return !store.note.text ? '' : store.replaceUploadUrl;
    });
    return {
      store,
      getPostText,
    }
  },
  methods: {
    returnToPage() {
      this.$router.push({ path: '/notes', replace: true });
      this.store.$reset();
    }
  }
};
</script>

<style>
.note {
  display: flex;
  flex-direction: column;
  margin: var(--mt) 0 0 0;
}
.note__header {
  margin: 0 0 30px 0;
  font-size: 2.3rem;
  line-height: 2.3rem;
  text-transform: uppercase;
}
.note__content p {
  font-size: 1.3rem;
  line-height: 1.6rem;
  font-weight: 400;
}
.note__content p > img {
  margin: 0 auto;
  display: block;
  object-fit: cover;
  max-width: 80%;
  width: 100%;
  max-height: auto;
  height: 100%;
}
.note__back {
  display: none;
  margin: 0 0 30px 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.5rem;
  color: #800080;
  align-self: flex-start;
  opacity: 1;
}
.note__back:hover {
  box-shadow: 0 1px #800080;
}
@media (max-width: 1024px) {
  .note__header {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .note__back {
    display: block;
    margin: var(--mt) auto 0 auto;
    order: 3;
    padding: 0 0;
    position: relative;
    height: auto;
    background-color: transparent;
    width: 100px;
    opacity: 1;
    transform: none;
  }
  .note__back:hover {
    box-shadow: none;
  }
  .note__content {
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .note__content p > img {
    border-radius: 10px;
  }
}
</style>