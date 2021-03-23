<template>
    <div class="d-flex justify-content-around">
        <div >
            <button class="btn btn-danger">Remover</button>
        </div>
        <div id='dados'>
            <span class="valor">R${{ lancamento.valor }}</span>
            <span>{{ lancamento.data }}</span>
            <span>{{ lancamento.descricao }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemLancado",
    props:{
        tipo: String,
        lancamento: Object
    }
}
</script>

<style scoped>
    div{
        margin-top : 10px;
        margin-bottom : 10px;
        background-color: #fff;
        border-radius: 10px;
    }
    #dados span{
        display: block;
    }

</style>