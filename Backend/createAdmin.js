const mongoose = require('mongoose');
require('dotenv').config();
const Admin = require('./models/Admin');
const bcrypt = require('bcryptjs')
const createAdmin = async() =>{
    mongoose.connect('uri from .env');

    const hashedPassword = await bcrypt.hash('password',10);
    const newAdmin = new Admin({
        username:'username',
        password:hashedPassword
    });
    await newAdmin.save();
    console.log("Created Successfully!");
    process.exit();
};
createAdmin();
// run it once only.