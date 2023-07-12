export default defineEventHandler(async(event) => {

    // 
    const {name} = getQuery(event)

    // Handle Post
    const {age} = await readBody(event)

    return {
        message: `Hello, ${name}! You are ${age} years old.`
    }
})