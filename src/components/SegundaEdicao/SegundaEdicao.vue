<template>
    <v-app>
        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" app rail :expand-on-hover :permanent="true" :width="width">
            <!-- Conteúdo do Drawer -->
            <v-list dense>
                <v-list>
                    <v-list-item class="logo-menu" prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te" subtitle="">
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item key="HOME" prepend-icon="mdi-home" title="Casa" @click="goTo('/')">
                    </v-list-item>
                    <v-list-item v-show="!etapas" v-for="item in itemsRaiz" :key="item.title" :prepend-icon="item.icon"
                        :title="item.title" :subtitle="item.subtitle" @click="onMenuItemClick(item)">
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item key="etapas" prepend-icon="mdi-format-list-bulleted" title="Etapas"
                        subtitle="Etapas I a VIII" @click="etapas = !etapas">
                    </v-list-item>
                </v-list>
                <v-list>

                    <v-list-item v-show="etapas" v-for="item in items" :key="item.title" :prepend-icon="item.icon"
                        :title="item.title" :subtitle="item.subtitle" @click="onMenuItemClick(item)">
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item v-show="!etapas" v-for="item in itemsFinais" :key="item.title"
                        :prepend-icon="item.icon" :title="item.title" :subtitle="item.subtitle"
                        @click="onMenuItemClick(item)">
                    </v-list-item>


                </v-list>
            </v-list>
        </v-navigation-drawer>

        <!-- Conteúdo -->
        <v-main>

            <v-container>
                <v-card-text>
                    <v-window v-model="activeTab">

                        <!-- TAB 1 - Consultar Dados da Ideia -->
                        <v-window-item value="tab-start">
                            <!-- Start CASA-->
                        </v-window-item>

                        <!-- Ícone Coração -->
                        <v-window-item value="tab-icone-coracao">
                            <!-- <Joia /> -->
                        </v-window-item>

                        <!-- Roteiro -->
                        <v-window-item value="tab-roteiro">
                            <Roteiro />
                        </v-window-item>

                        <!-- Partida -->
                        <v-window-item value="tab-partida" class="container-conteudo">
                            <Partida />
                        </v-window-item>

                        <!-- Etapa 1 -->
                        <v-window-item value="tab-1">
                            <!-- <etapa1 /> -->
                        </v-window-item>

                        <!-- Etapa 2 -->
                        <v-window-item value="tab-2">
                            <!-- <etapa2 /> -->
                        </v-window-item>

                        <!-- Etapa 3 -->
                        <v-window-item value="tab-3">
                            <!-- <etapa3 /> -->
                        </v-window-item>

                        <!-- Etapa 4 -->
                        <v-window-item value="tab-4">
                            <!-- <etapa4 /> -->
                        </v-window-item>

                        <v-window-item value="tab-5">
                            <!-- Etapa 5 -->
                            <!-- <etapa5 /> -->
                        </v-window-item>

                        <v-window-item value="tab-6">
                            <!-- Etapa 6 -->
                            <!-- <etapa6 /> -->
                        </v-window-item>

                        <v-window-item value="tab-7">
                            <!-- Etapa 7 -->
                            <!-- <etapa7 /> -->
                        </v-window-item>

                        <v-window-item value="tab-8">
                            <!-- Etapa 8 -->
                            <!-- <etapa8 /> -->
                        </v-window-item>

                        <v-window-item value="tab-descanso">
                            <!-- Pagina Descanso -->
                            <!-- <Descanso /> -->
                        </v-window-item>

                        <v-window-item value="tab-8">
                            <!-- Etapa 9 -->
                        </v-window-item>

                        <v-window-item value="tab-musica" class="container-conteudo">
                            <!-- <Musica /> -->
                        </v-window-item>

                        <!-- Etapa 10 -->
                        <v-window-item value="CompanheirosDeCaminho">
                            <!-- <CompanheirosDeCaminho /> -->
                        </v-window-item>

                        <v-window-item value="tab-8">
                            <!-- Etapa 11 -->
                        </v-window-item>

                        <v-window-item value="tab-citacao-final">
                            <!-- <CitacaoFinal /> -->
                        </v-window-item>
                        
                    </v-window>
                </v-card-text>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
