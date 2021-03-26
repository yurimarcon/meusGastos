const moduloLancamentos = {
    state       : {
        lancamentos:[
            {
                valor       :128,
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
            }
        ],
        caixa: 4
    },
    getters     : {
        todosLancamentos: state => state.lancamentos,
        dinheiroEmCaixa : state => state.caixa
    },
    actions     : {},
    matations   : {}
}

export default moduloLancamentos;