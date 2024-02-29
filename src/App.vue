<template>
  <v-app>
    <!-- NavBar Superior -->
    <v-app-bar app :color="colors.primary" dark>
      <v-toolbar-title>PeregrinAr-Te</v-toolbar-title>
    </v-app-bar>

    <!-- Conteúdo -->
    <v-main :style="{ backgroundColor: colors.background }">
      <v-container>
        <!-- Título -->
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <h1 class="text-h4 text-center" :style="{ color: colors.secondary }">Bem-vindo ao PeregrinAr-Te</h1>
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
      primary: '#6c7540',
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
/* Aqui você pode definir os estilos globais e componentes específicos */
.v-app-bar {
  /* Estilo personalizado para a barra de navegação */
}

.v-main {
  /* Estilo personalizado para o conteúdo principal */
}

/* Você pode adicionar mais estilos conforme necessário */
</style>
