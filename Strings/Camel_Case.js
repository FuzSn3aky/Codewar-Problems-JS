
let example = "gen new world"

String.prototype.camelCase=function(){

    if (this.length===0) return ""
    return this
        .split(" ")
        .map(part=>part
            .replace(part[0],part[0].toUpperCase()))
        .join("");
}
console.log(example.camelCase());


//Solution I had before
String.prototype.camelCase=function(){

    if (this.length===0) return ""
    let STRING_SPLIT = this.split(" ");
    for(let i = 0; i < STRING_SPLIT.length;i++){
        let FIRST_LETTER = STRING_SPLIT[i][0];
        STRING_SPLIT[i] = STRING_SPLIT[i].replace(FIRST_LETTER,FIRST_LETTER.toUpperCase());
    }


    return STRING_SPLIT.join("");
}