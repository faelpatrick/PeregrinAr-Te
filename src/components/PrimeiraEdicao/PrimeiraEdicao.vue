<template>
    <v-app>
        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" app rail :mini-variant="isMiniVariant" :expand-on-hover="expandOnHover"
            :class="{ 'mini-variant': isMiniVariant, 'expand-on-hover': expandOnHover }" :width="width">
            <!-- Conteúdo do Drawer -->
            <v-list dense>
                <v-list>
                    <v-list-item prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te"
                        style="font-family: 'Island Moments'; font-size: 32px;">
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item v-for="item in items" :key="item.title" :prepend-icon="item.icon" :title="item.title"
                        :subtitle="item.subtitle" @click="onMenuItemClick(item)">
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
                        <v-window-item value="tab-1">
                            Capitulo 1
                            <capitulo1 />
                        </v-window-item>

                        <v-window-item value="tab-2">
                            Capitulo 2
                            <capitulo2 />
                        </v-window-item>

                        <v-window-item value="tab-3">
                            Capitulo 3
                            <capitulo3 />
                        </v-window-item>

                        <v-window-item value="tab-4">
                            Capitulo 4
                        </v-window-item>

                        <v-window-item value="tab-5">
                            Capitulo 5
                        </v-window-item>

                        <v-window-item value="tab-6">
                            Capitulo 6
                        </v-window-item>

                        <v-window-item value="tab-7">
                            Capitulo 7
                        </v-window-item>

                        <v-window-item value="tab-8">
                            Capitulo 8
                        </v-window-item>
                    </v-window>
                </v-card-text>



            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Capitulo1 from './Capitulos/Capitulo1.vue';
import Capitulo2 from './Capitulos/Capitulo2.vue';
import Capitulo3 from './Capitulos/Capitulo3.vue';

const activeTab = ref('tab-1');
const drawer = ref(true);
const isMiniVariant = ref(true);
const expandOnHover = ref(true);
const width = 350;


function onMenuItemClick(item) {
    activeTab.value = item.tab;
    drawer.value = true;

}

function adjustDrawerBehavior() {
    if (window.innerWidth <= 960) {
   
    } else {
    
    }
}





const items = [
    { title: 'Capitulo I', subtitle: 'Anunciação', icon: 'mdi-roman-numeral-1', tab: 'tab-1' },
    { title: 'Capitulo II', subtitle: 'Nascimento', icon: 'mdi-roman-numeral-2', tab: 'tab-2' },
    { title: 'Capitulo III', subtitle: 'Autorrevelação... bodas de Caná', icon: 'mdi-roman-numeral-3', tab: 'tab-3' },
    { title: 'Capitulo IV', subtitle: 'Última Ceia e Instituição eucarística', icon: 'mdi-roman-numeral-4', tab: 'tab-4' },
    { title: 'Capitulo V', subtitle: 'Coroação de Espinhos e Crucifixão', icon: 'mdi-roman-numeral-5', tab: 'tab-5' },
    { title: 'Capitulo VI', subtitle: 'Senhora Diante da Cruz  Pietá', icon: 'mdi-roman-numeral-6', tab: 'tab-6' },
    { title: 'Capitulo VII', subtitle: 'Ressurreição', icon: 'mdi-roman-numeral-7', tab: 'tab-7' },
    { title: 'Capitulo VIII', subtitle: 'Caminho e Ceia de Emaús', icon: 'mdi-roman-numeral-8', tab: 'tab-8' },
]


</script>

<style>
.v-toolbar-title {
    font-family: 'Island Moments';
    font-size: 2.8rem !important;
}

.v-main {
    background-repeat: repeat;
    background-position: center;
}



.v-navigation-drawer__content,
.v-bottom-navigation,
.v-navigation-drawer,
.v-tabs,
.v-tab {
    color: #ffffff;
    background-color: #124c74;
}

.v-tab .v-icon {
    font-size: 24px;
}
</style>