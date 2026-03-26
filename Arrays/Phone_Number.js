//Write a function that accepts an array of 10 integers (between 0 and 9), that
// returns a string of those numbers in the form of a phone number.


//YEAH, I KNOW HARDCODED DON'T WORRY I KNOW IT </3

let numbers = [1,2,3,4,5,6,7,8,9,0];


function createPhoneNumber(numbers){ // => returns "(123) 456-7890"

    const ArrayLengthValid = numbers.length === 10;
    if (!ArrayLengthValid) throw new Error("Array length is not 10");

    let firstPart="";
    let secondPart="";



    for(let j = 0; j < numbers.length; j++){

        if(numbers[j]<0 || numbers[j]>9) throw new Error("Number is either below 0 or above 9!")
        if (j<3){
            firstPart+=numbers[j];
        }else{
            secondPart+=numbers[j];
        }

        if(j===5) secondPart+="-";

    }
    const PHONE_NUMBER = `(${firstPart}) ${secondPart}`;


    return PHONE_NUMBER;
}
console.log(createPhoneNumber(numbers));


// Solution from some guy
 // Bro...
function improvedVersion(numbers){

    let format = "(xxx) xxx-xxxx";

    for(let i = 0; i < numbers.length; i++){
        format = format.replace("x",numbers[i]);
    }

    return format;
}
console.log(improvedVersion(numbers))