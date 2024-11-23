// let num1 = 8;
// let num2= 12

function total(num1, num2){
console.log(num1+ num2);

}
total(2, 8)


function login(username){
   if (username === undefined) {
    console.log('not able to login'); 
   } else return `${username} is able to login`
}

// console.log(login())    


function login(username = 'hitesh'){
   if (username === undefined) {
    console.log('not able to login'); 
   } else return `${username} is able to login`
}

console.log(login('sahil'))