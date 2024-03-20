<template>
  <v-app>
    <!-- Navigation Drawer para Mobile -->
    <v-navigation-drawer v-model="drawer" app temporary v-if="isMobile">
      <v-list dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Casa</v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/primeira-edicao')">
          <v-list-item-icon>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Primeira Edição</v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/')">
          <v-list-item-icon>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Novo item</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <!-- Alterar cores do Site -->
   
    <AlterarCoresSite />
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AlterarCoresSite from './components/Cores/AlterarCoresSite.vue';

const drawer = ref(false);
const drawerTop = ref(false);
const router = useRouter();

// Função para navegar
function goTo(route) {
  router.push(route);
  drawerTop.value = false; // Opcional: fecha o menu após a navegação
}

console.log('Rota atual:', router.currentRoute.value.path)

</script>


<style>
:root {
  --primary-color: #124c74;
  --menu-bg-color: #124c74;
  --menu-text-color: #d6c4a8;
  --secondary-color: #422e00;
  --secondary-color2: #281d0a;
  --tertiary-color: #6c7540;
  --accent-color: #ecd5af;
  --neutralLight-color: #d7cfb4;
  --background-color: #f6f6f6;
}

.v-main {
  background-image: url('./assets/bg.jpg');
  background-repeat: repeat;
  background-position: center;
  padding: 0rem !important;
}

main.v-main {
  margin-left: 1.5rem;
}

.v-list-item-title :nth-child(1) {
  font-family: 'Island Moments';
}

.v-container.v-locale--is-ltr {
  max-width: 98vw;
  padding-left: 1.8rem;
}


.primeiro-texto {
    font-family: 'Times New Roman', Times, serif;
    background-color: #f6f6f6;
    border-radius: 2rem;
    box-shadow: 0 0 10px #00000050;
    margin: .1rem;
    padding: 1rem;
}

h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--primary-color);
    padding: 1rem;
    text-align: left;
}

h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #a7834a;
    padding: 1rem 0 0 0;
    margin-left: 1rem;
    margin-bottom: .6rem;
    /* text-align: left; */
    border-bottom: solid 2px var(--primary-color);
    width: fit-content;
}

h3 {
    font-size: 1.2rem;
    font-weight: 700;
    padding: .8rem 0 0 0px;
    margin: 0px;
    /* text-align: left; */
}

h4 {
    font-size: 1.1rem;
    font-weight: 700;
    padding: .8rem 0 0 0px;
    margin: 0px;
    /* text-align: left; */
    color: #a7834a;
}

.primeiro-texto p {
    font-size: 1rem;
    font-weight: 300;
    padding: 4px;
    margin: 0;
    text-align: justify;
    /* border: solid 1px #00000050; */
    width: fit-content;
    margin: auto;
}

@media screen and (min-width: 1024px) {
  .primeiro-texto {
    padding: 4rem !important;
    text-align: center;
  }
}

@media screen and (max-width: 1024px) {
  main.v-main {
    padding-left: 2rem !important;
  }

  main.v-main .v-container {
    padding: 0;
    margin: 0;
  }

  #casa h1 {
    font-size: 3rem !important;
  }

  #casa h2 {
    font-size: 2rem !important;
  }

  #casa img[data-v-08e32229] {
    width: 100% !important;
    height: 200px;
  }

  .patrocinadores {
    margin-left: 2rem !important;
  }

  .patrocinio img {
    max-width: 70vw;
  }

  article {
    border-radius: 0px !important;
  }

  article:first-of-type {
    border-radius: 20px 20px 0px 0px !important;
  }

  article:last-of-type {
    border-radius: 0px 0px 20px 20px !important;
  }

  .v-main {
    padding: 0 !important;
    padding-left: 1rem !important;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .v-card {
    padding: 2px;
    margin: 2px;
  }

  .v-card-text {
    padding: 0;
    margin: 0;
  }
}

.v-toolbar__content,
.v-navigation-drawer__content,
.v-bottom-navigation,
.v-navigation-drawer,
.v-tabs,
.v-tab {
  /* color: #ffffff; */
  /* color: var(--primary-color); */
  /* text-shadow: 0 1px 1px var(--primary-color); */
  /* color: #88162b;
  background-color: var(--primary-color-menu) !important; */
  color: var(--menu-text-color);
  background-color: var(--menu-bg-color) !important;
  overflow: visible;
  padding: 0;
}

.v-list:nth-child(odd) {
  background: var(--primary-color-menu);
}

.v-list-item--density-default.v-list-item--one-line {
  min-height: 8px !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.v-container.v-locale--is-ltr {
  padding: 2px;
}

.v-navigation-drawer__content {
  overflow: visible !important;
}

.logo-menu .v-list-item__spacer {
  padding: 2px;
  margin: 2px;
}

.logo-menu .v-list-item-title {
  font-family: 'Island Moments';
  font-size: 30px !important;
  overflow: visible;
  padding: 20px !important;
}

.v-list.v-theme--light.bg-transparent.v-list--density-default.v-list--one-line {
  padding: 2px 0;
}

.v-list-item-title {
  font-size: 9pt !important;
}

.v-list-item-subtitle {
  font-size: 9pt !important;
}

.v-navigation-drawer,
.v-navigation-drawer--left,
.v-navigation-drawer--expand-on-hover,
.v-navigation-drawer--rail,
.v-navigation-drawer--active,
.v-navigation-drawer--mobile {
  position: fixed !important;
}
</style>