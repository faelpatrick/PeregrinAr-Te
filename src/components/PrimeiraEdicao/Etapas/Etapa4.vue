<template>
    <v-container>
        <div class="primeiro-texto">
            <h1>Capítulo IV</h1>
            <h2>ÚLTIMA CEIA E A INSTITUIÇÃO DA EUCARISTIA</h2>


            <h3>Última Ceia</h3>
            <p>Na hora da despedida, Jesus manifesta a sua amizade por nós lavando-nos
                os pés. Pede que nos amemos uns aos outros com obras e de verdade. Inclina-se para o fazer. É como se
                colocasse o coração no chão para que todos
                pisássemos macio, mais suavemente. <br>
                Institui a Eucaristia e o sacerdócio ficando assim connosco para sempre, no
                meio de nós.
            </p>


            <h3>La Última Cena </h3>
            <p>
                Al despedirse Jesús nos manifiesta su amistad lavándonos los pies. Nos pide
                que nos amemos los unos a los otros com obras y de verdad. Para hacerlo,
                debe inclinarse. Es como si colocase el corazón en el suelo para que podamos
                pisar blando, suavemente. Instituye la Eucaristía y el sacerdocio quedándose
                con nosotros para siempre, a nuestro lado. <br>
            </p>
            <h3>Last Supper</h3>
            <p>
                At the time of farewell, Jesus shows his friendship for us by washing our feet.
                He asks us to love one another with deeds and truth. He stoops to do so. It is
                as if he places his heart on the ground so that we all tread softly, more gently.
                He institutes the Eucharist and priesthood, thus remaining with us forever,
                among us.
            </p>
            <br>
            <h3>Última Ceia</h3>


            <div class="text-right">
                <div class="autor-texto">Jesus Gomez-Pablos e Ana Alves</div>
            </div>
            <p>
                Num cantinho da sala, estamos nós,
                <br>Reclinados aos pés do Salvador.
                <br>Ouvimos consagrar o pão e o vinho
                <br>Transformando-os no Corpo do Senhor.
                <br>
                <br>Lá fora já tilintam as moedas:
                <br>O preço duma feia traição...
                <br>Sereno, com os Onze no Cenáculo,
                <br>O Mestre abre agora o Coração.
                <br>
                <br>Jesus fala do Reino, emocionado,
                <br>E sente aproximar-se um mar de dor.
                <br>Resume a Lei de Deus, p´ra todo o sempre,
                <br>No Mandamento Novo do Amor.
            </p>

            <div class="text-right">
                <div class="autor-texto">Fernando Silva</div>
                Solenidade de Cristo Rei,
                26 de novembro de 2023
            </div>

            <br><br>
            <hr>
            <br><br>


            <div class="img-container">
                <img src="@/assets/imagens/Ultima Ceia.jpg" alt="" class="ma-5" aspect-ratio="1"
                    @click="mostrar($event)" style="max-width: 300px; cursor: pointer;"></img>

            </div>
            <div class="img-desc">
                <span class="img-titulo">Última Ceia</span>
                <span class="img-autor">Paulo Teia</span>

            </div>
            <h3>OUTRO OLHAR </h3>

            <div class="autor-texto"> Fátima Marinho </div>
            <p>
                <i>
                    Hoje é dia de celebração,
                    <br>Este é o meu corpo,
                    <br>Não será em vão que comes este pão.
                </i>
            </p>
            <br>
            <div class="autor-texto"> Jesus Gomez-Pablos </div>
            <p>
                <i>
                    É como se colocasse o coração no chão para que todos pisássemos macio, mais suavemente.
                    <br>Institui a Eucaristia e o sacerdócio ficando assim connosco para
                    sempre, no meio de nós.
                </i>
            </p>

            <br><br>
            <hr>
            <br><br>


            <h4>A ÚLTIMA CEIA</h4>
            <p>
                <br> Não será em vão que comes este pão.
                <br> Amanhã terás medo,
                <br> Irás, Pedro,
                <br> Negar que és meu amigo,
                <br> Não te julgarei!
                <br>
                <br> De entre vós,
                <br> Um me entregará,
                <br> Só ele se julgará.
                <br>
                <br> Hoje é dia de celebração,
                <br> Este é o meu corpo,
                <br> Não será em vão que comes este pão.
                <br>
                <br> Amanhã,
                <br> Virá a tirania,
                <br> A mentira,
                <br> A opressão,
                <br> O medo,
                <br> A cruz da redenção,
                <br> Mas hoje é dia de celebração,
                <br> Dia de saber que o medo não vence
                <br> O abraço prévio.
                <br>
                <br> Podes negar-me, Pedro,
                <br> Mas estarei contigo,
                <br> Serei o teu abrigo,
                <br> Quando as trevas se adensarem,
                <br> E, saberás, então,
                <br> Não foi em vão que comeste deste pão!
                <br>
            </p>
            <div class="text-right">
                <div class="autor-texto">Fátima Marinho</div>
            </div>
            <br>
            <br>
            <h4>ALTAR...</h4>
            <p>Sento-me à mesa
                <br>e convido-te
                <br>para jantar.
                <br>Serve-te apenas
                <br>se for essa a tua vontade.
                <br>Sinto-me menos só
                <br>quando te deixas existir.

            </p>

            <div class="text-right">
                <div class="autor-texto">Maria José Meireles</div>
            </div>
            <br>
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