<template>

    <div class="container-joia v-100">
        <h2> PeregrinAr-Te in via Vitae Christi 2024</h2>
        <div class="container-2 v-100">
            <div class="carousel">
                <v-carousel height="640">
                    <v-carousel-item src="@/assets/imagens/joia/1.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/2.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/3.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/4.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/5.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/6.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/7.jpg"></v-carousel-item>
                    <v-carousel-item src="@/assets/imagens/joia/8.jpg"></v-carousel-item>
                </v-carousel>
            </div>

            <div class="olhares">
                <hr>
                <br>

                <div class="olhar_artista">
                    <h3>
                        O OLHAR DA ARTISTA
                    </h3>

                    <p class="assinatura">
                        <span class="autor"> Sylvie Castro</span>
                        <span> (designer/ créditos fotográficos)</span>
                    </p>
                    <p>
                        Este coração fala-nos dos múltiplos caminhos que a vida nos oferece e da complexidade da
                        escolha.
                        Reporta-nos, ainda, para os desafios da existência que, não raras vezes, nos coloca para além
                        das
                        fronteiras conhecidas, esses territórios onde só o Amor Divino nos pode resgatar do abismo.
                    </p>
                    <p>
                        Tudo parte do coração e tudo se encaminha para lá, seja na dimensão corpórea, seja na dimensão
                        espiritual. Sem ele as veias e artérias morrem.
                    </p>

                </div>
                <div class="olhar_artista">
                    <h3>
                        OUTRO OLHAR
                    </h3>
                    <p class="assinatura">
                        <span class="autor">Isabel Vasco Costa</span>
                    </p>
                    <p>
                        Coração minhoto, jóia em prata, com fios, laços que o unem a montes, fontes e, sobretudo, ao
                        sonho de servir as gentes.
                    </p>

                </div>

                <div class="olhar_artista">
                    <p class="assinatura">
                        <span class="autor">
                            Teresa Nogueira
                        </span>
                    </p>
                    <p>
                        O coração estabelece o ritmo e a coerência do nosso ritmo, dentro de nós e com o Todo.

                        Ele é o centro que une os nossos centros energéticos superiores, ligados ao divino, e
                        inferiores,
                        ligados à terra e à nossa ancestralidade. Pensar, Sentir e Materializar.

                        Ele é a música, a banda sonora que conecta o nosso corpo à nossa alma.
                    </p>

                </div>

                <div class="olhar_artista">
                    <p class="assinatura">
                        <span class="autor">Maria José Morais </span>
                    </p>
                    <p>
                        <b><i>Coração em Ação</i></b> é o ícone deste grupo de companheiros de Caminho. <br>
                        Nesta 1.a edição de <i>PeregrinAr-Te</i>, escolhe-se olhar com o coração

                        etapas da vida de Cristo, em direção a caminhos de encontro, acei-
                        tação, perdão, libertação...Ação! <br>

                        O Coração é lugar de encontro e rampa de lançamento para o espetá-
                        culo incomensurável da vida.
                    </p>

                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.container-joia {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #00000050;

}

.container-2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 2rem;
}

h1,
h2,
h3,
h4 {
    color: var(--primary-color);
    padding-bottom: .5rem;
}

.olhares h3 {
    border-bottom: solid 1px var(--primary-color);
    padding-bottom: 0px !important;
}

.carousel {
    background-color: #e9decf;

    border-radius: 15px;
    border: solid var(--primary-color) 6px;
    box-shadow: 0 0 10px #00000050;
    margin: 0 2rem;
    margin-bottom: 2rem;
    background: #000000;
    min-width: 300px;
}

.olhares {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    background: #f6f6f6;
    border-radius: 15px;
    padding: 2rem;
}

.olhares p {
    font-size: .9rem;
    font-weight: 300;
    padding: .5rem;
    text-align: justify;
}

p.assinatura {
    font-size: .8rem;
    font-weight: 300;
    text-align: left;
    display: flex;
    flex-direction: column;
}

span.autor {
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 0px !important;
}

span.autor::after {
    content: " ] ";
}

span.autor::before {
    content: " [ ";
}

span.autor::after,
span.autor::before {
    font-size: 1.2rem;
    font-weight: 700;
    color: #a6834a;
}

@media screen and (max-width: 1024px) {

    .olhares {
        padding: 0 !important;
        margin: 0 !important;
    }

    .container-2 {
        flex-direction: column;
        align-items: center;
        max-width: 90% !important;
    }

    .container-2.v-100 {
        padding: 2px !important;
        margin: 2px !important;
    }

    .carousel {
        margin: 0;
        padding: 0;
        width: 90% !important;
    }

    .container {
        flex-direction: column;
        align-items: center;
    }

    .v-card-text {
        padding: 0;
        margin: 0;
    }

    .container-joia.v-100 {
        margin: 5px 0;
    }

}
</style>