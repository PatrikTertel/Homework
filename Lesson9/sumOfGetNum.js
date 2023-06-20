function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getNum(delay, a, b){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const randomNum = getRandomNum(a, b)
      resolve(randomNum);
    }, delay);
  });
}

async function final(){
    const num3 = await getNum(3000, 1, 5)
    console.log("First number -  " + num3)
    const num4 = await getNum(5000, 6, 10)
    console.log("Second number -  " + num4)
    const sum = num3 + num4
    console.log(sum)
}
console.log(final())