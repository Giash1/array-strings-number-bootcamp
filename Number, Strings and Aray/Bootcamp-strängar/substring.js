/*Skriv en funktion som tar en sträng och två tal som input, 
och ger en ny sträng med alla tecken mellan talen.
let str = "Hello world"
let start = 1
let stop = 4
substring(str, start, stop) // "ello"
substring(str, 0, 3) // Hell
*/

function subString(strings, start, stop){
    let subString="";
    for(let i=start; i<=stop; i=i+1){
            subString=subString+strings[i];
    
    }
    return subString;
    
    
}
let result= subString("Hello world", 1, 4);
console.log(result);