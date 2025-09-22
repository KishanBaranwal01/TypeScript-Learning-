console.log("Jay mata di ");

// This is the old way of writing code in js 
// in TS mostly there are 3  types of data type wich are - number , string , Boolean 

// function add(num1,num2){ // old method 
//     // validation for contains only number 
//     if(typeof num1==="number" && typeof num2==="number" ){
//         return num1+num2 ; 
//     }

function add(num1:number , num2:number){ // TS method that defines that both value contains only number 
    return num1+num2 ;
}
   
    


const n1= 10 ;
const n2=90 ;

const res = add(n1,n2);

console.log(res);
