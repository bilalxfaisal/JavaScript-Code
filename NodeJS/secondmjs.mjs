export function name(value){
    console.log(value)
}

export function square(num){
    return num*num
}

// to make mjs import and expost work ... add type: module in json file
// to use require (commmon js) ... add type: commonjs in json file