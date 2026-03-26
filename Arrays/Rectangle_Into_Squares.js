

//EXAMPLE 13 * 4 = 52
// DIVIDENT(52) / DIVISOR SQUARED(4*4) = MATH.FLOOR(Quotient) PUSH IN SQUARE ARRAY QUOTIENT NUMBER OF TIMES SIDE
//RESULT FOR NOW : 52/16 = 3.25 so it goes 3(4*4) + ...
// NOW SUBTRACT DIVIDENT AND DIVISOR * QUOTIENT 52-48 = 4
// DIVISOR SQUARED NOW DIVIDE WITH SUBTRACT RESULT 16/4 = 4
// NOW THAT CHANGE IS 0 IT'S DONE


//Formula i made in LaTeX:

//\displaystyle\sum_{Q\neq 0}\left(\sum_{j = 0}^{\left\lfloor Q \right\rfloor -1}
//d  \quad;\quad D \leftarrow D_{before} - \left \lfloor Q \right \rfloor \cdot d^2 \right)\\
//D = length \cdot width \\
//d = (length < width) \quad ? \quad length:width \\
//Q = \frac {D}{d^2}



function sqInRect(lng, wdth){


    const pow = (num) => num**2;
    if(lng===wdth)return null;

    let SQUARES = [];
    const SHORTER_SIDE = lng<wdth ? lng:wdth;
    let DIVISOR = SHORTER_SIDE;
    let DIVIDEND = lng*wdth;
    let Q = DIVIDEND/pow(DIVISOR);

    while(Q!==0){

        for(let j = 0; j < Math.floor(Q);j++){
            SQUARES.push(DIVISOR);
        }
        DIVIDEND=DIVIDEND-Math.floor(Q)*pow(DIVISOR);
        DIVISOR = DIVIDEND/SQUARES[SQUARES.length-1];
        if(DIVIDEND===0)break;
    }
    return SQUARES;
}

console.log(sqInRect(13,18))

let FINAL_RESULT = sqInRect(18,13).reduce((acc,cur)=>acc+cur**2,0);
console.log(FINAL_RESULT);
