<template>
  <NavHome @onItemClick="onItemClick" />
  <div class="video-container">
    <h1>PeregrinAr-Te - Live 📺</h1>
    <br>
    <div class="d-flex flex-row justify-space-around">
      <div class="w-25"></div>
      <iframe width="720px" height="400px" :src="videoUrl" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div class="btn-yt  ">
        <a href="https://www.youtube.com/channel/UCwA0F52Y-mnFu9QP0yVN-Lg" target="_blank">
          <img src="@/assets/youtube.png" alt="Logo do canal PeregrinAr-Te" width="80px" />
          <p>Inscreva-se no nosso canal do youtube</p>
        </a>
      </div>
    </div>

    <br>
    <p class="mensagem-aguarde">
      Por favor, aguarde a transmissão começar. Agradecemos a sua paciência.
      <v-img src="@/assets/plateia.svg" id="plateia" class="fade-in pb-8"> </v-img>
    </p>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import NavHome from '../../NavHome.vue';

const props = defineProps({
  activeTab: String
})

function onItemClick(tab) {
  props.activeTab.value = tab;
}

const videoID = 'hUeizfJawnY';
const videoUrl = ref('https://www.youtube.com/embed/' + videoID + '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1');
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

a {
  text-decoration: none;
  color: var(--primary-color);
  font-size: large;
}

@keyframes subirDescer {

  0%,
  100% {
    transform: translateY(0);
    /* Começa na posição original */
  }

  50% {
    transform: translateY(-20px);
    /* Move 20px para cima na metade do caminho */
  }
}

.btn-yt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 25%;
  padding-left: 2rem;
  animation: subirDescer 3s ease-in-out infinite;
  /* w-25 pl-8  text-center d-flex flex-column align-center justify-center */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 3s ease-out;
}

iframe {
  /* Ajustes adicionais para responsividade podem ser adicionados aqui */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1024px) {
  .video-container {
    height: 100%;
    width: 90vw;
    margin-left: 2rem;
    padding:0 2rem 0 10px;
    flex-direction: column;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  .btn-yt {
    display: none;
  }


}
</style>