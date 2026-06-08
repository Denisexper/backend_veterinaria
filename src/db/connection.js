import { connect } from "mongoose";

const mongourl = 'mongodb://localhost:27017/veterinaria'

async function conn () {

    try {
    
    await connect(mongourl)

    console.log("connection db up")

    } catch {
    
        console.error("error in db connection")
    }
    
}

export default conn;