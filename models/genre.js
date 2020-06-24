const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "genre is required"],
        trim: true,
        unique: true
    
    }},{
        timestamps: true
})

// genreSchema.pre("save", async function(next){
//     // if(!this.isModified("password")) return next();
//     // throw new Error("You can't change the password")
// });


const Genre = mongoose.model("Genre", genreSchema)
module.exports = Genre; 