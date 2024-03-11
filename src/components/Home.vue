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
      <v-list-item key="Primeira Edição" prepend-icon="mdi-palette" title="Sou peregrina desde sempre!"
        @click="$router.push('/primeira-edicao')">
      </v-list-item>
      <v-list-item key="Primeira Edição" prepend-icon="mdi-palette" title="Primeira Edição"
        @click="$router.push('/primeira-edicao')">
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

  <!-- Conteúdo -->
  <v-main>
    <v-container>
      Hello World
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';

const drawer = true;

</script>

<style >







</style>