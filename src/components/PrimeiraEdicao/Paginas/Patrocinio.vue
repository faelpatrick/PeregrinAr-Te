<template>
    <div class="patrocinadores">

        <NavHome :active-tab="activeTab" />
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
                        <a href="https://graficamares.pt/" alt="Graficamares" target="_blank">
                            <img src="@/assets/imagens/patrocinadores/imagem2.jpg" alt="">
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import NavHome from '@/components/NavHome.vue';

const props = defineProps({
    activeTab: String
})



</script>

<style scoped>
.patrocinadores {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-left: 2rem;
    background-color: #ffffff;
    min-height: 100vh;
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
        max-width: 96%;
    }

}
</style>