//Our very own split function
/*
Skriv en funktion som tar två strängar som input,
 en text och och en delimiter. Funktionen ska dela upp 
 strängen i olika strängar avgränsade med tecknet i delimiter 
 och sedan ge som output en array med alla strängar.

Exempel
let str = "Kalle,Olof,Gösta"
split(str, ",") // => ["Kalle", "Olof", "Gösta"]
split( "1 6 10 9", " ") // => ["1", "6", "10", "9"] 


*/


function split(str, delimiter){


let arr = [];
  let temp = "";
  for(let i = 0; i < str.length; i++){
    if( str[i] !== delimiter ){
      temp += str[i];
    }else if( str[i] === delimiter ){
      arr.push(temp);
        temp = "";
    }
  }

  arr.push(temp);
  return arr;
}
 split("Kalle,Olof,Gösta", ", ");




  /*
let ownSplit = function (x) {

    let array = [];
    let temp = "";

    //här loopar vi igenom varje karaktär i vår string x
    for (let i = 0; i < x.length; i++) {

        let el = x[i];

        //kolla om det är ett mellanslag - då skall texten innan pushas in i vår array
        if (el === " ") {
            //pusha in textbiten till array
            array.push(temp);
            temp = " ";
        }
        //Om vi inte matchar mot ett space så betyder det att vi stött på en bokstav
        if (el !== " ") {
            // och denna lägger vi in i vår temporära sträng temp
            temp = temp + el;
        }
    }
}
*/