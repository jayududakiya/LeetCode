function Myfunc (){
    let x = 1
    return function (){
        if(x){
            x = 0;
            return console.log("Hii , i am Called Now ");
        }else{
            return console.log("Hii , i am Called agin......");
        }
    }
}


const Call1 = Myfunc();

const Call2 = Myfunc();

Call1();
Call1();
Call1();


Call2();
Call2();
Call2();