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

        <v-card-text>
          <v-window v-model="activeTab">

            <!-- TAB 1 - Consultar Dados da Ideia -->
            <v-window-item value="tab-1">
              <!-- Título -->
              <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                  <h1 class="text-h4 text-center" :style="{ color: colors.secondary }">Bem-vindo ao PeregrinAr-Te</h1>

                  <v-divider class="my-3"></v-divider>
                  <div class="blue">
                    <p class="text-center" :style="{ color: colors.neutralLight }">
                      Este é um projeto de arte e cultura que visa promover a arte e a cultura em geral, com foco na
                      arte
                      sacra
                      e na peregrinação.
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="tab-2">
              teste 2
            </v-window-item>

            <v-window-item value="tab-3">
            </v-window-item>

            <v-window-item value="tab-4">
            </v-window-item>

            <v-window-item value="tab-5">
            </v-window-item>

            <v-window-item value="tab-6">
            </v-window-item>

            <v-window-item value="tab-7">
            </v-window-item>

            <v-window-item value="tab-8">
            </v-window-item>
          </v-window>
        </v-card-text>

        <v-bottom-navigation>
          <v-tabs v-model="activeTab" align-tabs="center" class="align-center">
            <v-tab value="tab-1" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-1</v-icon>
            </v-tab>

            <v-tab value="tab-2" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-2</v-icon>
            </v-tab>

            <v-tab value="tab-3" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-3</v-icon>
            </v-tab>

            <v-tab value="tab-1" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-4</v-icon>
            </v-tab>

            <v-tab value="tab-1" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-5</v-icon>
            </v-tab>

            <v-tab value="tab-1" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-6</v-icon>
            </v-tab>

            <v-tab value="tab-1" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-7</v-icon>
            </v-tab>

            <v-tab value="tab-1" class="d-flex flex-column">
              <span>Capitulo</span>
              <v-icon>mdi-roman-numeral-8</v-icon>
            </v-tab>


          </v-tabs>
          
        </v-bottom-navigation>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('tab-1');

const colors = ref({
  primary: '#124c74',
  secondary: '#422e00',
  tertiary: '#6c7540',
  accent: '#ecd5af',
  neutralLight: '#d7cfb4',
  background: '#f6f6f6',
});

</script>

<style>
.v-app-bar,
.v-toolbar__content {
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

.v-bottom-navigation__content,
.v-bottom-navigation,
.v-tabs,
.v-tab {
  min-height: 80px;
  color: #ffffff;
  background-color: #124c74;
}

.v-tab .v-icon {
  font-size: 24px;
}

.v-tab span {
  display: block;
  font-size: 12px;
}

.v-tab {}

#btn-close,
#btn-back {
  position: absolute;
  top: 0;
  padding: 16px;
  cursor: pointer;
  font-size: 20pt;
  height: 80px;
  color: #ffffff;
  background-color: transparent;
}

#btn-close:hover,
#btn-back:hover {
  background-color: #ededed50;
}

#btn-close {
  right: 16px;
}

#btn-back {
  left: 16px;
}
</style>