<template>
    <div class="noticias-container">


        <NavHome :active-tab="activeTab" />
        <h1>Noticias</h1>
        <div class="lista-noticias">

            <article>
                <h2>Diário do Minho</h2>
                <h3 class="ml-4">Peregrinar-Te levou 33 artistas de Braga a partilharem artes e espiritualidade</h3>
                <p>

                    <v-img cover class="item item-1" src="@/assets/noticias/diariodominho.jpg"></v-img>

                <div class="noticias-btns">

                    <a href="https://www.facebook.com/100064240080143/posts/836575931827069/?rdid=Kpw5KplbSHhMSRAR"
                        target="_blank">Facebook</a>
                    <br>
                    <a href="https://www.diariodominho.pt/noticias/braga/2024-04-06-peregrinar-te-levou-33-artistas-de-braga-a-partilharem-artes-e-espiritualidade-66119dabdf0c4?fbclid=IwAR2667My2ILsq5-wufu0YmIv30X-ZU8ZMb4EiGMXQ2Wd6zmFSOpmXGlEMR4_aem_AWoyLiRiL21YFwLk7aa-WxikYqntkQJDS4L_92DxEzTmL-x9RcY47y0A2JRPap3-t6zGeKvz19t-BWxhgvNb3SM0"
                        target="_blank">Link da noticia</a>
                </div>
                </p>
            </article>

            <article>
                <h2>Correio do Minho</h2>
                <h3 class="ml-4">Projecto ‘PeregrinAr-Te’ incentiva a percorrer caminhos da espiritualidade</h3>
                <p>
                    <v-img cover class="item item-1" src="@/assets/noticias/correiodominho.jpg"></v-img>


                <div class="noticias-btns">
                    <a href="https://correiodominho.pt/noticias/projecto-peregrinar-te-incentiva-a-percorrer-caminhos-da-espiritualidade/151592"
                        target="_blank">Link da noticia</a>
                </div>
                </p>
            </article>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavHome from '../../NavHome.vue';
</script>

<style scoped>
.noticias-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: auto;
    width: 96%;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 1rem 1rem 1rem 3rem;
    background-color: #f5f5f5;
}

.noticias-btns {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 2rem;
    padding: .5rem;
    box-sizing: border-box;
}

.noticias-container .lista-noticias {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    width: 100%;
    padding: .5rem;
    box-sizing: border-box;
}

.noticias-container article {
    width: 45%;
    padding: 2rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px #00000050;
    border-radius: 10px;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
}

.noticias-container .v-img {
    width: 100%;
    margin: 1rem 0;
    box-sizing: border-box;


}

.lista-noticias article a {
    text-decoration: none;
    color: var(--menu-text-color);
    font-weight: 700;
    font-size: 1rem;
    background-color: var(--menu-bg-color);
    border-radius: 4px;
    padding: 1rem;
    margin: 4px 0;
    display: inline-block;

}

@media screen and (max-width: 1024px) {
    .noticias-container {
        margin: 0 1rem 1rem 1rem;
    }

    .noticias-container .lista-noticias {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        flex-direction: column;
        padding: .5rem 0 0 0;
    }

    .noticias-container article {
        width: 80%;
        padding: 1rem;
        border-radius: 15px;
        margin-bottom: 4rem;
    }

}
</style>