console.log('Strings');

const firstString = 'hitest'

let age = 43

console.log(firstString + age + ' value');

console.log( ` This code is much readable ${firstString}`);

const newGame = new String('Karnantak') 

console.log(newGame);

console.log(newGame[4]);
console.log(newGame.toUpperCase());


console.log(newGame.charAt(2));
console.log(newGame.indexOf('a'));

const knkHeat= 'frfrfrfrf'
const knkHeat2= 'KashmirIndia'

const newKnk = knkHeat.slice(0 , -3) // we can give negative value as well
const newKnkN = knkHeat2.substring(0 , 4) // we cannot give negative



console.log(newKnk);
// console.log(newKnkN);


const email = 'sahil-5%-gmai.com'

const email2 = email.replace('5%' , '@')

console.log(email2);


console.log(email.split('-'));
// [ 'sahil', '5%', 'gmai.com' ] --output









