
/*Skriv en funktion som tar två strängar som input 
och ger en ny sträng som output där den ena 
strängen är borttagen från den första strängen.
let str = "Hello world"
let char = "world"
removeChar(str, char) // => "Hello "
removeChar(str, "lo wo") // =>  "Helrld"
*/


/*function removeText(text1, text2) {
        let i = 0, j=0;
        let result = "";
    
        /*while (i < text1.length) {
            if (text1[i] === text2[j]) {
                result = result + "";
                 i = i + 1; j = j+1;
             } else {
                 result = result + text1[i];
                 i = i + 1;
            }
       }     return result;
     }
     let result= removeText("Hello world", "lo wo");
     console.log(result);
   */

function subString(strings, start, stop){
  let subString="";
  for(let i=start; i<=stop; i=i+1)
          subString=subString+strings[i];
  
      return subString;
  
  
}


function remove(str, otherString) {
  let newString = "";
  len = otherString.length;
  for (let i = 0; i < str.length; i++) {
    let t = subString(str, i, len - 1 + i);
    if (t != otherString) {
      newString = newString + str[i]
    } else {
      i = len - 1 + i;
    }
  } return newString;
}
let result = remove("hello world", "world");
console.log(result);
