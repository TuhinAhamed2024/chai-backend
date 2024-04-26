import { connect,connection, disconnect } from "mongoose";
import { config } from "../config/config";
import DB_NAME from "../constant";
const ConnectDB = async () => {
    try {
        const Connect = await connect(`${config.mongodb_uri}/${DB_NAME}`);
        connection.on("connected",()=>{
            console.log(`mongodb connection host ${Connect.connection.host}`);
            console.log(`mongodb connect with ${DB_NAME} successfully`);
        })
    } catch (error) {
        connection.off("error",()=>{
            console.log(`mongodb connection error ${error}`);
        })
    }
}
export default ConnectDB;