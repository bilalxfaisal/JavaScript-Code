import bcrypt from "bcrypt";

async function hashedPassword(password){
    const hash = await bcrypt.hash(password, 10);
    return hash
}

console.log(`Hashed Password: ${hashedPassword(123)}`)