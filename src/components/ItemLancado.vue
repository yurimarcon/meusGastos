<template>
    <!-- <div class="d-flex justify-content-around">
        <div >
            <button class="btn btn-danger">Remover</button>
        </div>
        <div id='dados'>
            <span class="valor">R${{ lancamento.valor }}</span>
            <span>{{ lancamento.data }}</span>
            <span>{{ lancamento.descricao }}</span>
        </div>
    </div> -->
    <div class="card">
        <div class="card-body row">
            <div >
                <button @click="removeItem($event)" class="btn btn-danger ml-5 my-auto">Remover</button>
            </div>
            <div id='dados' class="my-auto">
                <span v-if="lancamento.tipo === 'entrada'" class="valor entrada"><b>R${{ lancamento.valor.toLocaleString('pt-br', {minimumFractionDigits: 2}) }}</b></span>
                <span v-else-if="lancamento.tipo === 'saida'" class="valor saida"><b>R${{ lancamento.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</b></span>
                <span>{{ lancamento.data }}</span>
                <span>{{ lancamento.descricao }}</span>
                <span v-show="false" >{{ lancamento.id }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemLancado",
    props:{
        tipo: String,
        lancamento: Object
    },
    methods:{
        removeItem(){
            // console.log(this.lancamento.id)
            this.$emit('removeItem', {id: this.lancamento.id})
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
        padding: 0 50px 0 0;
    }
    .entrada{
        color: green;
    }
    .saida{
        color:orangered;
    }

</style>