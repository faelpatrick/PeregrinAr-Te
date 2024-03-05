<template>
  <v-app>
    <!-- NavBar Superior -->
    <v-app-bar app :color="colors.secondary" dark>
      <img src="./assets/logo.png" style=" height: 90%; margin-left: 20px;" alt="">
      <v-toolbar-title>PeregrinAr-Te</v-toolbar-title>
    </v-app-bar>

    <!-- Conteúdo -->
    <v-main :style="{ backgroundColor: colors.background }">
      <v-container>
        <!-- Título -->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <h1 class="text-h4 text-center" :style="{ color: colors.secondary }">Bem-vindo ao PeregrinAr-Te</h1>

            <v-divider class="my-3"></v-divider>
            <div class="blue">
              <p class="text-center" :style="{ color: colors.neutralLight}">
                Este é um projeto de arte e cultura que visa promover a arte e a cultura em geral, com foco na arte sacra
                e na peregrinação.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- Aqui vai o restante do seu conteúdo -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const colors = ref({
      primary: '#124c74',
      secondary: '#422e00',
      tertiary: '#6c7540',
      accent: '#ecd5af',
      neutralLight: '#d7cfb4',
      background: '#f6f6f6',
    });

    return { colors };
  },
};
</script>

<style>

.v-app-bar, .v-toolbar__content{
  height: 80px;
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
</style>
