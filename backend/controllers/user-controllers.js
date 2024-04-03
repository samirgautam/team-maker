const User = require('../models/user');

//create new user
const createUser = async(req,res) => {
    const {name, email, gender,domain, availability } = req.body;
    try {
        const user = new User({name, email, gender, domain, availability});
        await user.save();
        res.status(201).send(user);
    }catch(err) {
        res.status(500).send(err);
    }
}

//get all users
const getAllUsers = async(req,res) => {
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err) {
 
 exports.updateUser = updateUser;       exports.deleteUser = deleteUser;
        res.status(500).send(err);
    }
};

//get user by Id
const getUserById = async(req,res) => {
    const userId = req.params.id;
    try{
        const user = await User.findById(userId);
        if(!user) {
            res.status(404).send();
        }
        res.send(user);
    }catch(err) {
        res.status(500).send(err);
    }
}

//update existing user
const updateUser = async(req,res) => {
    const userId = req.params.id;
    const {name, email, gender, domain, availability} = req.body;
    try{
        const user = await User.findByIdAndUpdate(userId, {name, email, gender, domain, availability}, {new : true});
        res.send(user);
    }catch(err) {
        res.status(500).send(err);
    }
}

//delete user by id
const deleteUser = async(req,res) => {
    const userId = req.params.id;
    try{
        const user = await User.findByIdAndDelete(userId);
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;