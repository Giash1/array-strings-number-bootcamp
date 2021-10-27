/*Skriv en funktion som tar en array
 och en sträng(delimiter) som input. 
 Funktionen ska göra som split
  fast omvänt, den tar arrayen 
  och bygger upp en ny sträng 
  avgränsade med delimiter.

Exempel
let arr = ["Kalle", "Olof", "Gösta"]
join(arr, ",") // => "Kalle,Olof,Gösta"
join( ["1", "6", "10", "9"] , " ") // => "1 6 10 9"*/


let arr = ["Kalle", "Olof", "Gösta", "nio"];
let delimeter = ",";

function ownJoin(arr, delimeter) {
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        str = str + arr[i] + delimeter;

    }
return str;
}
let result = ownJoin(["Kalle", "Olof", "Gösta", "nio"], ",");
console.log(result)

/*function main(){
    let arr = ["Kalle", "Olof", "Gösta", "nio"];
let delimeter = ",";
ownJoin(["Kalle", "Olof", "Gösta", "nio"], ",");
}
main();*/