interface Tarefa {
        descricao: string
        concluida: boolean
}

interface EstadoDaAplicacao{
        tarefas: Tarefa[]
        tarefaSelecionada: Tarefa[]
}

let estado: EstadoDaAplicacao = {
        tarefas:
}