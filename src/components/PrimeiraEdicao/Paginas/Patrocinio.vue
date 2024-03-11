<template>
    Patrocínio

    <div class="patrocinadores">
        <img src="@/assets/imagens/patrocinadores/imagem6.png" alt="">
        <img src="@/assets/imagens/patrocinadores/imagem5.jpg" alt="">
        <img src="@/assets/imagens/patrocinadores/imagem3.png" alt="">
        <img src="@/assets/imagens/patrocinadores/imagem2.jpg" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
.patrocinadores {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.patrocinadores img {
    max-height: 200px;
    border-radius: 15px;
    box-shadow: 0 0 10px #00000050;
}
</style>