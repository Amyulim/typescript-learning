\type Last = {
    <T>(arr:T[]):T
}

const last: Last = (arr) => arr[arr.length-1]

//TEST
//console.log(last([1,2,true,false]))

last([1,2,true,false,"bye"])

///////////////////////


type Prepend =  <T>(arr:T[], item:T) => T[]


const prepend : Prepend =(arr,item)=> {
return [item, ...arr]
}

const example = prepend([2,3,"hi"],"bye")
console.log(example)