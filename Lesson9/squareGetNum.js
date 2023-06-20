function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getNum(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = getRandomNum(1, 5)
      resolve(randomNum);
    }, 3000);
  });
}

async function squareNum() {
    const num = await getNum();
    console.log("Random number -  " + num)
    const squaredNum = num ** 2;
    console.log(squaredNum);
    }
console.log(squareNum())