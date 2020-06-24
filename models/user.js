const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true
    }},{
        timestamps: true
})

// userSchema.pre("save", async function(next){
//     if(!this.isModified("password")) return next();
//     throw new Error("You can't change the password")
// });


const User = mongoose.model("User", userSchema)
module.exports = User;