
/*Skriv en funktion som tar en sträng och ett tecken som input och ger true 
eller false 
som output beroende på om tecknet finns i strängen

let str = "Hello world"
let char = "o"
containsChar(str, char) // => true
containsChar(str, "x") // => false
*/



function containsChar(text, character){
for(let i=0; i<text.length; i=i+1){
    if(text[i]==character){
        return true;
    }
}
return false;
}
let result= containsChar("Hello world", "x");
//let result= containsChar("Hello world", "x"); //result=false;
console.log(result);