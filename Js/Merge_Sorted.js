let num1 = [1,2,3,0,0,0];
let num2 = [2,4,5];

let m = 3;
let n = 3;

let x = num1.slice(0,m);
let v = num2.slice(0,n);

let NewArray = x.concat(v).sort((a,b)=>a-b);

console.log(NewArray);