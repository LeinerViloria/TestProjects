import "dotenv/config";
import {connect} from 'mongoose';

async function Connect(): Promise<void>{
    const DB_URL = <string> process.env.DBConnection
    await connect(DB_URL)
}

export default Connect;