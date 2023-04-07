<template>
    <div v-if="error">
      {{ error }}
    </div>
    <ul class="post__list" v-else>
      <li class="post__item" v-for="post in posts" :key="post.id">
        <h2>{{ post.attributes.title }}</h2>
        <p>{{ post.attributes.text }}</p>
      </li>
    </ul>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data () {
    return {
      posts: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://ismrdvlpr.ru:1337/api/posts')
      this.posts = response.data.data.sort((a, b) => b.id - a.id);
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.post__list {
  margin: 0 auto;
  width: 80%;
  list-style: none;
}
</style>
