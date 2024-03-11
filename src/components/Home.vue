<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list dense>
      <v-list>
        <v-list-item class="logo-menu" prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te" subtitle="">
        </v-list-item>
      </v-list>
      <v-list-item key="HOME" prepend-icon="mdi-home" title="Casa" @click="$router.push('/')">
      </v-list-item>
      <v-list-item key="Primeira Edição" prepend-icon="mdi-palette" title="Primeira Edição"
        @click="$router.push('/primeira-edicao')">
      </v-list-item>
      <v-list-item key="Primeira Edição" prepend-icon="mdi-watermark" title="Patrocínio"
        @click="onItemClick('Patrocinio')">
      </v-list-item>


    </v-list>
  </v-navigation-drawer>

  <!-- Conteúdo -->
  <v-main>
    <v-container>
      <v-window v-model="activeTab">
        <v-window-item value="Patrocinio">
          <Patrocinio />
        </v-window-item>
      </v-window>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import Patrocinio from './PrimeiraEdicao/Paginas/Patrocinio.vue';

const activeTab = ref('Patrocinio');

const drawer = true;

</script>

<style></style>