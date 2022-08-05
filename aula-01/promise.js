console.log('Promise')

const myResolvedPromise = () => new Promise((resolved, reject) => {
    console.log('dentro da promise 1')
    resolved('dentro da promise 1')
})

myResolvedPromise()
    .then(data => console.log(`Printing data of promise 1: ${data}`))
    .catch(data => console.log('não é para imprimir'))

const myRejectedPromise = () => new Promise((resolved, reject) => {
    console.log('dentro da promise 2')
    reject('dentro da promise 2')
})

myRejectedPromise()
    .then(data => console.log('não é para imprimir'))
    .catch(data => console.log(`Printing data of promise 2: ${data}`))



////
const myPromise = () => new Promise((resolved, reject) => {
    console.log('dentro da promise 3')
    const now = (new Date()).getMinutes()
    if (now % 2 === 0) {
        resolved('dentro da promise 2')
    } else {
        reject('dentro da promise 2')
    }
})

myPromise()
    .then(a => console.log('sucesso'))
    .catch(a => console.log('falha'))


