/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []

listaCompras[0] = prompt("qual o primeiro item da sua lista? ")
listaCompras[1] = prompt("qual o segundo item da sua lista? ")
listaCompras[2] = prompt("qual o terceiro item da sua lista? ")

if(listaCompras[2] == "leite"){
    console.log(listaCompras)
}

else{
  listaCompras.push("leite")  
  console.log(listaCompras)
}
