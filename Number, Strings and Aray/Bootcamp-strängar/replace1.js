
function subString(strings, start, stop){
    let subString="";
    for(let i=start; i<=stop; i=i+1){
            subString=subString+strings[i];
    
    }
    return subString;
    
    
}

function replace(str, source, dest) {
    let newStrings = "";
    let len = source.length ;
    for (let i = 0; i < str.length; i++) {
        let t = subString(str, i, len-1 + i);
        if(t != source){
            newStrings += str[i];
        }else{
            newStrings = newStrings + dest; 
            i = i + len-1;
        }

    }return newStrings;
}
let result = replace("hello world","ello","ail");
console.log(result);