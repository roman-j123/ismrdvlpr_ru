<template>
    <main class="main">
      <div v-if="errorMessage">
        {{ errorMessage }}
      </div>
      <ul class="post__list" v-else>
        <li class="post__item" v-for="post in getApiData.posts" :key="post.id">
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
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';


export default {
  name: "HomePage",

  setup() {
    const API_URL = process.env.VUE_APP_API_URL;
    const getApiData = reactive({
      posts: [],
    });
    let errorMessage = ref(null);
    const postsResponse = () => { 
      axios.get(`${API_URL}/api/posts?sort=publishedAt:desc`)
      .then((response) => {
        getApiData.posts = response.data.data;
      })
      .catch((error) => {
        errorMessage.value = error;
      }); 
    }; 
    onMounted(postsResponse)
    return {
      getApiData,
      errorMessage,
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
