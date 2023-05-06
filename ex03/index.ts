function toNumber(value: number | string){
    if( value === 'number'){
        return value
    }else if(typeof value === 'string'){
        return Number()
    }else {
        throw 'value deve ser um nunber | string'
    }
    
}

console.log(toNumber(1))