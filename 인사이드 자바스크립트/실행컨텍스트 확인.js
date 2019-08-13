
console.log("This is global context");   // -------1번 

function ExContext1(){
    console.log("This is ExContext");    
};
function ExContext2(){                    //---------3번 
    ExContext1();
    console.log("This Context2");
};
ExContext2();                             //---------2번 

