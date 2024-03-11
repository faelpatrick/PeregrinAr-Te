<template>
    <v-app>
        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" app rail :expand-on-hover :permanent="true" :width="width">
            <!-- Conteúdo do Drawer -->
            <v-list dense>
                <v-list>

                    <v-list-item prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te"
                        style="font-family: 'Island Moments'; font-size: 32px;">
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item key="HOME" prepend-icon="mdi-home" title="Casa" @click="goTo('/')">
                    </v-list-item>
                    <v-list-item v-show="!capitulos" v-for="item in itemsRaiz" :key="item.title"
                        :prepend-icon="item.icon" :title="item.title" :subtitle="item.subtitle"
                        @click="onMenuItemClick(item)">
                    </v-list-item>

                    <v-divider></v-divider>
                    <v-list-item key="Capitulos" prepend-icon="mdi-format-list-bulleted" title="Capitulos"
                        @click="capitulos = !capitulos">
                    </v-list-item>
                </v-list>
                <v-list>

                    <v-list-item v-show="capitulos" v-for="item in items" :key="item.title" :prepend-icon="item.icon"
                        :title="item.title" :subtitle="item.subtitle" @click="onMenuItemClick(item)">
                    </v-list-item>
                    
                    <v-divider></v-divider>
                    <v-list-item v-show="!capitulos" v-for="item in itemsFinais" :key="item.title"
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

                        <!-- Simbolo Coração -->
                        <v-window-item value="tab-simbol">
                            <Joia />
                        </v-window-item>

                        <!-- Capitulo 1 -->
                        <v-window-item value="tab-1">
                            <capitulo1 />
                        </v-window-item>

                        <!-- Capitulo 2 -->
                        <v-window-item value="tab-2">
                            <capitulo2 />
                        </v-window-item>

                        <!-- Capitulo 3 -->
                        <v-window-item value="tab-3">
                            <capitulo3 />
                        </v-window-item>

                        <!-- Capitulo 4 -->
                        <v-window-item value="tab-4">
                            <capitulo4 />
                        </v-window-item>

                        <v-window-item value="tab-5">
                            <!-- Capitulo 5 -->
                        </v-window-item>

                        <v-window-item value="tab-6">
                            <!-- Capitulo 6 -->
                        </v-window-item>

                        <v-window-item value="tab-7">
                            <!-- Capitulo 7 -->
                        </v-window-item>

                        <v-window-item value="tab-8">
                            <!-- Capitulo 8 -->
                        </v-window-item>

                        <v-window-item value="tab-8">
                            <!-- Capitulo 9 -->
                        </v-window-item>

                        <!-- Capitulo 10 -->
                        <v-window-item value="CompanheirosDeCaminho">
                            <CompanheirosDeCaminho />
                        </v-window-item>

                        <v-window-item value="tab-8">
                            <!-- Capitulo 11 -->
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Joia from './Paginas/Joia.vue';
import Capitulo1 from './Capitulos/Capitulo1.vue';
import Capitulo2 from './Capitulos/Capitulo2.vue';
import Capitulo3 from './Capitulos/Capitulo3.vue';
import Capitulo4 from './Capitulos/Capitulo4.vue';
import CompanheirosDeCaminho from './Paginas/CompanheirosDeCaminho.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const activeTab = ref('tab-1');
const drawer = ref(true);
const expandOnHover = ref(true);
const width = 350;
const capitulos = ref(false);


function onMenuItemClick(item) {
    activeTab.value = item.tab;
    width.value = true;
}

function goTo(route) {
    router.push(route);
    drawer.value = false;
}





const itemsRaiz = [
    { title: 'Partida ', subtitle: 'Prefácio', icon: 'mdi-ray-start-arrow', tab: 'tab-start' },
    { title: 'Jóia ', subtitle: 'CorAção em Ação ', icon: 'mdi-heart-settings-outline', tab: 'tab-simbol' },
    { title: 'Roteiro: ', subtitle: 'Jóin via Vitae Christi', icon: 'mdi-chart-timeline', tab: 'tab-simbol' },
];
const items = [
    { t11: 'Capitulo I', title: 'Anunciação', icon: 'mdi-roman-numeral-1', tab: 'tab-1' },
    { t11: 'Capitulo II', title: 'Nascimento', icon: 'mdi-roman-numeral-2', tab: 'tab-2' },
    { t11: 'Capitulo III', title: 'Autorrevelação... bodas de Caná', icon: 'mdi-roman-numeral-3', tab: 'tab-3' },
    { t11: 'Capitulo IV', title: 'Última Ceia e Instituição eucarística', icon: 'mdi-roman-numeral-4', tab: 'tab-4' },
    { t11: 'Capitulo V', title: 'Coroação de Espinhos e Crucifixão', icon: 'mdi-roman-numeral-5', tab: 'tab-5' },
    { t11: 'Capitulo VI', title: 'Senhora Diante da Cruz  Pietá', icon: 'mdi-roman-numeral-6', tab: 'tab-6' },
    { t11: 'Capitulo VII', title: 'Ressurreição', icon: 'mdi-roman-numeral-7', tab: 'tab-7' },
    { t11: 'Capitulo VIII', title: 'Caminho e Ceia de Emaús', icon: 'mdi-roman-numeral-8', tab: 'tab-8' }
];
const itemsFinais = [
    { subtitle: 'Exposição fotográfica', title: 'Descanso', icon: 'mdi-pause-box-outline', tab: 'tab-9' },
    { subtitle: 'Concerto Musical', title: 'Música ', icon: 'mdi-music-rest-sixteenth', tab: 'tab-10' },
    { subtitle: '', title: 'Credencial ', icon: 'mdi-badge-account-horizontal-outline', tab: 'tab-11' },
    { subtitle: '', title: 'Companheiros de Caminho', icon: 'mdi-account-supervisor', tab: 'CompanheirosDeCaminho' },
    { subtitle: 'Citação Final', title: ' ', icon: 'mdi-ray-end', tab: 'tab-13' },
];



</script>

<style></style>