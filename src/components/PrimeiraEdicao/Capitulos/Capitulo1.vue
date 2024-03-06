<template>
    <img src="@/assets/imagens/anunciacao.jpg" alt="" class="ma-5" aspect-ratio="1" @click="dialog = true"
        style="max-width: 300px; cursor: pointer;"></img>

    <!-- Dialog que mostra a imagem em zoom -->
    <v-dialog v-model="dialog" persistent max-width="800px">
        <v-card>
            <img src="@/assets/imagens/anunciacao.jpg" class="white--text align-end" aspect-ratio="1.5" @click="dialog = false">
                <v-card-title>Texto discritivo da imagem acima:
                    <p>Lorem ipsom dolor sit amet....</p>
                </v-card-title>
            </img>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false">Fechar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);


</script>

<style >
.v-dialog img {
    max-width: 90vw;
}
img {
    width: 100%;
    border: solid black 2px !important;
    border: solid #ffffff 4px !important;
    border-radius: 2px;
    box-shadow: 0 0 10px #00000050;
    max-width: 300px;

}
</style>