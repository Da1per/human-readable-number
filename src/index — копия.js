module.exports = function toReadable (number) {
    let num2='';
    let num1=number;
    const obg={
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1
    }
    for(let key in obj){
        while(num1>=obj[key]){
            num2+=key 
            num1 -= obj[key]}
    }
    console.log(num2)
    return num2;
}
console.log(toReadable(22))
