// this is my function that sums two numbers
const fromEuroToDollar = (dollarValue) => {
    return dollarValue * 1.2;
}

const fromDollarToYen = (yenValue) => {
    return yenValue * 127.9;
} 

const fromYenToPound = (poundValue) => {
    return poundValue * 0.8;
}

// just a console log for ourselves.
console.log(fromEuroToDollar(12));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
