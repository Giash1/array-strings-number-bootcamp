/*Skriv en funktion som tar 
en array och ett element som input och ger true eller false som output beroende på om elementet finns i arrayen.

Exempel
let arr = [1,7,1,0,5]
let element = 1
containsElement(arr, element) // => true
containsElement(arr, -1) // => false
*/


function containsElement(arr, element)
{
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]==element)
        return true;

    }
    return false;
}

function main(){
    let result=containsElement([1,7,1,0,5],1);
console.log(result);
}
main();




