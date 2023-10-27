import User from "../model/User";

const getAllUser = async(req, res, next) =>{
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
}