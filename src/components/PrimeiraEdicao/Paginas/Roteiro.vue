<template>
    <v-container>
        <header>
            <h2> Peregrinar-Te – Roteiro:</h2>
            <h3>
                in via Vitae Christi
                o(s) olhar(es) do(s) peregrino(s)
            </h3>
            <hr><br>
        </header>

        <p>
            Utilize a o menu de navegação, localizado na barra lateral esquerda, para acessar os capítulos do livro.
        </p>

    </v-container>

</template>

<script setup>
</script>

<style scoped>
.v-container {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    vertical-align: baseline;
    align-items: center;

    gap: 20px;

}
</style>