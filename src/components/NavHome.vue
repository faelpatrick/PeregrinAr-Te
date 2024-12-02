<template>
    <v-navigation-drawer v-model="drawer" app rail :expand-on-hover :permanent="true" :width="width">
        <v-list dense>
            <v-list style="font-size: 32pt; padding: 0;">
                <v-list-item class="logo-menu" prepend-avatar="@/assets/logo.png" title="PeregrinAr-Te" subtitle="">
                </v-list-item>
            </v-list>
            <v-list-item key="HOME" prepend-icon="mdi-home" title="Casa" @click="$router.push('/')">
            </v-list-item>
            <v-list-item key="Pri.Ed" prepend-icon="mdi-book-open-page-variant" title="Segunda Edição"
                @click="$router.push('/segunda-edicao')">
            </v-list-item> 
            <v-list-item key="Pri.Ed" prepend-icon="mdi-bookshelf" title="Primeira Edição"
                @click="$router.push('/primeira-edicao')">
            </v-list-item>
            <v-list-item key="Pri.Ed" prepend-icon="mdi-watermark" title="Patrocínio"
            @click="$router.push('/patrocinio')">
            </v-list-item>
            <v-list-item key="Pri.Ed" prepend-icon="mdi-youtube-tv" title="Live e Videos"
            @click="$router.push('/live')">
            </v-list-item>
            <v-list-item key="Noticias" prepend-icon="mdi-newspaper" title="Notícias" 
            @click="$router.push('/noticias')">
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    activeTab: String
});

function onItemClick(tab) {
    props.activeTab.value = tab;
}

const drawer = ref(true);
const expandOnHover = ref(true);
const width = 350;


</script>

<style></style>