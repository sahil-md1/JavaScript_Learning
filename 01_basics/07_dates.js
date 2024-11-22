// DATES 


const myDates = new Date 
// console.log(myDates.toDateString());
// console.log(myDates.toString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toJSON());


// Fri Nov 22 2024
// Fri Nov 22 2024 20:47:31 GMT+0000 (Coordinated Universal Time)
// 11/22/2024
// 2024-11-22T20:47:31.228Z


const dateNew = new Date(2024, 10, 23 )

console.log(dateNew.toDateString());

// Sat Nov 23 2024


const time = Date.now()

// console.log(Math.floor(time /1000));


const date2 = new Date()


console.log(date2.getMonth());

const month = date2.toLocaleString('default', {
    dateStyle:  'full'
})

console.log(month);



