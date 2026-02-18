interface Tarefa {
        descricao: string
        concuida: boolean
}

interface EstadoDaAplicacao{
        tarefas: Tarefa[]
        tarefaSelecionada: Tarefa[]
}