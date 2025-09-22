console.log("Jay mata di ");
// This is the old way of writing code in js 
// in TS mostly there are 3  types of data type wich are - number , string , Boolean 
// function add(num1,num2){ // old method 
//     // validation for contains only number 
//     if(typeof num1==="number" && typeof num2==="number" ){
//         return num1+num2 ; 
//     }
function add(num1, num2, printRes, someText) {
    if (printRes) {
        console.log("".concat(someText, ",").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 40;
var n2 = 90;
var printRes = true;
var someText = "Sum of Two number is -";
// const res = add(n1,n2);
add(n1, n2, printRes, someText);
// console.log(res);
