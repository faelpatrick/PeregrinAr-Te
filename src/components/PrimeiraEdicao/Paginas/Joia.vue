<template>

    <div class="container v-100">
        <v-carousel class="carousel" height="640" >
            <v-carousel-item src="@/assets/imagens/joia/1.jpg"></v-carousel-item>
            <v-carousel-item src="@/assets/imagens/joia/2.jpg"></v-carousel-item>
            <v-carousel-item src="@/assets/imagens/joia/3.jpg"></v-carousel-item>
            <v-carousel-item src="@/assets/imagens/joia/4.jpg"></v-carousel-item>
            <v-carousel-item src="@/assets/imagens/joia/5.jpg"></v-carousel-item>
            <v-carousel-item src="@/assets/imagens/joia/6.jpg"></v-carousel-item>
            <v-carousel-item src="@/assets/imagens/joia/7.jpg"></v-carousel-item>
        </v-carousel>

        <div class="olhares">
            <h2> PeregrinAr-Te in via Vitae Christi 2024</h2>
            <hr>
            <br>

            <div class="olhar_artista">
                <h3>
                    O OLHAR DA ARTISTA
                </h3>
                <p>
                    Este coração fala-nos dos múltiplos caminhos que a vida nos oferece e da complexidade da escolha.
                    Reporta-nos, ainda, para os desafios da existência que, não raras vezes, nos coloca para além das
                    fronteiras conhecidas, esses territórios onde só o Amor Divino nos pode resgatar do abismo.
                </p>
                <p>
                    Tudo parte do coração e tudo se encaminha para lá, seja na dimensão corpórea, seja na dimensão
                    espiritual. Sem ele as veias e artérias morrem.
                </p>
                <p class="assinatura">
                    Sylvie Castro
                    <span> (designer/ créditos fotográficos)</span>
                </p>
            </div>

            <div class="olhar_artista">
                <h3>
                    OUTRO OLHAR
                </h3>
                <p>
                    Coração minhoto, jóia em prata, com fios, laços que o unem a montes, fontes e, sobretudo, ao
                    sonho de servir as gentes.
                </p>
                <p class="assinatura">
                    Isabel Vasco Costa
                </p>
            </div>

            <div class="olhar_artista">
                <h3>
                    OUTRO OLHAR
                </h3>
                <p>
                    O coração estabelece o ritmo e a coerência do nosso ritmo, dentro de nós e com o Todo.

                    Ele é o centro que une os nossos centros energéticos superiores, ligados ao divino, e inferiores,
                    ligados à terra e à nossa ancestralidade. Pensar, Sentir e Materializar.

                    Ele é a música, a banda sonora que conecta o nosso corpo à nossa alma.
                </p>
                <p class="assinatura">
                    Teresa Nogueira
                </p>
            </div>

        </div>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
}

h1,
h2,
h3,
h4 {
    color: var(--primary-color);
    padding-bottom: .5rem;
}

.carousel {
    border-radius: 15px;
    border: solid var(--primary-color) 6px;
    box-shadow: 0 0 10px #00000050;
    margin: 0 2rem 2rem 0;
    background: #000000;
}
.olhares {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0 2rem;
    background: #f6f6f6;
    border-radius: 15px;
    box-shadow: 0 0 10px #00000050;
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
    text-align: right;
}

@media screen and (max-width: 1024px) {
    .container {
        flex-direction: column;
        align-items: center;
    }
}
</style>