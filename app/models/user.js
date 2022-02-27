import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: 'string',
    password: 'string',
    name: 'string',
    lastName: 'string'
});

const User = mongoose.model('user', schema);

const create = (user) => {
    const newUser = new User(user);
    newUser.save();

    return newUser;
}

export {User, create};
