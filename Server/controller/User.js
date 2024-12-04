import User from "../models/Usermodel.js";

export const getUser = async(req,res) => {
    try {
        const user = await User.findOne()
        res.json(user);  
    } catch (error) {
        console.log(error);
    }
}