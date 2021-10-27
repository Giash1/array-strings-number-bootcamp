
/*Skriv en funktion som tar en sträng och ett tecken som input och ger positionen
för det första förekomna tecknet som output och -1 om tecknet inte finns.
 let str = "Hello world"
let char = "o"
indexOfChar(str, char) // => 4
// indexOfChar(str, "x") // => -1
*/

function indexOfChar(text, character){
    for(let i=0; i<text.length-1; i=i+1){
       if(text[i]==character){
           return i;
       }
    }
    return -1;
}

let result= indexOfChar("Hello worlds", "o");
//let result= indexOfChar("Hello worls", "x"); //result=false;
console.log(result);