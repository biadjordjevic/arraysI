/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

tarefasLimpeza[0] = prompt('Ana, qual vai ser a sua primeira tarefa? ')
tarefasLimpeza[1] = prompt('e a segunda? ')
tarefasLimpeza[2] = prompt('qual a próxima? ')
tarefasLimpeza[3] = prompt('digite sua terceira tarefa: ')

tarefasLimpeza.splice(2,1)

tarefasLimpeza[1] = ('limpar banheiro')

console.log(tarefasLimpeza)



