// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const  isNumberPositive = (num) => {
    if ( num >= 1) {
        return true
    } else {
        return false
    }
}
console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

// Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (numDays) => {
    age = numDays / 365
    console.log(age)
}
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

// Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) => {
    const theLargestNum =  Math.max(num1, num2, num3)
    console.log (theLargestNum)
}
getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6

// Write a function that takes an array of names and returns the last name from the array of names.

let names = ["name1","name2","name3"]

const getLastName = (names) => {
    let lastName = names[names.length - 1];

    console.log(lastName)
}

getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy”
getLastName(["Ash","Stu"]); // returns "Stu"


// Write a function that takes an array of numbers and returns true if all of the numbers are positive. 
//It should return false if there are one or more negative numbers in the array.

// let array = []
// const allNumbersPositive = (array) => {
//     for(var i = 0; i < array.length; i++){
//         if(array[i] < 0){
//             return false;
//         }
//     }
//     return true;
// }

// let array = [];
// const allNumbersPositive = () => {
//     array.forEach(element => {
        
//     });
// }

// const allNumbersPositive = (arr) => {
//     arr.forEach((item) => {
//       if (arr[item] >= 0) {
//        console.log (true);
//       } else {
//         console.log (false);
//     }
//     });
//   };


// const allNumbersPositive = (array) => {
//     for(var i = 0; i < array.length; i++){
//         if(array[i] >= 1){
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }
//}

// const allNumbersPositive = (num1, num2, num3) => {
//     if ((num1 >= 1) && (num2 >= 1) && (num3 >= 1)) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

const allNumbersPositive = (array) => {
    for(var i = 0; i < array.length; i++){
        if(array[i] >= 1){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false