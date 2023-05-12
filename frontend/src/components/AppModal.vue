<template>
  <section class="modal">
    <div class="modal__wrapper">
      <button 
        class="modal__close"
        @click="modal.toggleModal()"
      ></button>
      <h1 class="modal__title">{{ data.title }}</h1>
      <figure class="modal__figure">
        <img 
          class="modal__image" 
          :src="getImageUrl(data.certificate.data.attributes.url)" 
          :alt="data.courseName">
        <figcaption class="modal__text">{{ data.courseName }}</figcaption>
      </figure>
      
    </div>
  </section>  
</template>

<script>
import { storeToRefs } from 'pinia';
import { useModalStore } from '../store/useModalStore'
export default {
  name: 'AppModal',
  props: ['data'],
  setup() {
    const modal = useModalStore();
    const { getImageUrl } = storeToRefs(modal);
    return {
      modal,
      getImageUrl
    }
  }
}
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .2);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .modal__wrapper {
    padding: 10px;
    background-color: white;
    max-width: 470px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    box-sizing: border-box;
  }
  .modal__figure {
    margin: 0;
  }
  .modal__image {
    max-width: 470px;
    width: 100%;
    max-height: 420px;
    height: 100%;
    object-fit: contain;
  }
  .modal__title {
    margin: 0;
  }
  .modal__close {
    margin-left: auto;
    width: 15px;
    height: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    background-image: url('../img/close.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 570px) {
    .modal__wrapper {
      width: 80%;
    }
    .modal__title {
      margin: 0 0 15px 0;
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
    .modal__text {
      font-size: .9rem;
      line-height: .9rem;
    }
  }
</style>