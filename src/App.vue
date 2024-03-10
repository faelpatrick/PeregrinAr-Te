<template>
  <v-app>
    <!-- Navigation Drawer para Mobile -->
    <v-navigation-drawer v-model="drawer" app temporary v-if="isMobile">
      <v-list dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Home</v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/primeira-edicao')">
          <v-list-item-icon>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Primeira Edição</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const drawerTop = ref(false);
const router = useRouter();

// Função para navegar
function goTo(route) {
  router.push(route);
  drawerTop.value = false; // Opcional: fecha o menu após a navegação
}


</script>


<style>
:root {
  --primary-color: #124c74;
  --secondary-color: #422e00;
  --tertiary-color: #6c7540;
  --accent-color: #ecd5af;
  --neutralLight-color: #d7cfb4;
  --background-color: #f6f6f6;
}

.v-main {
  background-image: url('./assets/bg.jpg');
  background-repeat: repeat;
  background-position: center;
}

@media screen and (max-width: 1024px) {
  main.v-main .v-container {
    padding: 0;
    padding-left: 1.5rem;
    margin: 0;
  }

}

.v-toolbar__content,
.v-navigation-drawer__content,
.v-bottom-navigation,
.v-navigation-drawer,
.v-tabs,
.v-tab {
  color: #ffffff;
  background-color: #124c74;
}

.logo-menu .v-list-item__spacer
 {
  padding: 0;
  margin: 0;
}
  
.logo-menu .v-list-item-title {
  font-family: 'Island Moments';
  font-size: 34px !important;
  overflow: visible;
  padding: 0 !important;
}

</style>