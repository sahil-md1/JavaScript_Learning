// Immediately Invoked Function Epression


// (paramenter) (value)


function fName(){
    // Named iifi 
    console.log(`DB connected succesfull 1`);
}
fName();

//    ; --required semicolon to stop the context

( 
    () => {
        console.log(`DB connected succesfull 2`);
    }
)() ;



((nameKnw) => {
console.log(`${nameKnw} you are connected to DB, you can resume your work after 30 mint.`);

})('khan sir');