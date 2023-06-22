//Variant a
let a = 15;
let b = 0;
let c = 0;

while (a > 0 && c === 0) {
  let randomNum = Math.floor(Math.random() * a) + 1;
  if (b === 0) {
    b = randomNum;
    a = a - randomNum}

    else if (c === 0) {
        c = randomNum;
        a = a - c;
    }
  }

console.log(a, b, c);
console.log(a + b + c);

//Variant b

let z = 15.00;
let x = 0.00;
let y = 0.00;

while (z > 0 && y === 0) {
  let randomNum = Math.floor(Math.random() * z * 100 + 1) / 100;
  if (x === 0) {
    x = randomNum;
    z = +(z - randomNum).toFixed(2);
  } else if (y === 0) {
    y = randomNum;
    z = +(z - y).toFixed(2);
  }
}

console.log(z, x, y);
console.log(z + x + y);