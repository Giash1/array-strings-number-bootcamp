function exclude(arr, element){
    let output=[];
    for(let i=0; i<arr.length; i++){
        if(element!=arr[i]){
        output.push(arr[i])
    }

    
    }
    return output;
}

let result=exclude([1,3,4,5,1,], 1);
console.log(result);