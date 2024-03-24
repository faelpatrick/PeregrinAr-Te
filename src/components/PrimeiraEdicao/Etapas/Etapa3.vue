<template>
    <v-container>
        <div class="primeiro-texto">
            <h1>Etapa III</h1>
            <h2>AUTORREVELAÇÃO DE JESUS
                NAS BODAS DE CANÁ</h2>


            <h3>Bodas de Caná</h3>
            <p>Jesus toma parte nas alegrias dos seus concidadãos. Com a sua presença
                abençoa o amor humano, o início de uma nova família. A pedido da sua mãe
                Maria, transforma em vinho a água de umas grandes talhas. Assim, também o
                amor esponsal haverá de converter-se em Amor divino

            </p>


            <h3>Las bodas de Caná </h3>
            <p>
                Jesús toma parte en las alegrías de sus conciudadanos. Con su presencia
                bendice el amor humano, el comienzo de una nueva familia. Ante una petición
                de Maria, su madre, transforma en vino el agua de unas vasijas grandes.
                De esa manera, también el amor de los esposos se podrá convertir en Amor
                divino.<br>
            </p>
            <h3>Wedding at Cana</h3>
            <p>
                Jesus takes part in the joys of his fellow citizens. With his presence, he blesses
                human love, the beginning of a new family. At the request of his mother Mary,
                he turns into wine the water from large jars. Thus, spousal love will also be
                transformed into divine Love.
            </p>
            <div class="text-right">
                <div class="autor-texto">Jesus Gomez-Pablos e Ana Alves </div>
            </div>
            <br><br>
            <h3>Bodas de Caná</h3>
            <p>
                Morreu a festa, pois já não há vinho.
                <br>As Bodas vão perder a sua luz...
                <br>Então Maria, sempre vigilante,
                <br>Implora este milagre ao seu Jesus.
                <br>E dá-se então ainda outro prodígio,
                <br>Que muda para sempre o seu destino:
                <br>O amor humano, frágil, entre os dois,
                <br>De barro humano, torna-se divino.
                <br>Maria nos alcance este milagre:
                <br>Que mude para sempre o nosso amor,
                <br>De pobre, de tacanho e calculista,
                <br>Se torne um espumante, ou bom licor!
            </p>
            <div class="text-right">
                <div class="autor-texto">Mário Malheiro</div>
                Solenidade de Cristo Rei,
                26 de novembro de 2023
            </div>


            <br><br>
            <hr>
            <br>


            <div class="img-container">
                <img src="@/assets/imagens/O Homem.jpg" alt="" class="ma-5" aspect-ratio="1" @click="mostrar($event)"
                    style="max-width: 300px; cursor: pointer;"></img>

            </div>
            <div class="img-desc">
                <span class="img-titulo">O Homem</span>
                <span class="img-autor">Jerónimo</span>

            </div>
            <h3>OUTRO OLHAR </h3>

            <div class="autor-texto"> Maria José Morais </div>
            <p>
                <i>– Fazei o que Ele vos disser (Jo 2, 5).</i><br>
                Há sempre alguém que atende aos pormenores… <br>
                A grandeza de Deus convive com o humano e a correnteza dos dias
            </p>


            <br><br>
            <hr>
            <br><br>


            <div class="img-container">
                <img src="@/assets/imagens/O Homem1.jpg" alt="" class="ma-5" aspect-ratio="1" @click="mostrar($event)"
                    style="max-width: 300px; cursor: pointer;">
                <img src="@/assets/imagens/O Homem2.jpg" alt="" class="ma-5" aspect-ratio="1" @click="mostrar($event)"
                    style="max-width: 300px; cursor: pointer;">
                <img src="@/assets/imagens/O Homem3.jpg" alt="" class="ma-5" aspect-ratio="1" @click="mostrar($event)"
                    style="max-width: 300px; cursor: pointer;">

            </div>
            <div class="img-desc">
                <span class="img-titulo">Homem 1, 2 e 3</span>
                <span class="img-autor">Jerónimo <br>Cerâmica</span>
            </div>
            <br>
            <hr>
            <br>
            <h3>O QUÃO SOZINHO ESTARIAS, SE…</h3>
            <p>
                Bebe até que não haja senão água,
                <br>Bebe até que sintas a vergonha de existir
                <br>Por não teres o que oferecer aos convidados
                <br>E perceberes o quão sozinho estarias, se…
                <br>Bebe e percebe que, querendo, o Filho do Homem
                <br>Dar-te-á leite e mel
                <br>E das infusas vazias fará correr um néctar desconhecido
                <br>Vinho da reconciliação,
                <br>Mas percebe o quão sozinho estarias, se…
                <br>Bebe, é o teu Deus
                <br>Bebe, é revelação
                <br>Bebe e aprende
                <br>Que o impossível
                <br>É um copo de vinho
                <br>Que Deus te dá
                <br>Nas bodas de Caná.
                <br>E percebe, enfim, o quão sozinho estarias, se…
            </p>
            <br>
            <div class="text-right">
                <div class="autor-texto">Fátima Marinho</div>
            </div>
            <br>

            <v-dialog v-model="dialog" max-width="96vw">
                <v-btn size="large" @click="dialog = false" class="btnClose ml-4">X</v-btn>

                <v-img id="dialog-img" :src="urlImg" aspect-ratio="1" width="90vw"></v-img>


            </v-dialog>

        </div>
    </v-container>





    <nav-img src="@/assets/imagens/nascimento_em_belem.jpg" />

