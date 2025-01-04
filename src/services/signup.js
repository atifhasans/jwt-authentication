const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createUser(userData) {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new instance of the User model
    const createdUser = new User({
        name,
        email,
        password: hashedPassword, // Correctly associate hashed password with "password"
        role: "customer",
    });

    // Save the user to the database
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createUser };
