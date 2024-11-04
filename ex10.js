/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numerosUser = prompt('qual números você quer verificar? ')

if(numerosUser = numeros.includes(10)){
console.log("o vetor contém o número" , numerosUser)}

else{
    console.log("o vetor não contém o número" , numerosUser)
}