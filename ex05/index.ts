const numeros = [10, 20, 30, 40, 50, 3]
const valores = [10, 'valores', 20, 'preco', 30, 'taxa', 40, 'merda', 50,]
function maiorQueDez(data: number[]){
    return data.filter((n) => n > 10)
}

function filtrar   (data:(string | number)[]){
    return data.filter ((item) => typeof item === 'number')
}

console.log(maiorQueDez(numeros))
console.log(filtrarValores(valores))