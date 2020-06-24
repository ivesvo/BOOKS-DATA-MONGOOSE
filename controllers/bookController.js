const Book = require("../models/book")
const User = require("../models/user")
const Genre = require("../models/genre")

exports.createBook = async (req, res, next) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            description: req.body.description,
            
        }); // all the fields from req.body will go in here

        newBook.user = await User.findById(req.body.user)
        console.log(newBook.user)
        const promise = req.body.genres.map(async id=> await Genre.findById(id))
        console.log(promise)
        newBook.genres = await Promise.all(promise)
        await newBook.save();
        res.status(201).json({ status: "success", data: newBook });
    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message })
    }
};

exports.readBook = async (req, res, next) => {
    try {

        const allBook = await Book.find({})
        res.json({
            status: "sucess",
            data: allBook,
        })
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })


    }
}



// exports.updateBook = async (req, res, next) => { 
//     try {
//         const book = await Book.findById(req.params.id);

//     } catch
// }