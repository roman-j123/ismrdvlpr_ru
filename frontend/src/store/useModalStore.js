import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => ({
    modalState: false,
    modalData: {}
  }),
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