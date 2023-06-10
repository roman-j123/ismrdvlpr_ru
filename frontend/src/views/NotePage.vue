<template>
  <section class="note">
    <button
      class="note__back"
      @click="returnToPage()"
    >Назад</button>
    <div v-if="store.errorMessage">
      <not-found-page/>
    </div>
    <h2 class="note__header">{{ store.note.title }}</h2>
      <vue-markdown 
      :source="getPostText" 
      :options="{
        html: true,
        breaks: true,
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
    store.getPostData(props.id);
    const getPostText = computed(() => {
      return store.note.text === undefined ? '' : store.note.text;
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
}
</script>

<style scoped>
.note {
  display: flex;
  flex-direction: column;
  margin: var(--mt) 0 0 0;
}
.note__header {
  margin: 0 0 30px 0;
}
.note__back {
  padding: 0 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #00000010;
  font-size: 1.5rem;

  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(10px, -50%);
  height: 70vh;

  border-radius: 10px;
  transition: .2s ease-in-out;
  opacity: .4;
}
.note__back:hover {
  background-color: #00000090;
  color: #ffffff;
  opacity: 1;
}
@media (max-width: 1024px) {
  .note__back {
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
}
</style>