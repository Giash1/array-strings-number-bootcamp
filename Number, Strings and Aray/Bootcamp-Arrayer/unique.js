function containsElement(arr, element)
{
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]==element)
        return true;

    }
    return false;
}


function unique(array) {
    let output = []
    for (let element of array) {
        if (!containsElement(output, element)) {
            output.push(element);
        }
    }
    return output;
}
let result = unique([1, 3, 4, 5, 6, 1, 3, 4]);
console.log(result);