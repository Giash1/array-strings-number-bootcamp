/*function containsElement(arr, element) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == element) {
            return true

        }

    }
    return false

}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 8
    let result = containsElement(arr, element)


}
main()*/

/*function indexOfElement(arr, element) {
    let output = -1
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == element) {
            return i

        }

    }
    return output

}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 8
    let result = indexOfElement(arr, element)


}
main()*/

/*function min(arr) {
    let minimum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (minimum > arr[i]) {
            minimum = arr[i]



        }


    }
    return minimum

}

function main() {
    let arr = [1, 7, 1, 0, 5, ]
    let result = min(arr)



}
main()*/

/*function max(arr) {
    let maximum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i]



        }


    }
    return maximum

}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let result = max(arr)



}
main()*/

/*function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
            //if (sum > arr[i]) {
            //sum = arr[i]



        //}


    }
    return sum

}

function main() {
    let arr = [1, 7, 1, 0, 5, ]
    let result = sum(arr)



}
main()*/

/*function mean(arr) {
    let medel = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]




    }
    medel = sum / arr.length
    return medel


}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let result = mean(arr)



}
main()*/

/*function reverse(arr) {
    let arr1 = []
    for (let i = arr.length - 1; i >= 0; i--) {

        arr1.push(arr[i])

    }

    return arr1

}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let result = reverse(arr)



}
main()*/


/*function filter(arr, element) {
    let arr1 = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == element) {

            arr1.push(arr[i])
        }

    }

    return arr1

}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 1
    let result = filter(arr, element)

}
main()*/

/*function exclude(arr, element) {
    let arr1 = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != element) {

            arr1.push(arr[i])
        }

    }

    return arr1

}

function main() {
    let arr = [1, 7, 1, 0, 5]
    let element = 1
    let result = exclude(arr, element)

}
main()*/

/*function unique(arr) {
    let arr1 = []

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i]

        if (elementInArray(arr, element)) {
            arr1.push(arr[i])
        }
    }

    function elementInArray(arr, element) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr1[i] == element) {
                return true;
            }
        }
        return false;
    }

    return arr1

}

function main() {
    let arr = [1, 7, 1, 0, 5, 0, 5]
    let result = unique(arr)
}
main()*/

/*let str = "kalle,Olof,Gösta,9";
let delimeter = ",";
let temp = "";

function ownSplit(str, del) {
    let array = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === del) {
            array.push(temp);
            temp = "";
        }
        if (char !== del) {
            temp = temp + char;
        }
    }

}
ownSplit(str, delimeter);*/

let arr = ["Kalle", "Olof", "Gösta", "nio"];
let delimeter = ",";

function ownJoin(arr, delimeter) {
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        str = str + arr[i] + delimeter

    }

}
ownJoin(arr, delimeter);