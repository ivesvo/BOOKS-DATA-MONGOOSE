const mongoose = require("mongoose");
const User = require("../models/user")
const Genre = require("../models/genre")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Book must have a title"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Book must have a description"],
    trim: true
  },
  user: {type: Object},
  genres: {type: Array}
});

// bookSchema.pre("save", async function (next) {
//     console.log(this.user);
//     this.user = await User.findById(this.user);
//     console.log(this.user);
//     const promises = this.genres.map(async id => await Genre.findById(id));
//     this.genres = await Promise.all(promises);
//     next();
//   });

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;