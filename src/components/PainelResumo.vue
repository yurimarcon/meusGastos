<template>
    <div class="card">
        <div class="card-body">
            <div class="titleResumo">
                <h1>Dinheiro em Caixa</h1>
                <h3>R$0,00</h3>
            </div>
            <div class="grafico">
                <canvas id="myChart"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PainelLancamento",
}
</script>

<style scoped>
div{
    width: 60%;
    max-height: 500px;;
}
.card-body{
    width: 100%;
}
.titleResumo{
    width: 100%;
    text-align: right;
}

</style>