let num1 = 3487
let num2 = 3794
let y = []
let u = []

function sss(array){
  newArray = (""+array).split("").map(Number)
  return(newArray)
}
let firstArray = sss(num1)
let secondArray = sss(num2)

console.log(firstArray)
console.log(secondArray)

function countEqualPosition(array1, array2, matchArray){
  for (i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
  if (array2[j] === (array1[i])) {
    matchArray.push(array1[i])
  }
}
}

countEqualPosition(firstArray, secondArray, y)
console.log(y.length)

function countEqual(array1, array2, matchArray){
  for (i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
  if (array2.includes(array1[i])) {
    matchArray.push(array1[i])
  }
}
}
countEqual(firstArray, secondArray, u)
console.log(u.length)