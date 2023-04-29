<template>
    <main class="main">
      <div v-if="store.errorMessage">
        {{ store.errorMessage }}
      </div>
      <ul class="post__list" v-else>
        <li class="post__item" v-for="post in store.posts" :key="post.id">
          <article class="article">
            <header class="article__header">
              <h2 class="article__title title">{{ post.attributes.title }}</h2>
            </header>
            {{ post.attributes.text }}
          </article>
        </li>
      </ul>
    </main>
</template>

<script>
import { usePostsStore } from '../store/usePostsStore';
export default {
  name: "HomePage",
  setup() {
    const store = usePostsStore();
    store.postsResponse();
    return {
      store
    }
  },

}
</script>

<style>
  .main {
    margin-top: var(--mt);
  }
  .post__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .post__item {
    margin-bottom: 30px;
  }
  .post__item:last-child {
    margin: 0;
  }
</style>
