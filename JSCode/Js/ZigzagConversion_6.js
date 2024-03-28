/*
The string "P A Y P A L I S H I R I N G "  is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N / 
A P L S I I G /
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 
*/


let s = "PAYPALISHIRING";
console.log(s);
let Rownum = 3 ;
let steps = (Rownum * 2 ) - 2 ;

let mainStr = ["","",""];

for(let i = 0 ; i < s.length ; i++){
    if(i%4 == 0){
        mainStr[0] += s[i] + " ";
    }else if(i%2== 0){
        mainStr[2] += s[i] + " ";
    }else{
        if(i > 1){
            mainStr[1] += s[i-2] + " ";
        }else{
            mainStr[1] += s[i+1] + " ";
        }
        // console.log(i-1);
    }

}

console.log(mainStr.join(""));














// {    
//     let str = "PAYPALISHIRING";
//     let x = str.split("");
//     let X2 = " ";
//     // let strX = [];
//     for(i = 1 ; i < str.length ; i++){
//         if(i %3 == 0){
//             x.splice(i,0," ")
//         }
//     }

//     for(let j = 0 ; j <= x.length ; j++){
//         if(X2 != 5){
//             X2 = x.indexOf(" ");
//             X2+=2
//             x.splice(X2,0," ")
//         }
//     }
    
    
    
//     // x.splice(3,0," ");
//     // x.splice(5,0," ");
    
//     // x.splice(9,0," ");
//     // x.splice(11,0," ");
    
//     // x.splice(15,0," ");
//     // x.splice(17,0," ");
    
    
//     console.log(X2);
//     console.log(x);

// }



    
// // function convert (s) {
//     //     let str = s;
    //     let x = "" , y = "";
    //     for(let i = 0 ; i <= s.length ; i++){
    //         // if(i != s.length){
    //         if(i % 3 == 0){
    //             x += s.slice(i,i+3); 
    //         }else{
    //             x += s[i] = "0";
    //         }
    //     }
    //     console.log(">",x);
    // }; 