<template>
	<v-container>
		<header>
			<h2> Peregrinar-Te – Roteiro:</h2>
			<h3>
				<i>
					in via Vitae Mariae <br>
				</i>
				<small>
					Assim também a fé, por si só, se não for acompanhada de obras, está morta. (Tiago 2:17)
				</small>
			</h3>
		</header>

		<p>
		<h3>
			<b>1ª etapa - Maria, menina, mulher e Mãe - 7 de dezembro 2024</b>
		</h3>
		<br>
		<b>Monte de Guadalupe: 14.30-15.20</b>
		<br>
		<b> A Menina, filha de Joaquim e Ana, a destinada </b>
		<br>
		- Ponto de partida para as dinâmicas/participações: escultura de St. Ana a ensinar a menina Maria a ler…
		</p>
		<br>
		<p>
			<b>
				Igreja de de S. Vitor: 15.30 – 16.20
			</b>
			<br>
			<b>
				A Mãe do filho de Deus, Jesus, o Messias, a louvada
			</b><br>
			- Na igreja de S. Vitor, em Braga, acolhimento na palavra dita e cantada (coro de S. Vitor e Padre Sérgio)
		</p>
		<br>
		<p>
			<b>
				Capela da Imaculada: 16.30-17.30
			</b><br>
			<b>
				A Mulher do SIM, a (re)visitada
			</b><br>
			<b>
				Na Capela da Imaculada e Cheia de Graça, no interior do Seminário Menor de Braga
			</b>
			<br>- Visita guiada pelo arquiteto Jorge Fontes e o Padre Joaquim Félix …
			<br>- Dinâmicas de louvor à Beleza de Maria, a Senhora do SIM, a Senhora da Humildade…(…)
		</p>
		<br>
		<hr>
		<br>
		<p>
		<h3>
			<b>2ª etapa - Pela Devoção a Maria, sempre Presente – 10 de maio 2025</b>
		</h3>

		<br>
		<b>
			Conservatório de Música Calouste Gulbenkian Braga
		</b><br>
		<b>
			- Tributo musical a Maria …
		</b><br>
		<b>Ponto de partida:</b> 1 trabalho inspirador de Maria Bethânia, Cânticos, Preces, Súplicas à Senhora dos
		Jardins do Céu
		<br>
		<small>
			“*Gosto das palavras poderosas que carregam em si perguntas e respostas, abismos e chão firme, rios
			subterrâneos, mares luminosos: Âmbar, Álibi, Talismã etc. Mas aqui, a minha opinião era o que menos
			interessava. Somente o essencial: minha fé, profundo amor por Nossa Senhora, o coração manso e a voz que
			Deus me deu. Dentro do turbilhão da vida, todos os momentos e encontros dedicados a realizar este disco foram
			encantados, inesquecíveis, de uma suavidade como há muito, ou melhor, só quando criança experimentei.”</small>
		<br>
		<span class="assinatura">Maria Bethânia</span>
		<br>
		<small>[*Texto de abertura do encarte do CD Cânticos, Preces, Súplicas à Senhora dos Jardins do Céu na voz de
			Maria Bethânia.]</small>
		</p>
		<br>
		<p>
		<h3>
			13 cânticos
		</h3>
		<br>OFERTA DE FLORES
		<br>AVÉ MARIA
		<br>O DOCE MISTÉRIO DE MARIA
		<br>SANTA MARIA (NOVENA DA NOSSA SENHORA DA PURIFICAÇÃO)
		<br>AVÉ MARIA
		<br>FEITIO DE ORAÇÃO
		<br>TOTTA PULCHRA
		<br>MÁE DE DEUS DAS CANDEIAS
		<br>LADAINHA DE SANTO AMARO
		<br>HINO DE NOSSA SENHORA DA PURIFICAÇÃO
		<br>LADAINHA DE NOSSA SENHORA
		<br>MAGNIFICAT
		</p>
		<br><a
			href="https://www.letras.mus.br/maria-bethania/discografia/canticos-preces-suplicas-a-senhora-dos-jardins-do-ceu-2003/"
			target="_blank">https://www.letras.mus.br/maria-bethania/discografia/canticos-preces-suplicas-a-senhora-dos-jardins-do-ceu-2003/</a>
		<br>
		<a href="https://www.biscoitofino.com.br/cd/cd-maria-bethania-canticos-preces-suplicas"
			target="_blank">https://www.biscoitofino.com.br/cd/cd-maria-bethania-canticos-preces-suplicas/</a>
		<br>
		<br>
		<p>
		<h3>
			Santuário de Nossa Senhora do Sameiro
		</h3>
		- Partilhas/dinâmicas da Arte e da Ciência
		<br>- Exposição Ad Mariam per Mariam até 1 de junho
		</p>
		<br>
		<p>
			O Projeto PeregrinAr-Te in via vitae Maria termina associando-se à Peregrinação Arquidiocesana ao
			Sameiro 2025, da Sé Catedral de Braga, rumo ao Monte Sameiro.
		</p>
		<br>


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