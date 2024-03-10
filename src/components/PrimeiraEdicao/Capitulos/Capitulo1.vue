<template>
    <v-container>
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


        <v-dialog v-model="dialog" persistent max-width="1200px">
            <v-img src="@/assets/imagens/anunciacao.jpg" aspect-ratio="1"></v-img>

        </v-dialog>


    </v-container>





</template>

<script setup>
import { ref } from 'vue';

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
    margin: .1rem ;
    padding: .1rem;
}

h2.primeiro-texto-h2 {
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    text-align: center;
}

.primeiro-texto p {
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem;
    line-height: .01;
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