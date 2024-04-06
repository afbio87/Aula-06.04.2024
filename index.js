const lista = ["a","b","c"]
console.log(lista[1])
lista[1] = "b1"
lista.push("abc")
console.log(lista)
lista.pop()
console.log(lista[lista.length-1])

for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

lista.forEach((valor,indice) => {
    console.log(`Pos ${indice} - Valor ${valor}`)
    lista[indice] = 10
})

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matriz[2][2])

function maiorEMenor(lista){
    let maior = lista[0]
    let menor = lista[0]

    for(let i = 1; i < lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i]
        }
        if(lista[i] < menor){
            menor = lista[i]
        }
    }

    console.log(maior)
    console.log(menor)
}

function maiorEMenorV2(lista){
    let maior = lista[0]
    let menor = lista[0]

    lista.forEach((valor) => {
        if(valor > maior){
            maior = valor
        }
        if(valor < menor){
            menor = valor
        }
    })

    console.log(maior)
    console.log(menor)
}

function maiorEMenorV3(lista){
    console.log(Math.max(...lista))
    console.log(Math.min(...lista))
}

maiorEMenor([3,7,90,10,5,1])
maiorEMenorV2([3,7,90,10,5,1])
// 90
// 1

const listaUm = [2,4,6,8]
/*const listaDobro = listaUm.map((item) => {
    return item * 2
})*/
const listaDobro = listaUm.map(item => item * 2)
console.log(listaDobro)

const resultMaior9 = listaUm.find(item => item > 9)
console.log(resultMaior9)
const todosMaiores9 = listaUm.filter(item => item > 9)
console.log(todosMaiores9)

const somaLista = listaUm.reduce((total,valor) => total + valor, 0)

const temMaiorque10 = listaUm.some(valor => valor > 10)

const listaA = [1,2,3]
const listaB = [...listaA,4,5]

Math.max(...listaA)

const aluno = ['Nome',10,'16 9999999']

cadastrar(...aluno)
/*fn cadastrar(nome,idade,telefone)
fn cadastrar(aluno)*/