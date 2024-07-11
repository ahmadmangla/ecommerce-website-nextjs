import UserModel from "../models/User.model";
import bcrypt from "bcrypt";

export const createUser = async (body: any) => {

    let {name, email, password} = body;
    // check if user exits in the db
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return {
            message: "User already exists",
            status: 400
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        name,
        email,
        password: hashedPass
    });

    const savedUser = await newUser.save();

    return {
        message: "User created successfully",
        data: savedUser,
        status: 200
    }

}

export const getUser = async (id : any) =>{
    try {
        const user = await UserModel.findOne(id).select("-password");
        if(user){
            return {
                message: "Success",
                data: user,
                status: 200
            }
        }
        
    } catch (error) {
        return {
            message: "Error",
            data: error,
            status: 400
        }
    }
}

export const loginUser = async (body: any) => {
    const {email, password} = body;

    const existingUser = await UserModel.findOne({ email, password });

    if(!existingUser){
        return {
            message: "Incorrent email or Password",
            status: 400,
        }
    }

    

    
}