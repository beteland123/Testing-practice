const reverseStr=(str)=>{
    let stringSplit = str.split("");
    let reverseArr = stringSplit.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
}
module.exports=reverseStr;