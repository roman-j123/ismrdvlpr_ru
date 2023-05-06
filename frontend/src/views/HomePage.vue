<template>
    <main class="main">
      <section class="wisdom">
        <h2 class="wisdom__text">
          Привет! Меня зовут Роман Исмагилов, я <b class="wisdom__work">junior frontend-developer</b>
        </h2>
      </section>
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
  .wisdom {
    margin: 0 0 var(--mt) 0;
    padding: 10px 20px;
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
    padding: 0 0 5px 0;
    box-shadow: 0 5px 0px 0 black;
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
    .article__title {
      font-size: 1.1rem;
      line-height: 1.2rem;
    }
  }
</style>
