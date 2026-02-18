interface Tarefa {
        descricao: string
        concluida: boolean
}

interface EstadoDaAplicacao{
        tarefas: Tarefa[]
        tarefaSelecionada: Tarefa | null
}

let estado: EstadoDaAplicacao = {
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



}