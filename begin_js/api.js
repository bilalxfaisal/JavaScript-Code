// fectching data from API using JavaScript 

async function getGithubProfileJSON()
{
    try {
        const link = "https://api.github.com/users/bilalxfaisal"
        const gitData = await fetch(link)
        const context = await gitData.json()
        console.log(context)
        
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
async function getGithubProfileHeaders()
{
    try {
        const link = "https://jsonplaceholder.typicode.com/users"
        const gitData = await fetch(link)
        const headers = await gitData.headers
        console.log(headers)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

//getGithubProfileJSON()
getGithubProfileHeaders()