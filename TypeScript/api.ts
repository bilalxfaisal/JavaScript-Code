// fectching data from API using JavaScript 

async function getAPIJSON(url: string): Promise<void>
{
    try {
        const response: Response = await fetch(url)
        if(!response.ok)
        {
            throw new Error(`Error: ${response.status}`)
        }
        const context: any = await response.json()
        console.log(context)
        
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
async function getAPIHeaders(url: string): Promise<void>
{
    try {
        const response: Response = await fetch(url)
        if(!response.ok)
        {
            throw new Error(`Error: ${response.status}`)
        }
        const headers: any = await response.headers
        console.log(headers)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
async function createUser(url: string): Promise<void>
{
    try {
        // this will be passed to server
        const options: RequestInit = {
            method: 'PUT', // the HTTP Method 
            headers: {
                'Content-Type': 'application/json' // telling server we are sending JSON
                // more attriutes that need to be added
            },
            body: JSON.stringify({
                username: 'dummyrider12',
                email: 'rider123@gmail.com'
            })
        };

        const response: Response = await fetch(url , options)
        if(!response.ok)
        {
            throw new Error(`Error: ${response.status}`)
        }
        const result: any = await response.json()
        console.log(result)
        
    } catch (error: unknown) 
    {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        } else {
            console.log('Unknown error');
        }
    }
}
const bilal: string = "https://api.github.com/users/bilalxfaisal"
const dummy: string = "https://jsonplaceholder.typicode.com/users/1"


const link: string = dummy
//getAPIJSON(link)
//getAPIHeaders(link)
createUser(link)

// Fetch returns a 'Response' object 

// options syntax

// const options: RequestInit = {
//     method: 'POST', /// can be 'PATCH'
//     headers: {
//         'Content-Type': 'application/json' // telling we are sending json
//         // more headers
//     },
//     body: JSON.stringify({
//         username: 'abc',
//         email: 'abc@gmail.com'
//         // more if there are any
//     })
// };