//  import Joia from './Paginas/Joia.vue';
import Partida from './Etapas/Partida.vue';
import Roteiro from './Paginas/Roteiro.vue';
// import Etapa1 from './Etapas/Etapa1.vue';
// import Etapa2 from './Etapas/Etapa2.vue';
// import Etapa3 from './Etapas/Etapa3.vue';
// import Etapa4 from './Etapas/Etapa4.vue';
// import Etapa5 from './Etapas/Etapa5.vue';
// import Etapa6 from './Etapas/Etapa6.vue';
// import Etapa7 from './Etapas/Etapa7.vue';
// import Etapa8 from './Etapas/Etapa8.vue';
// import Descanso from './Paginas/Descanso.vue';
// import Musica from './Paginas/Musica.vue';
// import CompanheirosDeCaminho from './Paginas/CompanheirosDeCaminho.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const activeTab = ref('tab-partida');
const drawer = ref(true);
const expandOnHover = ref(true);
const width = 350;
const etapas = ref(false);


function onMenuItemClick(item) {
    activeTab.value = item.tab;
    width.value = true;
}

function goTo(route) {
    router.push(route);
    drawer.value = false;
}





const itemsRaiz = [
    { title: 'Partida ', subtitle: 'Prefácio', icon: 'mdi-ray-start-arrow', tab: 'tab-partida' },
    // { title: 'Jóia ', subtitle: 'CorAção em Ação ', icon: 'mdi-heart-settings-outline', tab: 'tab-icone-coracao' },
    { title: 'Roteiro: ', subtitle: 'Jóin via Vitae Christi', icon: 'mdi-chart-timeline', tab: 'tab-roteiro' },
];
const items = [
    // { t11: 'Etapa I', title: 'Anunciação', icon: 'mdi-roman-numeral-1', tab: 'tab-1' },
    // { t11: 'Etapa II', title: 'Nascimento', icon: 'mdi-roman-numeral-2', tab: 'tab-2' },
    // { t11: 'Etapa III', title: 'Autorrevelação... bodas de Caná', icon: 'mdi-roman-numeral-3', tab: 'tab-3' },
    // { t11: 'Etapa IV', title: 'Última Ceia e Instituição eucarística', icon: 'mdi-roman-numeral-4', tab: 'tab-4' },
    // { t11: 'Etapa V', title: 'Coroação de Espinhos e Crucifixão', icon: 'mdi-roman-numeral-5', tab: 'tab-5' },
    // { t11: 'Etapa VI', title: 'Senhora Diante da Cruz  Pietá', icon: 'mdi-roman-numeral-6', tab: 'tab-6' },
    // { t11: 'Etapa VII', title: 'Ressurreição', icon: 'mdi-roman-numeral-7', tab: 'tab-7' },
    // { t11: 'Etapa VIII', title: 'Caminho e Ceia de Emaús', icon: 'mdi-roman-numeral-8', tab: 'tab-8' }
];
const itemsFinais = [
    { subtitle: 'Exposição fotográfica', title: 'Descanso', icon: 'mdi-pause-box-outline', tab: 'tab-descanso' },
    { subtitle: 'Concerto Musical', title: 'Música ', icon: 'mdi-music-rest-sixteenth', tab: 'tab-musica' },
    { subtitle: '', title: 'Credencial ', icon: 'mdi-badge-account-horizontal-outline', tab: 'tab-11' },
    { subtitle: '', title: 'Companheiros de Caminho', icon: 'mdi-account-supervisor', tab: 'CompanheirosDeCaminho' },
    { subtitle: 'Citação Final', title: ' ', icon: 'mdi-ray-end', tab: 'tab-citacao-final' },
];



</script>

<style>
.container-conteudo {
    padding: 1rem;
    margin: 1rem;
    width: 98%;
    height: 100%;
    overflow: auto;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>