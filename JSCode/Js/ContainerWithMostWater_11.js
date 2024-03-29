/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

for(let i = 0 ; i < height.length ; i++ ){
        count += height[Right] * height[Left] + " ";
        if(height[Right] > height[Left]){
                Left++;
            }else{
                    Right--;
    }
}
let height = [1,8,6,2,5,4,8,3,7];
    //  height = [1,1];
    // height = [2,3,4,5,18,17,6]
*/

function maxArea(height) {
  let right = height.length - 1;
  let left = 0;
  let maxVal = 0;

  for (left; left < right; left++) {
    let minH = Math.min(height[left], height[right]);

    let difference = right - left;

    let currentVal = minH * difference;

    if (height[right] < height[left]) {
      right--;
    }

    maxVal = Math.max(maxVal, currentVal);
  }

  return maxVal;
}

let Ans = maxArea([1,8,6,2,5,4,8,3,7]);

console.log(Ans);



// 30 / 62 