<template>
  <section class="container">
    <header class="header">
      <div class="header__container"> 
        <img :src="getApiData.avatar" class="header__avatar">
        <div class="header__name">
          <h1 class="header__title">{{ getApiData.page.sitename }}</h1>
          <p class="header__description">
            {{ getApiData.page.description }}
          </p>
        </div>
      </div>
    </header>
    <main class="main">
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <ul class="post__list" v-else>
      <li class="post__item" v-for="post in getApiData.posts" :key="post.id">
        <h2>{{ post.attributes.title }}</h2>
        <p>{{ post.attributes.text }}</p>
      </li>
    </ul>
  </main>
  <footer class="footer">
    <span class="footer__version">version. {{ version }}</span>
  </footer>
  </section>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';


export default {
  name: "App",
  setup() {
    const API_URL = process.env.VUE_APP_API_URL;
    const getApiData = reactive({
      posts: [],
      avatar: '',
      page: {}
    });
    let errorMessage = ref(null);
    const postsResponse = () => axios.get(`${API_URL}/api/posts?sort=publishedAt:desc`); 
    const pageDataResponse = () => axios.get(`${API_URL}/api/homepage?populate=*`);
    function getAllData () {
      axios.all([pageDataResponse(), postsResponse()])
      .then(axios.spread((pageData, postList) => {
        getApiData.page = {
          sitename: pageData.data.data.attributes.sitename,
          description: pageData.data.data.attributes.description
        };
        getApiData.avatar = `${API_URL}${pageData.data.data.attributes.photo.data.attributes.url}`;
        getApiData.posts = postList.data.data;
      }))
      .catch((error) => {
        errorMessage.value = error;
      });
    }
    onMounted(getAllData)
    return {
      getApiData,
      errorMessage,
    }
  },
  data () {
    return {
      version: '0.2'
    }
  },
}
</script>

<style>
:root {
  --mt: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: var(--mt);
}

.container {
  margin: 0 auto;
  width: 80%;
}
.header__container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header__name {
  margin: 0 0 0 30px;
  display: flex;
  flex-direction: column;
}
.header__avatar {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.header__title {
  margin: 0;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
}
.header__description {
  margin: 0;
}
.main {
  margin-top: var(--mt);
}
.post__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer {
  margin-top: var(--mt);
  margin-bottom: var(--mt);
  width: 100%;
  display: flex;
}
.footer__version {
  font-size: .7rem;
}
</style>
