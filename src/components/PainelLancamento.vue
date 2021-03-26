<template>
    <div>
        <div class="card">
            <div id="card-body">
                <div class="p-4">
                    <div id="radio"> 
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="entrada" value="true" @click="selecionaEntrada">
                            <label class="form-check-label" for="entada" id="entrada">
                                <b>Entrada</b>
                            </label>
                        </div>
                        <div class="form-check mx-3">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="saida" value="option2" @click="selecionaSaida">
                            <label class="form-check-label" for="saida" id="saida">
                                <b>Saída</b>
                            </label>
                        </div>
                    </div>
                    <div class="d-flex w-100">
                        <div class="form-group">
                            <label for="valor">Valor</label>
                            <input type="number" class="form-control" v-model='valor'>
                        </div>
                        <div class="form-group mx-5">
                            <label for="valor">Data</label>
                            <input type="date" class="form-control" id="date" v-model='data'/>
                        </div>
                    </div>

                    <div class="form-group w-100">
                        <label for="textarea">Descrição</label>
                        <textarea row=3  class="form-control" id="descricao" v-model='descricao'/>
                    </div>
                    <button @click="adicionaItem" class="btn btn-primary">Lançar</button>
                </div>
            </div>

        </div>

        <div v-for="item in lancamentos" :key="item.valor">
            <ItemLancado :lancamento="{
                tipo: item.tipo,
                valor: item.valor,
                data: item.data,
                descricao: item.descricao,
                id: item.id
            }" @removeItem="remove($event)" />
        </div>
    </div>
</template>

<script>
import ItemLancado from "./ItemLancado"

export default {
    name: "PainelLancamento",
    data(){
        return {
            data: '2021-04-26',
            entrada: true,
            valor: 10,
            descricao: '',
            lancamentos:[
                {
                    valor       :123,
                    data        :"2021-03-23",
                    descricao   :'teste x',
                    tipo        :'entrada',
                    id          : new Date().getTime() + 1
                },
                {
                    valor       :124,
                    data        :"2021-03-23",
                    descricao   :'teste y',
                    tipo        :'saida',
                    id          : new Date().getTime() + 2
                },
                {
                    valor       :125.02,
                    data        :"2021-03-23",
                    descricao   :'teste z', 
                    tipo        :'entrada',
                    id          : new Date().getTime() + 3
                },
            ]

        }

    },
    components:{
        ItemLancado
    },
    methods:{
        adicionaItem(){
            
            let tipoEntrada;

            if(this.entrada){
                tipoEntrada = 'entrada';
            }else{
                tipoEntrada = 'saida';
            }

            this.lancamentos.push({
                valor       : parseFloat(this.valor),
                data        : this.data,
                descricao   : this.descricao, 
                tipo        : tipoEntrada,
                id          : new Date().getTime()
            })
        },
        remove($event){
            let id = $event.id
            this.lancamentos = this.lancamentos.filter(hit =>{
                return hit.id != id
            });
        },
        selecionaEntrada(){
            this.entrada = true;
        },
        selecionaSaida(){
            this.entrada = false;
        }
    }
    

}
</script>

<style scoped>
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