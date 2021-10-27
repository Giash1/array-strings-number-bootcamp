function sum(arr){
    let s=0;
    for(let i=0; i<arr.length; i+=1){
        s=s+arr[i];
    }
    return s;
}

let result=sum([1,7,6,7,8])
console.log(result)