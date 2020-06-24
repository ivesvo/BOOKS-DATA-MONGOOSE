const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const express = require('express')

mongoose.connect(process.env.DB_LOCAL, {
    // some options to deal with deprecated warning, you don't have to worry about them.
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log("connected to database"))

const bodyParser = require('body-parser')
// ... 
const app = express();
const router = express.Router();
const {createUser, readUser, updateUser, deleteUser} = require('./controllers/userController')
const {createGenre, readGenre, updateGenre, deleteGenre} = require('./controllers/genreController')
const {createBook, readBook, updateBook, deleteBook} = require('./controllers/bookController')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// use router
app.use(router);

//Usrer
router
.route("/users")
.post(createUser)
.get(readUser)

router
.route("/user/:id")
.put(updateUser)
.delete(deleteUser)

//Genre

router
.route("/genres")
.post(createGenre)
.get(readGenre)

router
.route("/genre/:id")
.put(updateGenre)
.delete(deleteGenre)


//Books

router
.route("/books")
.post(createBook)
.get(readBook)

// router
// .route("/book/:id")
// .put(updateBook)
// .delete(deleteBook)

app.listen(process.env.PORT,() =>
    console.log("server running on" + process.env.PORT)
);