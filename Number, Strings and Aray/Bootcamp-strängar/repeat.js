
//Skriv en funktion som tar en sträng och ett number som input och repeterar 
//strängen så många gånger som talet som output.
//let text = "hello";
//let num = 3;
//repeat(text, 3) // => "hellohellohello"
//repeat("omg", 5) // => "omgomgomgomgomg"



function repeat(text, repetations){
    let output="";
    for(let i=0; i<repetations; i=i+1){
        output=output+text;
    }
    return output;
}
repeat("Hello", 5);
//Om du vill titta på console;
//let result= repeat("Hello", 5);
//console.log(result);
