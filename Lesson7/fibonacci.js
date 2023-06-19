function fibonacciArray(a, b) {
    const array = [1, 1]
    for (let i = 2; i < a + b; i++) {
      array[i] = array[i - 1] + array[i - 2]
    }
    return array.slice(a, a + b)
  }
  
  const fbArr = fibonacciArray(5, 10)
  console.log(fbArr)