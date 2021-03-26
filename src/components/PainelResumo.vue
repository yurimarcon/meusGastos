<template>
    <div class="card">
        <div class="card-body">
            <div class="titleResumo">
                <h1>Dinheiro em Caixa</h1>
                <h3 :class="{ verde : dinheiroEmCaixa>0, vermelho : dinheiroEmCaixa<0 } ">R${{ dinheiroEmCaixa.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}</h3>
            </div>
        </div>
        <div class="grafico">
            <GraficoResumo />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GraficoResumo from './GraficoResumo'

export default {
    name: "PainelLancamento",
    components: { GraficoResumo },
    computed: mapGetters(['dinheiroEmCaixa']),
    methods:{
        ...mapActions(['atualizaCaixa'])
    },
    created(){
        this.atualizaCaixa();
    }
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
.grafico{
    width: 100%;
}
@media screen and (max-width: 700px){
  div{
    width: 100%;
    margin-bottom: 1%;
  }
  .titleResumo{
    width: 100%;
    text-align: center;
}
}
</style>