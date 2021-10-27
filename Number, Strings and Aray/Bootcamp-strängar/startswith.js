
/*
Skriv in funktion som avgör om strängen börjar på tecknet eller inte.
let str = "Hello";
let char = "H";
startsWith(str, char); // => true
startsWith(str, "X"); // => false
// */


function startsWith(text, char){
    for(let i=0; i<text.length; i=i+1){
        if(text[0]==char){
            return true;
        }
    }
    return false;
}

let result= startsWith("Hello", "H");
//let result= startsWith("Hello", "x"); // result=false;
console.log(result);