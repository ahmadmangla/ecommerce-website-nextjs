import mongoose from 'mongoose';
import {Constants} from '../config';

export async function connectToCluster() {
    try {
        if (Constants.DB_URL) {
            await mongoose.connect(Constants.DB_URL);
            console.log('Db Connected');
        } else {
            console.error('Error ============ ON DB Connection')
            console.log('DB_URL is not defined in Constants');
        }
        
    } catch (error) {
        console.error('Error ============ ON DB Connection')
        console.log(error);
    }
}

connectToCluster()