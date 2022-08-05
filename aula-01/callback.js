console.log('hello world!!!')

const sum = (a, b, callback) => {
    callback(a + b)
}

const myFunctionCallback = value => {
    console.log(`Valor: ${value}`)
}

sum(10, 5, myFunctionCallback)



