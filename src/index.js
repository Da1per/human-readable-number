module.exports = function toReadable (number) {
    if (number==0)return 'zero'
    let num2=[];
    let num1=number;
    const obj={
        'thousand':1000,
        'hundred':100,
        'ninety':90,
        'eighty':80,
        'seventy':70,
        'sixty':60,
        'fifty':50,
        'forty':40,
        'thirty':30,
        'twenty':20,
        'nineteen':19,
        'eighteen':18,
        'seventeen':17,
        'sixteen':16,
        'fifteen':15,
        'fourteen':14,
        'thirteen':13,
        'twelve':12,
        'eleven':11,
        'ten':10,
        'nine':9,
        'eight':8,
        'seven':7,
        'six':6,
        'five':5,
        'four':4,
        'three':3,
        'two':2,
        'one':1,
    }
    for(let key in obj){
        while(num1>=obj[key]){
            if (key=='thousand'){
                for(let key1 in obj){
                    while(parseInt((num1/1000))>=obj[key1]){                       
                        num2.push(key1,key)
                        num1 -= obj[key]*obj[key1]  
                        }
                    }
                }           
            else if (key=='hundred'){
                for(let key2 in obj){
                    while(parseInt((num1/100))>=obj[key2]){
                        num2.push(key2,key)
                        num1 -= obj[key]*obj[key2]          
                        }
                    }
                }           
            else{
                num2.push(key) 
                num1 -= obj[key]}
            }
    }
    return num2.join(' ')
}

