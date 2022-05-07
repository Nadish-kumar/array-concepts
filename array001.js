// print add number in a array
const arraynumber = [45, 23, 3, 68, 78, 69, 51, 7, 11, 9, 22]

let array = (function (arraynumber) {

    return (arraynumber.filter((item) => {

        return item % 2 !== 0

    }))
})(arraynumber);

console.log(array)

//2.Convert all the strings to title caps in a string array
let stringArray = ["nadish","kumar", 'is', 'a', 'goodboy']

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log(resultStringArray)

//3.Sum of all numbers in an array

let resultSumArray = (function (arraynumber) {

    return (arraynumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(arraynumber);

console.log(resultSumArray)


//4.Return all the prime numbers in an array

let resultPrimeArray = (function (arraynumber) {

    return (arraynumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arraynumber);

console.log(resultPrimeArray)


//5.Return all the palindromes in an array

let resultPallindromeArray = (function (arraynumber) {

    return (arraynumber.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arraynumber);

console.log(resultPallindromeArray)


//7.Remove duplicates from an array
let arrayWithDup = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let resultArrayWoDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)]

})(arrayWithDup)

console.log("Array Duplicates " + resultArrayWoDup)

//8.Rotate an array by k times and return the rotated array

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log(resultArrayShifted)
