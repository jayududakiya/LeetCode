{
    /*
    return incremented value when function was call 
    */

    function Counting (x) { // first function 
        let num = x ;
        return function () { // New returning function 
            console.log(num);
            num++;
        }
    }

    let counter = Counting(10); // store in variable to show 

    counter(); // 10
    counter(); // 11
    counter(); // 12
}