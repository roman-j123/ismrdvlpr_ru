import { defineStore } from "pinia";
const API_URL = process.env.VUE_APP_API_URL;
import axios from "axios";

export const useFirstPageStore = defineStore('technologies', {
  state: () => ({
    technologies: [],
    errorMessage: '',
  }),
  getters: {
    showMainPage(store) {
      return store.technologies.filter((item) => {
        return item.attributes.showMainPage === true;
      })
    },
    getImageUrl: () => {
      return (image) => `${API_URL + image}`;
    }
  },
  actions: {
    getTechnologies() {
      axios.get(`${API_URL}/api/technologies?populate=*`)
        .then((response) => {
          this.technologies = response.data.data;
        })
        .catch((error) => {
          this.errorMessage = error;
        })
    }
  }
})