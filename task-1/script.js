

 function create (x) { // 12 + 0
    let num = 0;
    return function () {
        console.log( x + num);
        num++;
    }
};

//  function increment (x) { 
//     let num = x;
//     return function () {
//         num++;
//         console.log(num); // 11
//     }
// };

// function resat (x) { // 10
//     let num = x;
//     return function () {
//         if(x >= 12)
//         {
//             num--;
//             console.log(num);
//         }
//         else{
//             num++;
//             console.log(num); // 10
//         }
//     }
// };

// function decrement (x) { 
//     let num = x;
//     return function () {
//         num--;
//         console.log(num); // 9
//     }
// };


let printNum = create(10); 
    printNum();
    printNum();
    printNum();


// function fact


/*

FT : {
    num + x = 0 + 12 = 12 this go to save in printNum variable 
}
 printNum() // and print 12 
  in End => num++ = 1

ST : {
    num + x = 1 + 12 = 13  this go to save in printNum variable 
}
 printNum() // AND save NEW value and print 13
 in End => num++ = 1

TT : {
    num + x = 1 + 13 = 14  this go to save in printNum variable 
}
 printNum() // AND save NEW value and print 14
 in End => num++ = 1

FOT : {
    num + x = 1 + 14 = 15  this go to save in printNum variable 
}
 printNum() // AND save NEW value and print 14
 in End => num++ = 1

*/