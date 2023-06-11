<template>
    <main class="main">
      <div v-if="store.errorMessage">
        {{ store.errorMessage }}
      </div>
      <ul class="post__list" v-else>
        <li class="post__item" v-for="post in store.posts" :key="post.id">
          <article class="article">
            <header class="article__header">
              <router-link
                class="article__link" 
                :key="post.id"
                :to="{
                  name: 'NotePage', 
                  params: {
                    id: post.id,
                  },
                }">
                <h2 class="article__title">{{ post.attributes.title }}</h2>
              </router-link>
              <span>{{ post.attributes.date }}</span>
            </header>
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
    store.errorMessage = null;
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
  
  .post__item:last-child {
    margin: 0;
  }
  .article__header {
    margin: 0 0 var(--m-title) 0;
  }
  .article__link {
    text-decoration: none;
    color: black;
  }
  .article__link:hover {
    text-decoration: underline;
  }
  .article__title {
    margin: 0 0 0 0;
    font-size: 1.8rem;
    line-height: 1.8rem;
    text-transform: uppercase;
  }
  @media (max-width: 570px) {
    .article__title {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }
</style>
