function mean(arr){
    let mean =0;
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum=sum+arr[i];
        mean=sum/arr.length;

    }
    return mean;
}
let result =mean([1,2,3,4,5,0]);
console.log(result);