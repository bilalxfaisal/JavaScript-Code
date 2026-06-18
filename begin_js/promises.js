// WHY WE USE A PROMISE ?

// we return a promise when result is not immediately available but will be available in the future
// we dont block the process we wait for result (or failiure) to be given 
// consider promise like a tokem that you hold ... and using which thr resulting value will be given to you


const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true
        if(!error)
        {
            resolve({username: "abc", email: "abc@example.com"})
        }
        else
        {
            reject("ERROR: Couldn't resolve")
        }
    }, 1000)
}).then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("Promise either rejected or resolved"))

// add resolve() in Promise to run .then() - always resolve the promise
// the parameters passed in resolve [ resolve({abc}) ] are passed down to then [ then(fucntion(abc)) ]
// the returns of then are passed down to the next then and so on e.g then().then()
// then.catch for catching the error (passed down using reject)
// .finally tells that whatever needed to happen .. happened .. promise completed its kaam
// .then returns a new Promise each time 
// .then allows chaining 

const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true
        if(!error)
        {
            resolve({username: "abc", email: "abc@example.com"})
        }
        else
        {
            reject("ERROR: Couldn't resolve")
        }
    }, 1000)
});

async function consumePromise(){
    try {
        const response = await promise2
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}

consumePromise()

// either use the approach above (then and catch) or use this approach (async function)
// always use try catch in async function to handle errors .. it doesn handle errors itself

// fetch()
// automatically does the following
// - creates request [XMLHttpRequest] (using the url passed)
// - sends it (.send())
// - waits for response
// - returns a promise

async function getData(){
    try {
        const data = await fetch("https://api.github.com/users/bilalxfaisal")
        const userData = await data.json()
        //console.log(data)
        console.log(userData)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Done")
    }
}

getData()

// using then

fetch("https://api.github.com/users/bilalxfaisal")
.then((data) => {return data.json()})
.then((userData) => {console.log(userData)})
.catch((error) => {console.log(error)})

// await waits until the promise is resolved ... makes the code behave like synchronous (used with async functions)
// freezes the function till promise is resolved (nothing below runs)
// then is same as await ... waits until its execution is finished and then moves to next line
// async allows you to handle asynchronous operations
// await only works with promises

function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}

async function findUser(username) {
  const users = await getUsers();
  return users.find(u => u.username === username);
}

(async () => {
  console.log(await findUser('john'));
})();


// old AJAX - use XMLHttpRequest to open, get, load, send - reloads the whole page
// new AJAX - use fetch API - updates page dynamically (just the changes - doesnt reload the whole page)

// what goes in each queue ? 

// - Task/Callback Queue
// setTimout, setInterval, DOM Events, AJAX callbacks (old ones)
// runs after microtask

// - Microtask Queue
// Promises, then, catch, finally, async/await