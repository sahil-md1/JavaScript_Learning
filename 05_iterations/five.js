// Filer

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNumber.filter((num) => num > 4);

// console.log(newNumber);

// Map

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbs = myNums.map( (num) => {
    return num+10
})
// console.log(newNumbs);


const newName = [
    {
        name: 'sahil',
        age: 22,
    },
    {
        name: 'sharukh',
        age: 32,
    },
    {
        name: 'Psndu',
        age: 43,
    }
]

const newName2 = newName.map( (idx) => { return idx.age *5  })

// console.log(newName2);


const myChain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newChain = myChain.map( (num)=> num *10).map((num)=> num +100).filter((num)=> num >= 150)
// console.log(newChain);

// [ 150, 160, 170, 180, 190, 200 ]

// Reduce 


const totalCart = [
    {
        course: 'js',
        price: 1299
    },
    {
        course: 'Python',
        price: 1399
    },
    {
        course: 'java',
        price: 12999
    },
    {
        course: 'C++',
        price: 129
    },
]

const totalCartPrice = totalCart.reduce((acc, items)=> {return acc + items.price},0)
console.log(totalCartPrice);
