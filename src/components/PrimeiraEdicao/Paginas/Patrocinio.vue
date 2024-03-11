<template>
    <v-container>
        <v-row>
            <v-col>
                <h2>Patrocinadores </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="patrocinadores">
                    <img src="@/assets/imagens/patrocinadores/imagem6.png" alt="">
                    <img src="@/assets/imagens/patrocinadores/imagem5.jpg" alt="">
                    <img src="@/assets/imagens/patrocinadores/imagem3.png" alt="">
                    <img src="@/assets/imagens/patrocinadores/imagem2.jpg" alt="">
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
.patrocinadores {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.patrocinadores img {
    max-height: 200px;
    border-radius: 15px;
    box-shadow: 0 0 10px #00000050;
}


h2 {
    color: var(--primary-color);
    padding-bottom: .5rem;
}

@media screen and (max-width: 1024px) {

    .patrocinadores {
    
        margin: 0;
        padding: 0;
    }

    .patrocinadores img {
        max-height: 150px;
    }
    
}


</style>