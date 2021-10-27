/*Skriv en funktion som gör 
om en sträng till rövarspråket
let str = "hej på dig"
encrypt(str) // => "hohejoj popå dodigog"


/*
function encrypt(str){
  const consonants = "bcdfghjklmnpqrstvxyz";
  const consonantsUpperCase = "BCDFGHJKLMNPQRSTVXYZ";
  let output = "";
  for(const character of str){
    if(containsChar(consonants, character)){
      output += character + "o" + character;
    }else if(containsChar(consonantsUpperCase, character)){
      output += character + "O" + character;
    }else{
      output += character;
    }
  }
  return output;
} */
function encrypt(str) {
  const consonantsLowerCase = "bcdfghijklmnpqrstvwxy";
  const consonantsUpperCase = "BCDFGHIJKLMNPQRSTUVWXYZ";
  let newStrings = "";
  for (let char of str) {
    if (containsChar(consonantsLowerCase, char)){
      newStrings += char + "o" + char;
    } else if (containsChar(consonantsUpperCase, char)) {
      newStrings += char + "O" + char;
    } else {
      newStrings += char;
    }

  }
  return newStrings;
}
let result = encrypt("hej på dig");
console.log(result);