</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);
const urlImg = ref('');

function mostrar(event) {
    urlImg.value = event.target.src;
    console.log(urlImg.value);
    dialog.value = true;
}


</script>

<style scoped>
.v-dialog {
    background-color: #000000e0;
}

.v-overlay__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}

.img-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 2rem 0;
    gap: 0px;
    background-color: #e9decf;
    box-shadow: inset 0 0 10px #00000050;
    box-shadow: 0 0 10px #00000050;
}

.img-desc {
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: left;
    width: 300px;
    text-align: left;
    padding: .1rem;
    margin-top: -3rem;
    padding-left: 30%;
    min-width: 100%;
    background-color: #f6f6f6;
}

.receita-natal {
    background-color: #d6c4a8;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}

.receita-natal h2 {
    text-align: center;
    color: #89192c;
    padding-top: 1.8rem;
    border: none;
}

.receita-texto {
    max-resolution: auto;
    width: 60%;
}

@media screen and (max-width: 1024px) {
    .receita-natal {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .img-desc img {
        width: 40% !important;
    }
}

.img-titulo {
    width: 100%;
    font-weight: 700;
    text-align: left;
    color: #a7834a;
    padding-left: 1rem;
}

.img-autor {
    width: 100%;
    font-weight: 600;
    text-align: left;
    padding-left: 1rem;
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
    /* text-align: left; */
    border-bottom: solid 2px var(--primary-color);
    width: fit-content;
}

h3 {
    font-size: 1.2rem;
    font-weight: 700;
    padding: .8rem 0 0 0px;
    margin: 0px;
    /* text-align: left; */
}

h4 {
    font-size: 1.1rem;
    font-weight: 700;
    padding: .8rem 0 0 0px;
    margin: 0px;
    /* text-align: left; */
    color: #a7834a;
}

.primeiro-texto p {
    font-size: 1rem;
    font-weight: 300;
    padding: 4px;
    margin: 0;
    text-align: justify;
    /* border: solid 1px #00000050; */
    width: fit-content;
    margin: auto;
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

.btnClose {
    position: absolute;
    top: 0;
    right: 0;
    color: #a7834a;
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
    z-index: 9999999999;
    cursor: pointer;
}

@media screen and (max-width: 1024x) {

    .btnClose {
        font-size: .5rem;
        padding: 1rem;
    }

    img {
        max-width: 100%;
    }

    h2.primeiro-texto-h2 {
        font-size: 1rem;
        padding: 2px;
    }



}
</style>