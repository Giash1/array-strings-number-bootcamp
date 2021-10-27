/*Skriv en funktion som tar en 
array av siffror som input och 
ger det minsta värdet i arrayen som output.

Exempel
let arr = [1,7,1,0,5]
min(arr) // => 0 */



function min(arr){
    let smallest=arr[0]
    for(let i=0; i<arr.length; i+=1)
    { 
        if(arr[i]<smallest)
        smallest=arr[i];
    }
    return smallest;
}
let result=min([1,7,1,0,5])
console.log(result)
