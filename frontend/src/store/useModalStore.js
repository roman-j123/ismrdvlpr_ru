import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => ({
    modalState: false,
    modalData: {},
    API_URL: process.env.VUE_APP_API_URL,
  }),
  getters: {
    getImageUrl: (state) => {
      return (image) => state.API_URL + image;
    }
  },
  actions: {
    toggleModal(data) {
      document.querySelector('body').classList.toggle('overflow');
      this.modalState = !this.modalState;
      this.getModalData(data);
    },
    getModalData(data) {
      this.modalData = data;
    }
  }
})