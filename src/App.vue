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

.v-list-item-title :nth-child(1) {
  font-family: 'Island Moments';
}

@media screen and (max-width: 1024px) {
  main.v-main .v-container {
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
  color: #ffffff;
  background-color: var(--primary-color);
  overflow: visible;
  padding: 0;
}

.v-list-item--density-default.v-list-item--one-line {
    min-height: 8px !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
}


.v-navigation-drawer__content {
    overflow: visible !important;
}

.logo-menu .v-list-item__spacer
 {
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

.v-list-item.v-list-item--link.v-theme--light.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text:nth-child(odd) {
    background: #0d476f;
}

.v-list-item-title {
    font-size: 9pt !important;
}
.v-list-item-subtitle {
    font-size: 9pt !important;
}

</style>