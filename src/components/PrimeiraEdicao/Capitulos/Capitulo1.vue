<template>
    <img src="@/assets/imagens/anunciacao.jpg" alt="" class="ma-5" aspect-ratio="1" @click="dialog = true"
        style="max-width: 300px; cursor: pointer;"></img>

    <nav-img src="@/assets/imagens/anunciacao.jpg" />

</template>

<script setup>
import { ref } from 'vue';

import anunciacaoImg from '@/assets/imagens/anunciacao.jpg';


const dialog = ref(false);


</script>

<style>
.v-dialog img {
    max-width: 90vw;
}

img {
    width: 100%;
    border: solid black 2px !important;
    border: solid #ffffff 4px !important;
    border-radius: 2px;
    box-shadow: 0 0 10px #00000050;
    max-width: 300px;

}
</style>