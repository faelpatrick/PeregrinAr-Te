<template>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        :src="videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const videoID = 'AQUI_VAI_O_ID_DO_SEU_VIDEO';
  const videoUrl = ref(`https://www.youtube.com/embed/${videoID}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`);
  </script>
  
  <style>
  .video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ajusta a altura para ocupar toda a altura da tela */
  }
  
  iframe {
    /* Ajustes adicionais para responsividade podem ser adicionados aqui */
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
  }
  </style>