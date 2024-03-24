<template>
    <v-container>
        <div class="banner text-center">
            <img src="/src/assets/peregrinarte.png" alt="" class="w-75 h-100">
        </div>
        <div class="box_title">
            <h2>Companheiros de Caminho</h2>
            <h3>PeregrinAr-Te in via Vitae Christi 2024</h3>
        </div>
        <div class="creditos">
            <span>Verónica Parente</span>
            <span>Nuna Poliana Magalhães</span>
            <span>Ademar Magalhães</span>
            <span>Celestina Oliveira</span>
            <span>Conceição Araújo</span>
            <span>Paulo Renato</span>
            <span>Maria Rui Oliveira</span>
            <span>Paulo Teia</span>
            <span>Mário Malheiro</span>
            <span>Maria do Céu Nogueira</span>
            <span>Isabel Vasco Costa</span>
            <span>Ana Alves</span>
            <span>Ana Teia</span>
            <span>Fátima Marinho</span>
            <span>Sylvie Castro</span>
            <span>Maria José Meireles</span>
            <span>Paulo Abreu</span>
            <span>João Costa</span>
            <span>Jesus Gomez-Pablos</span>
            <span>Fernando Silva</span>
            <span>Maria do Céu Camposinhos</span>
            <span></span>
            <span>Casey Coelho</span>
            <span>Cristina Gonçalves</span>
            <span>Dírio Alves</span>
            <span>Natália Ferreira</span>
            <span>Máximo Klyetsun</span>
            <span>José Mesquita Guimarães</span>
            <span>Maria José Morais</span>
            <span>Rafael Patrick de Souza</span>
            <span>Lisete Ribeiro</span>
            <span>Bekia Motta</span>
            <span>Manuel Araújo</span>
            <span>Asdrúbal Pinto</span>
            <span>Eduardo Bueso</span>

        </div>
    </v-container>

</template>

<style>
.banner,
.box_title {
    box-shadow: 0 0 10px #00000050;
    background-color: #fdfdfd50;
    padding: 1rem !important;
    margin: 1.2rem;
    border-radius: 15px;
}

.banner {
    margin-top: 0 !important;
}

.creditos {

    text-align: justify;
    font-weight: 500;
    padding: 1rem;
    margin: 2rem;
    text-align: center;
    display: grid;
    grid-template-columns: 2fr 2fr;
    background-color: #fdfdfd50;
    border-radius: 15px;
    box-shadow: 0 0 10px #00000050;
}

@media screen and (max-width: 1024px) {
    .creditos {
        grid-template-columns: 1fr;
    }

}
</style>