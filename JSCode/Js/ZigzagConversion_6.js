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

// let s = "PAYPALISHIRING";
// console.log(s);
// let Rownum = 3 ;
// let steps = (Rownum * 2 ) - 2 ;

// let mainStr = ["","",""];

// for(let i = 0 ; i < s.length ; i++){
//     if(i%4 == 0){
//         mainStr[0] += s[i] + " ";
//     }else if(i%2== 0){
//         mainStr[2] += s[i] + " ";
//     }else{
//         if(i > 1){
//             mainStr[1] += s[i-2] + " ";
//         }else{
//             mainStr[1] += s[i+1] + " ";
//         }
//         // console.log(i-1);
//     }

// }

// console.log(mainStr.join(""));

function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let mainStr = "";

  const Steps = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {

    for (let j = 0; j + i < s.length; j += Steps) {

      mainStr += s[j + i]; // j++ + 0 , j++ + 1 , j++ + 2  

      if (i !== 0 && i !== numRows - 1 && j + Steps - i < s.length) {

        mainStr += s[j + Steps - i];

      }

    }

  }

  return mainStr;
}

let Ans = convert("PAYPALISHIRING",1);
console.log(Ans);

