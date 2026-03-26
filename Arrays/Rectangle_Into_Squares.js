




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
