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
              <span class="article__date">{{ post.attributes.date }}</span>
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
    margin: 0 0 20px 0;
    display: inline-block;
  }
  .post__item:last-child {
    margin: 0;
  }
  .article__header {
    display: flex;
    flex-direction: column;
  }
  .article__link {
    text-decoration: none;
    color: black;
  }
  .article__title {
    display: inline;
    font-size: 2.3rem;
    line-height: 2.7rem;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 4px #800080;
    transition: .2s ease-in-out;
  }
  .article__link:hover .article__title {
    color: #800080;
  }
  .article__date {
    font-size: .9rem;
    line-height: 1.5rem;
    color: #800080;
    font-weight: 700;
  }
  @media (max-width: 570px) {
    .article__title {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .article__date {
      line-height: 1.3rem;
    }
  }
</style>
