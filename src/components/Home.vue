<template>
  <NavHome :activeTab="activeTab" />
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
            <p style="text-decoration: line-through;">
              28/03 - Museu Pio XII, 10h às 11h30
              <br> Museu Nogueira da Silva, Salão Nobre, 12h às 13h
            </p>
            <p  style="text-decoration: line-through;">
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
        <v-window-item value="Live" id="live" class="live text-center">
          <Live />
        </v-window-item>
        <v-window-item>
          <Noticias />
        </v-window-item>
        <v-window-item>
          <CitacaoFinal />
        </v-window-item>
        < </v-window>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import NavHome from './NavHome.vue';
import { useRouter } from 'vue-router';
import CitacaoFinal from './PrimeiraEdicao/Paginas/CitacaoFinal.vue';

const router = useRouter();
const activeTab = ref('Casa');

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

  #patrocinio {
    margin-right: 2%;
    margin-left: 1rem !important;
    padding-left: 1rem !important;
  }

  #casa img,
  #patrocinio img {
    max-width: 90%;
  }

  #casa {
    padding-left: 2rem !important;
    margin-right: 2%;
    margin-left: 0 !important;
  }

  #casa h4 {
    font-size: 1.5rem !important;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  #casa p {
    margin-top: 0px;
    padding-top: 0px;
  }

}
</style>