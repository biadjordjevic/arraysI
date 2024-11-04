/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = []

metasSemana [0] = prompt('Digite uma meta: ')
metasSemana [1] = prompt('Digite uma meta: ')
metasSemana [2] = prompt('Digite uma meta: ')

if( metasSemana [metasSemana.length - 1] != "execício físico"){
    metasSemana [1] = ('praticar esportes')
    console.log(metasSemana)
}

else{
    console.log(metasSemana)
}