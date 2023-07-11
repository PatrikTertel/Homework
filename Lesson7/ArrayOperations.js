let g = [1, 2, 3, 4, 5, 6]
let t = [6, 5, 4, 3, 2, 1]
let q = [3, 67, 15, 27, 252, 156, 333]
let x = [7, 12, 12, 24, 55, 55, 55, 12]

// функция изменения массива в обратном порядке
function reversArray(a) {
    return (a.reverse())
}

// функция для нахождения максимального значения в массиве
let findMaxValue = function (array) {
    return (Math.max(...array))

}
// функция сортировки массива
function sortArray(a) {
    a.sort((a, b) => b - a)
    return (a)
}
//функция для удаления повторяющихся символов
function deleteDuplicate(array) {
    return [...new Set(array)]
}

console.log(reversArray(g))
console.log(reversArray(t))
console.log(findMaxValue(q))
console.log(sortArray(q))
console.log(deleteDuplicate(x))