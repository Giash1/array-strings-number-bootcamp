function filter(arr,element){
    let output=[];
    for(let i=0; i<arr.length; i++){
        if(element==arr[i]){
            //output.push(arr[i]); 
             output.push(element);
        }
    }return output;
}
let result=filter([1,3,4,5,5,5,5,8], 5);
console.log(result);