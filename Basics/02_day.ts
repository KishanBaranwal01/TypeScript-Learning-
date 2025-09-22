console.log("Day 2nd of Learnign ");
// object
// Array
// Enum
// Tuple 


// js method of defining object 

// const Person = {
//     firstName : "Ram" ,
//     age : 24 ,

// };
// // TS generates eror when we try to access object property which are not exist in object but in js the code excutes and display undefined 
// console.log(Person.lastName); 



// Ts method of defining object  

const Person :  {   // define type value that object hold 
    firstName : string ;
    age : number ;
    address: string ;
    M_number : number ;
    // define nested object 
    office:{
        name:string ;
        role:string ;

        details:{
            id:number ;
            payment:number ;
        }
    }
} = {
    firstName : "Ram",
    age:24,
    address:"Rampur",
    M_number:7558865454, 

    // nested object definition 

office:{
    name:"TCS",
    role:"Engineer",

    details:{
        id:121 ,
        payment:25000,
    }
}
}

console.log(Person.firstName , Person.age , Person.address);
console.log(Person.M_number);
console.log(Person.office.role);
console.log(Person.office.details.id);
console.log(Person.office.details.payment);



