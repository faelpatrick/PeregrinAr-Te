<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>PeregrinAr-Te</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/')">Home</v-btn>
      <v-btn text @click="$router.push('/primeira-edicao')">Primeira Edição</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavImg from './components/NavImg.vue';

</script>


<style>
:root {
  --primary: #124c74;
  --secondary: #422e00;
  --tertiary: #6c7540;
  --accent: #ecd5af;
  --neutralLight: #d7cfb4;
  --background: #f6f6f6;
}

.v-toolbar-title {
  font-family: 'Island Moments';
  font-size: 2.8rem !important;
}

.v-main {
  background-image: url(https://img.freepik.com/fotos-premium/fundo-de-textura-de-papel-retro-vintage-velho-grunge_47840-948.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais);
  background-repeat: repeat;
  background-position: center;
}


.blue {
  color: #6c7540;
  background-color: #124c74;
  padding: 4rem;
  border-radius: 2rem;
}

.text-h4 {
  font-size: 2.5rem;
  font-weight: 500;
  padding: 2rem 0;
}


p {
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1rem 0;
}

main.v-main .v-container {
  padding-left: 4rem;
}

.v-toolbar__content,
.v-navigation-drawer__content,
.v-bottom-navigation,
.v-navigation-drawer,
.v-tabs,
.v-tab {
  color: #ffffff;
  background-color: var(--secondary);
}

.v-tab .v-icon {
  font-size: 24px;
}

.v-tab span {
  display: block;
  font-size: 12px;
}
</style>