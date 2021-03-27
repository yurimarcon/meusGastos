<template>
  <div>
        <canvas id='grafico'></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Chart from 'chart.js';

export default {
    name: 'GraficoResumo',
    computed: mapGetters(['todosLancamentos']),
    data(){
        return{
            opcoesGrafico:{
                responsive: true,
                title:{
                    display: true,
                    text: 'Dinheiro em caixa',
                },
                tooltips:{
                    mode: 'index',
                    intersect: false,
                },
                // hover:{
                //     mode: 'nearest',
                //     intersect: false,
                // },
                scales:{
                    xAxes:[
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Dias",
                            }

                        }
                    ],
                    yAxes:[
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Renda"
                            }
                        }
                    ]
                }
            },
        }
    },
    methods:{
        renderizaGrafico(){

            const grafico = document.getElementById('grafico');

            if(grafico){

                let lancamentos = [...this.todosLancamentos];
                lancamentos.sort((a, b)=> new Date(a.data) < new Date(b.data));
                lancamentos.reverse();
    
                let valorEmCaixa = 0;
                let datas = [];
                let valores = [];
    
                datas = lancamentos.map( lancamento =>{
                    valorEmCaixa += lancamento.valor;
                    valores.push(valorEmCaixa)
                    return lancamento.data;
                })
    
                const corCurva = valorEmCaixa > 0 ? 'blue' : 'red';
                const config = {
                    type: "line",
                    data:{
                        labels: datas,
                        datasets:[
                            {
                                label: "Comportamento do seu dinheiro",
                                borderColor: corCurva,
                                backgroundColor: corCurva,
                                data: valores,
                                fill: false
                            }
                        ]
                    },
                    options: this.opcoesGrafico,
                };
                const contexto = document.getElementById('grafico').getContext('2d');
                new Chart(contexto, config);
            }
        }
    },
    mounted(){
        this.renderizaGrafico();
    },
    created(){
        this.$store.subscribe((mutation, state)=>{
            if(mutation.type === "calculaCaixa"){
                this.renderizaGrafico();
                console.log('state');
                console.log(state);
            }
        })
    }
}
</script>

<style scoped>
div{
    width: 90% !important;
}

</style>