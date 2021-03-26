<template>
    <div class="card">
        <div class="card-body row">
            <div >
                <button @click="removeItem($event)" class="btn btn-danger ml-5 my-auto"><i class="bi bi-trash"></i> Remover</button>
            </div>
            <div id='dados' class="my-auto">
                <span :class="tipoEnradaSaida == 'entrada' ?  'verde valor' : 'vermelho valor'"><b>R${{ lancamento.valor.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}</b></span>
                <span >{{ lancamento.descricao }}</span>
                <span class="text-muted">{{ lancamento.data }}</span>
                <span v-show="false" >{{ lancamento.id }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "ItemLancado",
    data(){
        return{
            tipoEnradaSaida: this.lancamento.tipo
        }

    },
    props:{
        tipo: String,
        lancamento: Object
    },
    methods: {
        ...mapActions(['deletarLancamento','atualizaCaixa']),
        removeItem(){
            this.deletarLancamento(this.lancamento.id);
            this.atualizaCaixa();
        }
    }
}
</script>

<style scoped>
    div{
        margin-top : 10px;
        justify-content:space-between;
    }
    #dados span {
        display: block;
        text-align: right;
        padding: 0 50px 0 0;
    }
    .valor{
        font-size: 2rem;
    }

</style>