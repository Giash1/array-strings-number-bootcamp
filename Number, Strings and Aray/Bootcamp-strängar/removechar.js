
/*
Skriv en funktion som tar en sträng och ett tecken 
som input och ger en ny sträng som output där tecknet är borttaget från strängen.

Notera att du bara ska ta bort alla förekomster av enbart ett tecken.
let str = "Hello world"
let char = "o"
removeChar(str, char) // => "Hell wrld"
removeChar(str, " ") // =>  "Helloworld"
*/


function removeChar(strings, character) {
    let newStrings = "";
    for (let i = 0; i < strings.length; i =i+1) {
      if (strings[i] != character) {
        newStrings = newStrings + strings[i];
      }
    }
    return newStrings;
  }
  let result=removeChar("Hello world", "o");
  //let result=removeChar("Hello world", " "); //result= Helloworld;
   console.log(result);