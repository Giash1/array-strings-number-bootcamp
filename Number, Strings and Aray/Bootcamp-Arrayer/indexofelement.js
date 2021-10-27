
/*Skriv en funktion som tar 
en array och ett element som
 input och ger index för 
 elementet som output eller -1
  om det inte finns.

Exempel
let arr = [1,7,1,0,5]
let element = 1
indexOfElement(arr, element) // => 0
containsElement(arr, 1337) // => -1
*/


function indexOfElement(arr, element){
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]==element)
    return i;
    }
    return -1;
}
let result=indexOfElement([1,7,1,0,5],1);
//let result=indexOfElement([1,7,1,0,5],8);
console.log(result);