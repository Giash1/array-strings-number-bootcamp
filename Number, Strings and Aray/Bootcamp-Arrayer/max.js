/*
Skriv en funktion som tar en array 
av siffror som input och ger det 
största värdet i arrayen som output.

Exempel
let arr = [1,7,1,0,5]
min(arr) // => 7

*/



function max(arr){
    let largest=arr[0];
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]>largest);
        largest=arr[i];
    }
    return largest;
}
let result=max([1,7,1,0,5])
console.log(result)

