{
    /*
    4. Median of Two Sorted Arrays
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
    The overall run time complexity should be O(log (m+n)).
    
    Example 1:
        Input: nums1 = [1,3], nums2 = [2]
        Output: 2.00000
        Explanation: merged array = [1,2,3] and median is 2.
    Example 2:
        Input: nums1 = [1,2], nums2 = [3,4]
        Output: 2.50000
        Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    
    */ 

    function SortedArrays (nums1,nums2){
        let mergedArray = [];
        mergedArray = [...nums1,...nums2] ;

        let SortedArray = mergedArray.sort((a,b)=>a-b)        
        let Total = 0;
        if(SortedArray.length > 3){
            Total = (nums1[nums1.length-1] + nums2[0])/2;
        }else{
            Total = Math.round(SortedArray[SortedArray.length-1]/2);
        }

        return Total;
    }

    let Ans = SortedArrays([2],[]);
    // Ans = SortedArrays([1,2],[3,4]);
    console.log(Ans);


    // solves 738 / 2009 ;
}

