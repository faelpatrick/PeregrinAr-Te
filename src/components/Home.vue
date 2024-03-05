<template>
  <v-navigation-drawer v-model="drawer" app expand-on-hover rail>
    <v-list dense>

      <v-list>
        <v-list-item prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te" subtitle="" style="
            font-family: 'Island Moments'; 
            font-size: 32px;">
        </v-list-item>
      </v-list>
      <v-list-item key="HOME" prepend-icon="mdi-home" title="Home" @click="$router.push('/')">
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