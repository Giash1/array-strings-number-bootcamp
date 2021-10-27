/*Skriv in funktion som avgör
 om strängen slutar på tecknet eller inte.
 let str = "Hello";
let char = "o";
endsWith(str, char); // => true
endsWith(str, "X"); // => false
*/


function endsWith(text, char){
    for(let i=0; i<text.length-1; i=i+1){
        // if(text[text.length-1]==char){       /* button, ctrl+* to make comment and remove comment as well */
        //     return true;
        // }
        if(i==char){
            return false;
        }
    }
    return true;
}
let result= endsWith("Hello", "o");
//let result= endsWith("Hello", "x"); //result=false;
console.log(result);