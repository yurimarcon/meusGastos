<template>
    <div>
        <form class="p-4">
            <div id="radio"> 
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="entrada" value="option1">
                    <label class="form-check-label" for="entada" id="entrada">
                        <b>Entrada</b>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="saida" value="option2">
                    <label class="form-check-label" for="saida" id="saida">
                        <b>Saída</b>
                    </label>
                </div>
            </div>
            <div class="d-flex w-100">
                <div class="form-group">
                    <label for="valor">Valor</label>
                    <input type="number" class="form-control" id="valor" aria-describedby="">
                </div>
                <div class="form-group mx-5">
                    <label for="valor">Data</label>
                    <input type="date" class="form-control" id="date"/>
                </div>
            </div>

            <div class="form-group w-100">
                <label for="textarea">Descrição</label>
                <textarea row=3  class="form-control" id="descricao"/>
            </div>
            <button type="submit" class="btn btn-primary">Lançar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "PainelLancamento"
}
</script>

<style scoped>
    div{
        background-color: #fff;
        border-radius: 10px;
        width: 40%;
    }
    #radio{
        display: flex;
    }
    #entrada{
        color: green;
    }
    #saida{
        color: red;
    }
    button{
        margin: 10px;
    }

</style>