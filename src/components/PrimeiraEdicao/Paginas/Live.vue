<template>
    <div class="video-container">
        <h1>PeregrinAr-Te - Live</h1>
        <br>
        <iframe width="560" height="315" :src="videoUrl" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>

      <br>
        <p class="mensagem-aguarde">
            Por favor, aguarde a transmissão começar. Agradecemos a sua paciência.
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const videoID = 'AQUI_VAI_O_ID_DO_SEU_VIDEO';
const videoUrl = ref('https://www.youtube.com/embed/'+videoID+'?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1');
</script>

<style>
.video-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

iframe {
    /* Ajustes adicionais para responsividade podem ser adicionados aqui */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
</style>