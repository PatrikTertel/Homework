function delayedExecution() {
   let delay = Math.floor(Math.random() * 5000) + 1000;
    return(delay)
}
  const prom1 = new Promise((resolve, reject) => {
    let a = delayedExecution()
    console.log("First promise random time: " + a + " milliseconds")
    setTimeout(() => {
      resolve(1);
    },a);
  });
  
  const prom2 = new Promise((resolve, reject) => {
    let a = delayedExecution()
    console.log("Second promise random time: " + a + " milliseconds")
    setTimeout(() => {
      resolve(2);
    },a);
  });

  const prom3 = new Promise((resolve, reject) => {
    let a = delayedExecution()
    console.log("Third promise random time: " + a + " milliseconds")
    setTimeout(() => {
      resolve(3);
    },a);
  });

  Promise.race([prom1, prom2, prom3])
  .then((value) => {
    console.log(value)
  })