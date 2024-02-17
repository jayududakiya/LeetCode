{
    /*
    Create Hello World Function   
    */

    function CreateHelloworld () { // first function 

        return function () { // New returning function 

            return "Hello world"; // print 

        }

    }

    let func = CreateHelloworld(); // store in variable to show 

    console.log(func());
}