import { defineStore } from "pinia";
const API_URL = process.env.VUE_APP_API_URL;
import axios from "axios";

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    note: {},
    errorMessage: '',
    API_URL: process.env.VUE_APP_API_URL,
  }),
  getters: {
    replaceUploadUrl: (state) => {
      const regex = /\/uploads\//g;
      if (state.note.text) {
        return state.note.text.replace(regex, state.API_URL + '/uploads/');
      }
    }
  },
  actions: {
    postsResponse() {
      axios.get(`${API_URL}/api/posts?sort=publishedAt:desc`)
        .then((response) => {
          this.posts = response.data.data;
        })
        .catch((error) => {
          this.errorMessage = error;
        })
    },
    getPostData(id) {
      axios.get(`${API_URL}/api/posts/${id}`)
        .then((response) => {
          this.note = response.data.data.attributes;
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    }
  }
})