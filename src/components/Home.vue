<template>
  <v-navigation-drawer v-model="drawer" app rail :expand-on-hover :permanent="true" :width="width">
    <v-list dense>
      <v-list style="font-size: 32pt; padding: 0;">
        <v-list-item class="logo-menu" prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te" subtitle="">
        </v-list-item>
      </v-list>
      <v-list-item key="HOME" prepend-icon="mdi-home" title="Casa" @click="onItemClick('Casa')">
      </v-list-item>
      <v-list-item key="Primeira Edição" prepend-icon="mdi-book-open-page-variant" title="Primeira Edição"
        @click="$router.push('/primeira-edicao')">
      </v-list-item>
      <v-list-item key="Primeira Edição" prepend-icon="mdi-watermark" title="Patrocínio"
        @click="onItemClick('Patrocinio')">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- Conteúdo -->
  <v-main>
    <v-container>
      <v-window v-model="activeTab">
        <v-window-item value="Casa" id="casa" class="casa text-center">

          <v-row cols="12">
            <v-col>
              <img src="/src/assets/peregrinarte.png" class="peregrinarte-logo" alt="">
            </v-col>
          </v-row>
          <h2 class="d-flex text-center justify-center mx-auto">in via Vitae Christi</h2>

          <div class="casa-info">
            <p>
              <span>PeregrinAr-Te</span> apresenta, na Semana Santa de Braga 2024, a exposição in via Vitae Christi, no
              Museu Pio XII (disponível
              durante o mês de abril) com obras do artista bracarense Jerónimo e de um coletivo de criativos. Estes, no
              local e em livro, mostram-nos a arte inspirada no testemunho de Cristo, enquanto caminho espiritual e
              redentor.
            </p>
            <p>
              Estão convidados para percorrer connosco este caminho de Beleza nos dias 28/03, 06/04 e 20/04. Estaremos
              no Museu Pio XII/Museu Medina e, com um recital, no Salão Nobre do Museu Nogueira da Silva.
              A entrada é gratuita! Basta escolherem um dos dias em destaque para fazerem parte deste PeregrinAr-Te!
              <br>
            </p>
            <h4>
              Pré-inscrição:
            </h4>
            <p>
              <br><b>Museu Pio XII</b> – (+351) 253 200 130;
              <br><b>E-mail:</b> <a href="info@museupioxii.pt" target="_blank">info@museupioxii.pt</a>
            </p>
            <h4>
              <br> Evento: datas e horário
            </h4>
            <p>
              28/03 - Museu Pio XII, 10h às 11h30
              <br> Museu Nogueira da Silva, Salão Nobre, 12h às 13h
            </p>
            <p>
              06/04 - Museu Pio XII, 14h30 às 16h
              <br> Museu Nogueira da Silva, Salão Nobre, 16h30 às 18h
            </p>
            <p>
              20/04 - Museu Pio XII, 14h30 às 16h
              <br>Museu Nogueira da Silva, salão nobre, 16h30 às 18h
            </p>

          </div>
        </v-window-item>
        <v-window-item value="Patrocinio" id="patrocinio" class="patrocinio text-center">
          <Patrocinio />
        </v-window-item>
      </v-window>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import Patrocinio from './PrimeiraEdicao/Paginas/Patrocinio.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(true);
const expandOnHover = ref(true);
const width = 350;
const activeTab = ref('Casa');

const onItemClick = (tab) => {
  activeTab.value = tab;
}

console.log('Rota atual:', router.currentRoute.value.path)

</script>

<style scoped>
#casa {
  border: 4px solid var(--primary-color);
}

#casa h1 {
  font-family: 'Island Moments', serif;
  font-size: 52pt;
  text-align: center;
  padding: 0;
  margin: 0;
  color: var(--primary-color);
}

#casa h2 {
  font-family: 'Island Moments', serif;
  font-size: 42pt;
  text-align: center;
  padding: 0;
  margin: 0;
  color: var(--primary-color);
}

#casa h4 {
  font-size: 32px;
  text-align: left;
  margin: 1rem 0 0 0;
}


#casa,
#patrocinio {
  font-size: x-large;
  background-color: #fff;
  padding: 2rem;
  margin-right: 1rem;
  margin-left: 2rem;
  border-radius: 17px;
}

#casa img {
  max-width: 100%;
  height: 300px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6), -5px 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /* transform: rotate(-2deg); */
  margin: 20px;
}

#casa p {
  font-size: 14pt;
  text-align: justify;
  padding: 1rem;
}

#casa a {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 14pt;

  &:hover {

    text-decoration: underline;
  }
}

.peregrinarte-logo {
  max-width: 90%;
  height: auto !important;
}

@media only screen and (max-width: 1024px) {
  .peregrinarte-logo {
    max-width: 80%;
  }

  #casa,
  #patrocinio {
    margin-right: 2%;
    margin-left: 0 !important;
    padding-left: 0 !important;
  }

  #casa img,
  #patrocinio img {
    max-width: 90%;
  }

}
</style>