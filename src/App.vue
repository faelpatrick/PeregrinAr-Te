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

<script>
export default {
  name: 'App'
}
</script>


<style>
:root {
  --primary: #124c74;
  --secondary: #422e00;
  --tertiary: #4f4507;
  --accent: #ecd5af;
  --neutralLight: #d7cfb4;
  --background: #f6f6f6;
}

.v-toolbar-title {
  font-family: 'Island Moments';
  font-size: 2.8rem !important;
}


main.v-main .v-container {
  padding-left: 4rem;
}

@media screen and (max-width: 1024px){
  main.v-main .v-container {
    padding-left: 1.5rem;
  }
  
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


</style>