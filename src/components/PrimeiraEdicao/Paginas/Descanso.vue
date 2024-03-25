<template>
    <v-container>
        <div class="primeiro-texto">

            <h4 class="descanso-titulo">DESCANSO</h4>
            <h5>
                “Do Descanso – Quando o texto da minha vida descansa
                no texto da vida de Jesus”
            </h5>
            <br><br>
            <h6>Exposição fotográfica
            </h6>
            <p class="px-12 mx-12 my-4">

                O amor é linguagem, uma linguagem de descanso. Fomos
                criados para descansar e o Mestre do descanso incansavelmente nos comunica a sua proposta de descanso. A
                vida nos
                seus múltiplos textos e contextos soletra a música deste convite.
                A presente Exposição Fotográfica é um convite a entrar neste
                mistério da escrita do descanso de Deus através da vida dos
                mais pequenos. Um convite a dançar com o povo moçambicano o texto original que O senhor nos deixou como
                legado.
                Um “Evangelho”, feito de gestos e acontecimentos, tornado
                memorial e acervo, principio e fundamento da nossa criação:
                Descanso.
            </p>
            <div class="autor-texto text-right">Paulo Teia </div>
            <br>

            <div class="galeria-imagens grid-container">
                <v-img class="item item-1" src="@/assets/imagens/nascimento_em_belem.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-2" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-3" src="@/assets/imagens/morte na cruz.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-4" src="@/assets/imagens/anunciacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-5" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-6" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-7" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-8" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-9" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-10" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-11" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>
                <v-img class="item item-12" src="@/assets/imagens/visitacao.jpg" aspect-ratio="1"></v-img>

            </div>
        </div>
    </v-container>
</template>

<script setup>

</script>

<style scoped>
.descanso-titulo {
    color: #622f31;
    font-size: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    text-align: left;
}

h5 {
    font-weight: 900;
    font-size: 1.3rem;
    text-align: left;
    margin: 1rem 0;
}

h6 {
    font-weight: 900;
    font-size: 1.1rem;
    text-align: left;
    margin-top: 1rem;
    color: #622f31;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas */
  grid-template-rows: auto; /* Alturas de linha automática */
  gap: 0; /* Espaçamento entre os itens */
}

.grid-container img {
margin: 0 !important;

}

/* Tamanho e posicionamento dos itens */
.item {
  width: 100%;
  object-fit: cover; /* Para manter o aspecto das imagens */
}

.item-1 {
  grid-area: 1 / 1 / 3 / 3; /* Ocupa duas linhas e duas colunas */
}

.item-2 {
  grid-area: 1 / 3 / 2 / 5; /* Ocupa uma linha e duas colunas */
}

</style>