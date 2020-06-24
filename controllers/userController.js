const User = require("../models/user")

exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create({ ...req.body })
        res.json({
            status: "sucess",
            data: newUser
        })


    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })

    }
}

exports.readUser = async (req, res, next) => {
    try {
        const allUsers = await User.find({})
        res.json({
            status: "sucess",
            data: allUsers,
        })
    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })


    }
}


exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id) //check if we have user or not
        if (!user) {
            throw new Error("There is no user")
        }
        const fields = Object.keys(req.body);// get which field  is being changed in body
        fields.map(field=> user[field]= req.body[field]);
        user.save();
        
        res.json({
            status: "sucess",
            data: user
        })

    } catch (err) {
        res.json({
            status: "fail",
            message: err.message
        })


    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        if (!user) {
            throw new Error("There is no user to delete")
        }
        const response = {
            message: "User deleted successfully",
            id: req.params.id
        };
        return res.status(200).send(response);

    } catch (err) {
        res.status(500).send(err)

    }
}