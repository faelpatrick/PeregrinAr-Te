<template>
    <v-container>
        <div class="primeiro-texto">
            <h1>Capítulo I</h1>
            <h2>ANUNCIAÇÃO A MARIA</h2>


            <h3>Anunciação do Arcanjo S. Gabriel a Maria</h3>
            <p>O filho de Deus irá assumir a natureza humana para nos salvar. É a proposta
                que Gabriel faz a Nossa Senhora. A resposta é afirmativa e,assim, o Redentor
                dos homens e do mundo poderá vir ao coracão de cada um de nós para nos
                dizer em que consiste a santidade de Deus e a santidade que Ele espera
                de nós.
            </p>


            <h3>La Anunciación del Arcángel San Gabriel a María </h3>
            <p>
                El hijo de Dios recibirá la naturaleza humana para salvarnos. Es la propuesta
                que Gabriel hace a la Virgen. La respuesta fue afirmativa y, de esa manera,
                el Redentor de los hombres y del mundo podrá venir al corazón de cada uno
                de nosotros para decirnos en qué consiste la santidad de Dios y también la
                santidad que Él espera de nosotros.
            </p>
            <h3> Annunciation of the Archangel Saint Gabriel to Mary</h3>
            <p>
                The Son of God will become man to save us. This is the proposal that Gabriel
                makes to Our Lady. She accepts the proposal, and thus, the Redeemer of men
                and the world can come to the heart of each of us to tell us what the holiness
                of God consists of and the holiness that He expects from us.
            </p>

            <div class="autor-texto">
                Jesus Gomez-Pablos e Ana Alves
            </div>
            <br><br>
            <hr>
            <br><br>

            <h3>Anunciação do Arcanjo S. Gabriel a Maria</h3>
            <p>
                <br>Acendam-se as estrelas nas alturas!
                <br>Abrande o Astro Rei o seu fulgor!
                <br>Escutem o convite do Arcanjo
                <br>À Eleita Mãe do nosso Redendor.
                <br>
                <br>Chegou esta alvorada de Esperança,
                <br>Depois de muitos anos de vigília.
                <br>O Verbo Se fez Carne. Veio ao mundo
                <br>E quer pʼra sempre ser nossa Família.
            </p>
            <div class="text-right">
                <div class="autor-texto">Fernando Silva</div>
                Solenidade de Cristo Rei, <br>
                26 de novembro de 2023

            </div>

            <br><br>
            <hr>
            <br><br>


            <div class="img-container">
                <img src="@/assets/imagens/anunciacao.jpg" alt="" class="ma-5" aspect-ratio="1" @click="dialog = true"
                    style="max-width: 300px; cursor: pointer;"></img>

                </div>
                <div class="img-desc">
                    <span class="img-titulo">Anunciação I</span>
                    <span class="img-autor">Paulo Teia</span>

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

.img-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    gap: 0px;
    background-color: #e9decf;
    box-shadow: inset 0 0 10px #00000050;
    box-shadow: 0 0 10px #00000050;
}

.img-desc {
    display: flex;
    flex-direction: column ;
    justify-content:first baseline;
    align-items: left;
    width: 300px;
    text-align: left;
    padding: .1rem;
    background-color: #ffffff;
    box-shadow: 0 0 10px #00000050;
}

.img-titulo {
    width: 100%;
    background-color: #f6f6f6;
    font-weight: 700;
    text-align: left;
    color: #a7834a;
}

.img-autor {
    width: 100%;
    background-color: #f6f6f6;
    font-weight: 600;
    text-align: left;
    color: var(--primary-color);
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
    margin-bottom: .6rem;
    text-align: left;
    border-bottom: solid 2px var(--primary-color);
    width: fit-content;
}

h3 {
    font-size: 1.2rem;
    font-weight: 700;
    padding: .8rem 0 0 0px;
    margin: 0px;
    text-align: left;
}

.primeiro-texto p {
    font-size: 1rem;
    font-weight: 300;
    padding: 4px;
    margin: 0;
    text-align: justify;
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

.autor-texto {
    font-size: 1rem;
    font-weight: 500;
    margin: .6rem;
    text-align: right;
}

.autor-texto::before {
    content: " [ ";
}

.autor-texto::after {
    content: " ] ";
}

.autor-texto::after,
.autor-texto::before {
    color: #a7834a;
    font-size: 1.4rem;
    position: relative;
    top: 1px;
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