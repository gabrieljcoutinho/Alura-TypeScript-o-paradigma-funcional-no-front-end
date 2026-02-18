interface Tarefa {
        descricao: string
        concluida: boolean
}

interface EstadoDaAplicacao{
        tarefas: Tarefa[]
        tarefaSelecionada: Tarefa | null
}

let estadoInicial: EstadoDaAplicacao = {
        tarefas:  [
            {
                descricao: 'Tarefa concluída',
                concluida: true
            },
            {
                descricao: 'Tarefa pendente 1',
                concluida: false
            },
            {
                descricao: 'Tarefa pendente 2',
                concluida: false
            }
        ],

        tarefaSelecionada: null
}

const selecionarTarefa = (estado: EstadoDaAplicacao, tarefa: Tarefa) : EstadoDaAplicacao => {

    return{
        ...estado,
        tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
    }

}

const atualizarUI = () => {
    
}