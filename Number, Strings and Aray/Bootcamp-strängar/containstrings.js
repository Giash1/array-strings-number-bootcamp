function subString(strings, start, stop){
    let subString="";
    for(let i=start; i<=stop; i=i+1)
            subString=subString+strings[i];
    
        return subString;
    
    
}

    function containsIndex(str, otherString)
{
    let len=otherString.length;
    for(let i=0; i<str.length; i+=1)
    {
        let t=subString(str,i,len-1+i);
        if(t==otherString)
         return true;
    }
    return false;
}
    let result= containsIndex("Hello world", "world");
    //let result= containsChar("Hello world", "x"); //result=false;
    console.log(result);