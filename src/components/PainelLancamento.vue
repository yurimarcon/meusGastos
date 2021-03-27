<template>
    <div>
        <div class="card">
            <div id="card-body">
                <div class="p-4">
                    <div id="radio"> 
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="entrada" id="entrada" value="entrada" v-model="tipo" @click="selecionaEntrada">
                            <label class="form-check-label verde" for="entada" id="entrada">
                                <b>Entrada</b>
                            </label>
                        </div>
                        <div class="form-check mx-3">
                            <input class="form-check-input" type="radio" name="saida" id="saida" value="saida" v-model="tipo" @click="selecionaSaida">
                            <label class="form-check-label vermelho" for="saida" id="saida">
                                <b>Saída</b>
                            </label>
                        </div>
                    </div>
                    <div class="d-flex w-100">
                        <div class="form-group">
                            <label for="valor">Valor</label>
                            <input type="number" min="0" step="0.01" class="form-control" v-model="valor">
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

        <div v-for="item in todosLancamentos" :key="item.id">
            <ItemLancado :lancamento="item"
            @removeItem="remove($event)" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemLancado from "./ItemLancado"
import Lancamentos from '../models/Lancamentos'

export default {
    name: "PainelLancamento",
    data(){
        return {
            data: '2021-04-26',
            tipo: 'saida',
            valor: '',
            descricao: '',
        }

    },
    components:{
        ItemLancado
    },
    methods:{
        ...mapActions(['salvarLancamento','atualizaCaixa']),
        adicionaItem(){

            if(!this.valor || !this.data || !this.descricao){
                if(!this.valor)alert('Informe o valor a ser lançado');
                if(!this.data)alert('Informe a data do lançamento');
                if(!this.descricao)alert('Informe uma descrição para o lançamento');
                return;
            }

            let data = new Date(this.data);
            let valor1 = parseFloat(this.valor);

            if(this.tipo == 'saida'){
                valor1 = valor1 - (valor1*2);
            }

            data = data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();

            const lancamento = new Lancamentos(
                this.tipo,
                valor1,
                data,
                this.descricao, 
                new Date().getTime()
            );

            this.salvarLancamento(lancamento);
            this.atualizaCaixa();
            
            this.valor = '';
            this.descricao = '';

        },
        remove($event){
            let id = $event.id
            this.lancamentos = this.lancamentos.filter(hit =>{
                return hit.id != id
            });
        },
        selecionaEntrada(){
            this.entrada = 'entrada';
        },
        selecionaSaida(){
            this.entrada = 'saida';
        }
    },
    computed: mapGetters(['todosLancamentos']),

}
</script>

<style scoped>
    #radio{
        display: flex;
    }
    button{
        margin: 10px;
    }

</style>