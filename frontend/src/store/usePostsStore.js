import { defineStore } from "pinia";
const API_URL = process.env.VUE_APP_API_URL;
import axios from "axios";

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    errorMessage: '',
  }),
  actions: {
    postsResponse() {
      axios.get(`${API_URL}/api/posts?sort=publishedAt:desc`)
        .then((response) => {
          this.posts = response.data.data;
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    }
  }
})