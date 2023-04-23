<template>
  <header class="header">
    <div class="header__container"> 
      <img :src="getApiData.avatar" class="header__avatar">
      <div class="header__name">
        <h1 class="header__title">{{getApiData.page.sitename}}</h1>
        <p class="header__description">
          {{getApiData.page.description}}
        </p>
        <ul class="header__navigation navigation">
          <li class="navigation__item">
            <router-link 
              :to="{ name: 'HomePage' }"
              class="navigation__link"
              >На главную</router-link>
          </li>
          <li class="navigation__item">
            <router-link 
              :to="{ name: 'AboutPage'}"
              class="navigation__link"
              >Резюме</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'AppHeader',
  setup() {
    const API_URL = process.env.VUE_APP_API_URL;
    const getApiData = reactive({
      avatar: null,
      page: {}
    });
    let errorMessage = ref(null);
    const pageDataResponse = () => { 
      axios.get(`${API_URL}/api/homepage?populate=*`)
      .then((response) => {
        getApiData.page = {
          sitename: response.data.data.attributes.sitename,
          description: response.data.data.attributes.description
        };
        getApiData.avatar = `${API_URL}${response.data.data.attributes.photo.data.attributes.url}`;
      }) 
      .catch((error) => {
        errorMessage.value = error;
      })
    };
    onMounted(pageDataResponse);
    return {
      getApiData,
      errorMessage
    }
  }
}
</script>
<style>
  .header {
    margin-top: var(--mt);
  }
  .header__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
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
    font-size: .9rem;
    margin: 0 0 15px 0;
  }
  .header__navigation {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  }
  .navigation__item {
    margin: 0 20px 0 0;
  }
  .navigation__item:last-child {
    margin: 0;
  }
  .navigation__link {
    text-decoration: none;
    font-weight: 400;
    color: #1a1110;
  }
  .navigation__link:hover {
    color: #800080;
  }
  .navigation__link_active {
    color: #800080;
  }
  @media (max-width: 570px){
    .header__container {
      justify-content: center;
      flex-direction: column;
    }
    .header__avatar {
      width: 150px;
      height: 150px;
    }
    .header__title {
      font-size: 2rem;
      line-height: 2rem;
    }
    .header__description {
      font-size: .7rem;
      line-height: .7rem;
    }
    .header__avatar {
      margin: 0 0 15px 0;
    }
    .header__name {
      margin: 0 0 0 0;
    }
    .header__navigation {
      justify-content: center;
    }
  }
</style>