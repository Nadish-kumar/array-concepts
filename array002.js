//1. Print odd numbers in an array

let numberArray = [43,57,37,23,8,6,37,8,1,1]

console.log("Odd Numbers: " + numberArray.filter((item) => {

    return item % 2 !== 0

}))

//2.Convert all the strings to title caps in a string array

let stringArray = ["nadish","kumar"]

 stringArray = stringArray.map((item) => {

    return item.toUpperCase()

})

console.log("Uppercase: " + stringArray)

//3.Sum of all numbers in an array
//using numArray Defined Above

let sum = numberArray.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log("Sum Array: " + sum)

//4.Return all the prime numbers in an array

console.log("Prime Number is Array are: " +
    numberArray.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))
