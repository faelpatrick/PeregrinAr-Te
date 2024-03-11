<template>
    <div class="image-zoom-container">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <!-- Ativador com imagem -->
          <v-img :src="src" v-bind="attrs" v-on="on" class="activator-image" />
        </template>
        <v-card>
          <!-- Imagem com Zoom aplicado -->
          <v-img :src="src" class="zoomed-image" :style="{ 'transform': 'scale(' + zoomLevel + ')' }" contain aspect-ratio="1.5"></v-img>
          <v-card-actions>
            <v-btn append-icon="mdi-magnify-plus-outline" @click="zoomIn">
            </v-btn>
            <v-btn append-icon="mdi-magnify-minus-outline" @click="zoomOut">
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn append-icon="mdi-close" @click="closeDialog">
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Props
  const props = defineProps({
    src: String,
  });
  
  const dialog = ref(false);
  const zoomLevel = ref(1);
  
  function zoomIn() {
    zoomLevel.value = Math.min(zoomLevel.value + 0.1, 3); // Limita o zoom máximo a 3x
  }
  
  function zoomOut() {
    zoomLevel.value = Math.max(zoomLevel.value - 0.1, 1); // Limita o zoom mínimo a 1x (tamanho original)
  }
  
  function closeDialog() {
    dialog.value = false;
  }
  </script>
  
  <style scoped>
  .image-zoom-container .activator-image, .image-zoom-container .zoomed-image {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  </style>
  