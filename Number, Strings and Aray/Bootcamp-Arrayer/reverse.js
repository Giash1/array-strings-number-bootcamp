
/*
reverse
Skriv en funktion som tar en array 
som input och ger ny 
omvänd array som output.

Exempel
let arr = [1,7,1,0,5]
reverse(arr) // => [5,0,1,7,1]
reverse( ["olof", "arne", "bengt"] ) // => ["bengt", "arne", "olof"]
*/
/*let arr = ["Gösta", "Kalle", "Olof"];

function reverse(arr){
    //skapa en tom array där vi skall skicka in varje omvända namn
    let newArr = [];

    //Loopa igenom varje namn i vår array
    for (let i = 0; i <= arr.length; i++) {
        let temp = "";
        let char = arr[i];
        //Loopa igenom varje bokstav i vårt namn baklänges
        for (let j = char.length - 1; j >= 0; j--) {
            //För varje bokstav lägger vi in den i vår temporära sträng
            temp = temp + char[j]
        }
        //För varje omvandlade namn så pushar vi in det i vår nya array
        newArr.push(temp);
    }
}
reverse(["Gösta", "Kalle", "Olof"]);*/

function reverse(str){
    let output = "";
    for(let i = str.length-1; i>=0; i--){
      output += str[i];
    }
    return output;
  }
  
  function reverseStrings(arr){
    let output = []
    for(let str of arr){
      let element = reverse(str)
      output.push(element)
    }
    return output
  }
 let result= reverseStrings(["Gösta", "Kalle", "Olof"]);
 console.log(result);



