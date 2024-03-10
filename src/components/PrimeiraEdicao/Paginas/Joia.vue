<template>
    <div class="joia_container">

        <div class="joia">

            <img src=" @/assets/imagens/joia.jpg" alt="">
            <div class="box_title">
                <h2>Joia</h2>
                <h3>PeregrinAr-Te in via Vitae Christi 2024</h3>
            </div>
        </div>

        <div class="joia">

            <img src="@/assets/imagens/joia1.jpg" alt="">
            <div class="box_title">
                <h2>Joia</h2>
                <h3>PeregrinAr-Te in via Vitae Christi 2024</h3>

            </div>
        </div>
        <div class="joia">

            <img src="@/assets/imagens/joia2.jpg" alt="">
            <div class="box_title">
                <h2>Joia</h2>
                <h3>PeregrinAr-Te in via Vitae Christi 2024</h3>

            </div>
        </div>
        <div class="joia">

            <img src="@/assets/imagens/joia3.jpg" alt="">
            <div class="box_title">
                <h2>Joia</h2>
                <h3>PeregrinAr-Te in via Vitae Christi 2024</h3>

            </div>
        </div>
    </div>

</template>

<style scoped>
img {
    max-height: 90vw;
    height: 250px;
    border: solid black 2px !important;
    border: solid #ffffff 4px !important;
    border-radius: 2px;
    box-shadow: 0 0 10px #00000050;
    max-width: 300px;
    transition: 0.5s;
}

img:hover {
    cursor: pointer;
    border: solid var(--primary-color) 4px !important;
    box-shadow: 0 0 10px var(--primary-color);
    border-radius: 2px;
    transition: 0.5s;
    rotate: 3deg;

}

.joia_container
{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    margin-right: 3rem;
    margin-top: 10px;
    grid-auto-flow: row;
    align-items: center;
    
    }

.joia {
    
    width: 100%;
    height: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px #00000050;
    padding: 1rem !important;
    margin: 1.3rem;
    border-radius: 15px;
    overflow: hidden;
    transition: 0.5s;   
    
    background-color: var(--primary-color);
    filter: blur(0.2px);
    border: solid var(--primary-color) 4px;

}

.joia:hover {
    cursor: pointer;
    box-shadow: 0 0 10px var(--primary-color);
    border-radius: 15px;
    transition: 0.5s;
    
    background-color: #ffffff80;
}

.box_title {
    background-color: #fdfdfd;
    border: solid var(--primary-color) 3px;
    box-shadow: 0 0 10px #00000050;
    padding: .5rem !important;
    margin: -1.3rem;
    margin-top: 1rem;
    border-radius: 0 0  15px 15px;
    text-align: center;
    width: 107%;
    height: 101%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
}
</style>