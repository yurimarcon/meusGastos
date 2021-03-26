const moduloLancamentos = {
    state       : {
        lancamentos:[],
        caixa: 4
    },
    getters     : {
        todosLancamentos: state => state.lancamentos,
        dinheiroEmCaixa : state => state.caixa
    },
    actions     : {
        salvarLancamento: ({ commit }, lancamento)=>{
            commit('adicionaLancamento', lancamento);
        },
        deletarLancamento: ({ commit }, id)=>{
            commit('removeLancamento', id);
        },
        atualizaCaixa: ({ commit }) =>{
            commit('calculaCaixa');
        }
    },
    mutations   : {
        adicionaLancamento: (state, lancamento) =>{
            state.lancamentos.unshift(lancamento);
        },
        removeLancamento: (state, id) =>{
            state.lancamentos = state.lancamentos.filter(hit => hit.id != id);
        },
        calculaCaixa: state =>{
            const caixa = 
                state.lancamentos.length > 0
                ? state.lancamentos
                    .map(lancamento=>lancamento.valor)
                    .reduce((soma, valor) => soma + valor)
                :0;
            
            state.caixa = caixa;

        }
    }
}

export default moduloLancamentos;