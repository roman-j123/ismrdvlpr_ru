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
                :key="post.id"
                :to="{
                  name: 'NotePage', 
                  params: {
                    id: post.id,
                  },
                }">
                <h2 class="article__title title">{{ post.attributes.title }}</h2>
              </router-link>
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
      font-size: 1.17rem;
      line-height: 1.27rem;
    }
  }
</style>
