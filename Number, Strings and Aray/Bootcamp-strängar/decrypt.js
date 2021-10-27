
/*
Skriv en funktion som gör om en sträng från rövarspråket till vanligt
let str = "hohejoj popå dodigog"
decrypt(str) // => "hej på dig"

*/
/*

function decrypt(str){
  const consonants = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVXYZ";
  let output = containsChar;
  for(let i = 0; i < str.length; i++){
    const character = str[i];
    if(containsChar(consonants, character)){
      i += 2;
    }
    output += character;
  }
  return output;
}
 let result= decrypt("hohejoj popå dodigog");
 console.log(result);
 */
 function decrypt(str) {
  const consonants = "bcdfghjklmnpqrstvxyzBCDFGHJKLMNPQRSTVXYZ";
  let newStrings = "";
  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (containsChar(consonants, char)) {
          i += 2;
      }
      newStrings += char;
  }
  return newStrings;
}
let x = decrypt("hohejoj popå dodigog");
console.log(x)
