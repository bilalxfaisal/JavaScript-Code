const {promise, resolve, reject} = Promise.withResolvers()
Math.random() > 0.5 ? resolve("Passed") : reject("Failed")
promise
.then((str) => {
    console.log(str)
})
.catch((error) => {
    console.log(error)
})


const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved")
    },1000)
})
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    },1000)
})
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3 rejected")
    },1000)
})
const finalPromise = Promise.allSettled ([pr1, pr2, pr3])
.then((values) => {
    console.log(values)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("All promises have been processed")
})