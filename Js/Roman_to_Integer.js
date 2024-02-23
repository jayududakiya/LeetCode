/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II
*/ 


// @param {string} s
//   @return {number}

// var romanToInt = function(s) {
    
// };

{

    let s = "IV";  // 27 // MMI == 2001
    let result = 0;
    let FirstNum  = 0; 
    let NextNum = 0 ;
    const romanNUm = new Map ([
        ["I" , 1],
        ["V" , 5],
        ["X" , 10],
        ["L" , 50],
        ["C" , 100],
        ["D" , 500],
        ["M" , 1000]
    ]);

    // console.log(romanNUm);

    for (let index = 0; index < s.length; index++) {
        
        FirstNum = romanNUm.get(s[index]); // 0  = I  FistNum =  1 
        
        NextNum = romanNUm.get(s[index+1]); // 1 = V  NextNum =  5 
       // IV = 4 ==  I < V
        if (FirstNum < NextNum) {
            result += NextNum - FirstNum;
            index++;
        }
        else{
            result += FirstNum ;
        }
    }

    console.log(`Your Roman Number : ${s} `);
    console.log(">",result);
}

/*



let FirstNum = romanNUm.get(s[0]);
console.log(FirstNum);

let NextNum = romanNUm.get(s[1]);
console.log(NextNum);

console.log(result);




*/ 
