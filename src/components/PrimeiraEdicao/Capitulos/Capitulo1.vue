<template>
    <v-container>
        <div class="primeiro-texto">
            <h1>Capítulo I</h1>
            <h2>ANUNCIAÇÃO A MARIA</h2>


            <h3>Anunciação do Arcanjo S. Gabriel a Maria</h3>
            <br>
            <p>O filho de Deus irá assumir a natureza humana para nos salvar. É a proposta
                que Gabriel faz a Nossa Senhora. A resposta é afirmativa e,assim, o Redentor
                dos homens e do mundo poderá vir ao coracão de cada um de nós para nos
                dizer em que consiste a santidade de Deus e a santidade que Ele espera
                de nós.
            </p>
            <div class="autor-texto">
                <br>Fernando Silva
                <br>26 de novembro de 2023
            </div>
        </div>
        <div>
            <img src="@/assets/imagens/anunciacao.jpg" alt="" class="ma-5" aspect-ratio="1" @click="dialog = true"
                style="max-width: 300px; cursor: pointer;"></img>
        </div>


        <v-dialog v-model="dialog" persistent max-width="1200px">
            <v-img src="@/assets/imagens/anunciacao.jpg" aspect-ratio="1"></v-img>

        </v-dialog>


        <div class="primeiro-texto">
            <h2 class="primeiro-texto-h2">Anunciação do Arcanjo S. Gabriel a Maria</h2>

            <p>Anunciação do Arcanjo S. Gabriel a Maria'</p>
            <p>Acendam-se as estrelas nas alturas!</p>
            <p>Abrande o Astro Rei o seu fulgor!</p>
            <p>Escutem o convite do Arcanjo</p>
            <p>Á Eleita Mãe do nosso Redendor.</p>
            <br>
            <p>Chegou esta alvorada de Esperança,</p>
            <p>Depois de muitos anos de vigília.</p>
            <p>O Verbo Se fez Carne. Veio ao mundo</p>
            <p>E quer p´ra sempre ser nossa Família.</p>
            <div class="creditos">
                <br>Fernando Silva
                <br>Solenidade de Cristo Rei,
                <br>26 de novembro de 2023
            </div>
        </div>
        <div>
            <img src="@/assets/imagens/anunciacao.jpg" alt="" class="ma-5" aspect-ratio="1" @click="dialog = true"
                style="max-width: 300px; cursor: pointer;"></img>
        </div>
    </v-container>





    <nav-img src="@/assets/imagens/anunciacao.jpg" />

</template>

<script setup>
import { ref } from 'vue';

import anunciacaoImg from '@/assets/imagens/anunciacao.jpg';


const dialog = ref(false);

</script>

<style scoped>
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

.primeiro-texto {
    font-family: 'Times New Roman', Times, serif;
    background-color: #f6f6f6;
    border-radius: 2rem;
    box-shadow: 0 0 10px #00000050;
    margin: .1rem;
    padding: 1rem;
}

h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--primary-color);
    padding: 1rem;
    text-align: left;
}

h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #a7834a;
    padding: 1rem 0 0 0;
    margin-left: 1rem;
    text-align: left;
    border-bottom: solid 2px var(--primary-color);
    width: fit-content;
}

h3 {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
    text-align: left;
}

.primeiro-texto p {
    font-size: 1rem;
    font-weight: 300;
    padding: 1.2rem;
}

.creditos {
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem;
    margin-top: 1rem;
    text-align: left;
    margin: auto;
    width: 60%;
}

@media screen and (max-width: 1024x) {
    img {
        max-width: 100%;
    }

    h2.primeiro-texto-h2 {
        font-size: 1rem;
        padding: 2px;
    }


}
</style>