<template>
	<v-container>
			<header>
					<h2> Peregrinar-Te – Roteiro:</h2>
					<h3>
							in via Vitae Christi
							o(s) olhar(es) do(s) peregrino(s)
					</h3>
			</header>

			<p>
					Utilize a o menu de navegação, localizado na barra lateral esquerda, para acessar os Etapas do livro.
			</p>
			<br>
			<div class="materiais-container">
					<v-img src="@/assets/materiais/Cartaz.jpg" alt="Roteiro1" />
					<v-img src="@/assets/materiais/convite frente.jpg" alt="Roteiro1" />
					<v-img src="@/assets/materiais/convite verso.jpg" alt="Roteiro1" />
			</div>

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

.materiais-container {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 10px;
	flex-wrap: wrap;
}

@media screen and (max-width: 1024px) {
	header {
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 10px;
	}

	p {
			text-align: justify;
			margin: 0 10px;
	}
.materiais-container {
	flex-wrap: wrap;
}
	.materiais-container .v-img {
			width: 100%;
	}
	
}
</style>