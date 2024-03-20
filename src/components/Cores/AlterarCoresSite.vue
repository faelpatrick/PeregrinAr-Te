<template>
    <div id="menu-color-container">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn class="menu-cor" icon="mdi-palette" v-bind="props"></v-btn>
            </template>

            <v-list>
                <v-list-item class="azul" @click="mudarCorSite('Azul')">
                    <v-list-item-title>Azul</v-list-item-title>
                </v-list-item>
                <v-list-item class="castanho" @click="mudarCorSite('Castanho')">
                    <v-list-item-title>Castanho</v-list-item-title>
                </v-list-item>
                <v-list-item class="vermelho" @click="mudarCorSite('Vermelho')">
                    <v-list-item-title>Vermelho</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const menu = {
    bgColor: '#124c74',
    textColor: '#ffffff',
    bgAzul: '#124c74',
    bgCastanho: '#e9decf',
    bgVermelho: '#622f31',
}

function mudarCorSite(color) {
    const root = document.documentElement;
    switch (color) {
        case 'Azul':
            root.style.setProperty('--menu-bg-color', menu.bgAzul);
            root.style.setProperty('--menu-text-color', '#ffffff');
            break;
        case 'Castanho':
            root.style.setProperty('--menu-bg-color', menu.bgCastanho);
            root.style.setProperty('--menu-text-color', '#000000');
            break;
        case 'Vermelho':
            root.style.setProperty('--menu-bg-color', menu.bgVermelho);
            root.style.setProperty('--menu-text-color', '#ffffff');
            break;
        default:
            break;
    }
}
</script>


<style scoped>
#menu-color-container {
    position: absolute;
    top: 10px;
    right: 0px;
    width: 60px;
    height: 60px;
}

.menu-cor {
    background-color: var(--menu-bg-color) !important;
    color: var(--menu-text-color) !important;
}

.azul {
    background-color: #124c74 !important;
    color: #ffffff !important;
}

.castanho {
    background-color: #e9decf !important;
    color: #000000 !important;
}   

.vermelho {
    background-color: #622f31 !important;
    color: #ffffff !important;
}


</style>