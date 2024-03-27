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
                <v-img cover class="item item-1" src="@/assets/imagens/nascimento_em_belem.jpg"></v-img>
                <v-img cover class="item item-2" src="@/assets/imagens/visitacao.jpg"></v-img>
                <v-img cover class="item item-3" src="@/assets/imagens/morte na cruz.jpg"></v-img>
                <v-img cover class="item item-4" src="@/assets/imagens/anunciacao.jpg"></v-img>
                <v-img cover class="item item-5" src="@/assets/imagens/ressurreição.jpg"></v-img>
                <v-img cover class="item item-6" src="@/assets/imagens/o tumulo vazio.jpg"></v-img>
                <v-img cover class="item item-7" src="@/assets/imagens/Maria_junto_a_cruz.jpg"></v-img>
                <v-img cover class="item item-8" src="@/assets/imagens/coroação de espinhos.jpg"></v-img>
                <v-img cover class="item item-9" src="@/assets/imagens/Ultima_ceia.jpg"></v-img>
                <v-img cover class="item item-10" src="@/assets/imagens/redenção.jpg"></v-img>
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

.grid-container img {
      gap: 0;


}

.grid-container {
    display: grid;
    grid-template-rows: repeat(15, 1fr) 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    height: 100%;
    width: auto;
    object-fit: contain;
}

.item {
    height: 100%;
    width: auto;
}

.item-1 {
    background-color: #D68BB6;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 6;
    grid-column-end: 2;
}

.item-2 {

    background-color: #77ADD7;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-column-end: 3;

}

.item-3 {

    background-color: #7B7E95;
    grid-row-start: 1;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 4;

}

.item-4 {

    background-color: #E58B77;
    grid-row-start: 3;
    grid-column-start: 2;
    grid-row-end: 5;
    grid-column-end: 3;

    height: 100%;
}

.item-5 {

    background-color: #E5975A;
    grid-row-start: 3;
    grid-column-start: 3;
    grid-row-end: 7;
    grid-column-end: 4;

}

.item-6 {

    background-color: #BB9EE5;
    grid-row-start: 5;
    grid-column-start: 2;
    grid-row-end: 7;
    grid-column-end: 3;

}

.item-7 {

    background-color: #9D75FE;
    grid-row-start: 6;
    grid-column-start: 1;
    grid-row-end: 11;
    grid-column-end: 2;

}

.item-8 {

    background-color: #7ABDBE;
    grid-row-start: 11;
    grid-column-start: 1;
    grid-row-end: 17;
    grid-column-end: 2;

}

.item-9 {

    background-color: #7BABBA;
    grid-row-start: 7;
    grid-column-start: 2;
    grid-row-end: 12;
    grid-column-end: 4;

}

.item-10 {

    background-color: #FBFD58;
    grid-row-start: 12;
    grid-column-start: 2;
    grid-row-end: 17;
    grid-column-end: 4;
}
</style>