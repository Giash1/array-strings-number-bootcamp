/*Skriv en funktion som tar en sträng och två tecken 
som input och ger en ny sträng som output där 
det ena tecknet ersätts med det andra i strängen.

Notera att du bara ska ta ersätta alla förekomster 
av enbart ett tecken.
let str = "Hello world"
let char1 = "o"
let char2 = "y"
replaceChar(str, char1, char2) // => "Helly wyrld"
replaceChar(str, " ", "-") // =>  "Hello-world"
*/





function replaceChar(strings, source, destination){
    let newStrings="";
    for(let i = 0; i < strings.length; i =i+1) {
   if(strings[i]!=source)
       newStrings=newStrings+strings[i];
   else
       newStrings=newStrings+destination;
   }
   return newStrings;
    }

let result=replaceChar("Hello world", "o", "y");
//let result=replaceChar("Hello world", " ", " "); // result= Hello world;
console.log(result);