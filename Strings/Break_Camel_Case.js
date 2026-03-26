
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

let example = "codingIsSomethingElse";



function solution(string) {

    if (string.length===0)return ""

    let BROKEN_CAMEL_CASE =string.split("");
    console.log(BROKEN_CAMEL_CASE)
    for (let i = 1; i<BROKEN_CAMEL_CASE.length;i++){

        if(BROKEN_CAMEL_CASE[i].match(/[A-Z]/)){
            console.log(BROKEN_CAMEL_CASE[i]);
            BROKEN_CAMEL_CASE.splice(i,0," ");
            i++;
        }

    }

    return BROKEN_CAMEL_CASE.join("");
}
console.log(solution(example));
//Solution from other guy

// you cant be fr </3
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}

