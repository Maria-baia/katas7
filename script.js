function callbackForEach(currentValue, index, array){
    this.currentValue = currentValue
    this.index = index
    this.array = array
    console.log("a[" + this.index + "] = " + this.currentValue) 
}
function newForEach(array, callbackForEach) {
    array.forEach(callbackForEach);
}

function newFill(arr, valor, inicio, fim){
    return arr.fill(valor,inicio,fim)
}

function callbackMap(valorAtual, indice, arr){
    this.valorAtual = valorAtual
    this.indice = indice
    this.arr = arr
    return this.valorAtual * 2
}
function newMap(arr, callbackMap){
    return arr.map(callbackMap)
}

function callbackSome(valorAtual, indice, arr){
    this.valorAtual = valorAtual
    this.indice = indice
    this.arr = arr
    return valorAtual > 10
}
function newSome(arr, callbackSome){
    return arr.some(callbackSome)
}

function callbackFind(valorAtual, indice, arr){
    this.valorAtual = valorAtual
    this.indice = indice
    this.arr = arr
    return valorAtual > 10
}
function newFind(arr, callbackFind){
    return arr.find(callbackFind)
}

function callbackFindIndex(valorAtual, indice, arr){
    this.valorAtual = valorAtual
    this.indice = indice
    this.arr = arr
    return valorAtual > 18
}
function newFindIndex(arr, callbackFindIndex){
    return arr.findIndex(callbackFindIndex)
}

function callbackEvery(valorAtual, indice, arr){
    this.valorAtual = valorAtual
    this.indice = indice
    this.arr = arr
    return valorAtual >= 10
}
function newEvery(arr, callbackEvery){
    return arr.every(callbackEvery)
}

function callbackFilter(valorAtual, indice, arr){
    this.valorAtual = valorAtual
    this.indice = indice
    this.arr = arr
    return valorAtual >= 10
}
function newFilter(arr, callbackFilter){
    return arr.filter(callbackFilter)
}

function newConcat(arr1, arr2){
    return arr1.concat(arr2)
}

function newIncludes(array, searchElement, fromIndex){
    return array.includes(searchElement, fromIndex)
}

function newIndexOf(array, elementoDePesquisa, pontoInicial){
    return array.indexOf(elementoDePesquisa, pontoInicial)
}

function newJoin(arr, separador) {
    return arr.join(separador)
}

function callbackReduce(acumulador, valorAtual, indice, arr){
    return acumulador + valorAtual
}
function newReduce(arr, valorInicial, callbackReduce) {
    return arr.reduce(callbackReduce, valorInicial)
}

function newSlice(arr, inicio, fim) {
    return arr.slice(inicio, fim)
}

function newFlat(arr, depth) {
    return arr.flat(depth)
}

function callbackFlatMap(arr, currentValue, index, array) {
    this.arr = arr
    this.currentValue = currentValue
    this.index = index
    this.array = array
    return this.arr * 2
}
function newFlatMap(arr, callbackFlatMap) {
    return arr.flatMap(callbackFlatMap)
}