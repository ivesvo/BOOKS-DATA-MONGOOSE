const Genre = require("../models/genre")

exports.createGenre = async (req, res, next) => {
    try {


        const newGenre = await Genre.create({ ...req.body }) //shouldn't use ...req because people might hack your password very easily
        res.json({
            status: "sucess",
            data: newGenre
        })

    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })

    }


}
exports.readGenre = async (req, res, next) => {
    try {

        const allGenre = await Genre.find({})
        res.json({
            status: "sucess",
            data: allGenre,
        })
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })


    }
}

exports.updateGenre = async (req, res, next) => {
    try {
        const genre = await Genre.findById(req.params.id) //check if we have user or not
        if (!genre) {
            throw new Error("There is no genre")
        }
        const category = Object.keys(req.body);// get which field  is being changed in body
        category.map(field => category[field] = req.body[field]);
        user.save();

        res.json({
            status: "sucess",
            data: genre
        })

    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })


    }
}

exports.deleteGenre = async (req, res, next) => {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id)
        if (!genre) {
            throw new Error("There is no genre to delete")
        }
        const response = {
            message: "Genre deleted successfully",
            id: req.params.id
        };
        return res.status(200).send(response);

    } catch (err) {
        res.status(500).send(err)

    }
}