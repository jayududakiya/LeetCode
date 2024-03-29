/*

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

// let len = []
// let results = null ; 

// for(let i = 0 ; i < wordDict.length ; i++) {
//     len.push(s.slice(0,wordDict[i].length))
//     len.push(s.slice(wordDict[i].length))
    
//     console.log(len);
//     if(len.includes(i) !== len.includes(i++)){
//         len.pop()
//     }
// }

// let ind = 0 ;

// for (const lens of len) { 
//     if(lens === wordDict[ind]){
//         results = true;
//     }else{
//         results = false;
//     }
//     ind++
// }


// console.log(results);
 
*/




// function wordBreak (s, wordDict){}

// console.log(wordDict[0] == s.slice(0,4));
// console.log(wordDict[1] == s.slice(4));
// console.log(wordDict[0]);
// console.log(s.slice(0,4));
// console.log(wordDict[1]);
// console.log(s.slice(4));


// let s = "leetcode";
//  s = "applepenapple";
// let wordDict = ["leet","code"];
// wordDict = ["apple","pen"]

// let = [start , end] = [0,0];

// if(s[start] === wordDict[0][end]){

// }


var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (const word of wordDict) {
            //  i == 4  - word.length == 4 = 0 / dp[0] == true /  4 - 4 = 0 , 4 === word 
            if (i - word.length >= 0 && dp[i - word.length] && s.substring(i - word.length, i) === word) {
                console.log(dp);
                // console.log(i);
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n];    
};


console.log(wordBreak("applepenapple",["apple","pen"]));


// console.log(len);
// console.log(wordDict);
