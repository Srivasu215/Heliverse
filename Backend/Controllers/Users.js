const User = require('../Module/Users');

// Create
let insertOneFunc = async (req, res) => {
    console.log("kkk::",res.body);
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

let insertManyFunc = async (req, res) => {
    try {
        const newUser = await User.insertMany(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

let findAllFunc = async (req, res) => {
    try {
        const newUser = await User.find();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

let findOneFunc = async (req, res) => {
    let Localid = req.params.Id;
    try {
        const newUser = await User.find({ _id: Localid });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

let deleteOneFunc = async (req, res) => {
    let LocalId = req.params.Id;
    try {
        const newUser = await User.deleteOne({ _id: LocalId });
        const LocalUser = await User.find();
        res.status(201).json(LocalUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

let deleteManyFunc = async (req, res) => {
    let LocalId = req.params.Id;
    let LocalKey = req.body.Key;
    try {
        const newUser = await User.deleteMany({ LocalKey: LocalId });
        const LocalUser = await User.find();
        res.status(201).json(LocalUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

let PutOneFunc = async (req, res) => {
    let LocalId = req.params.Id;
    let LocalBody = req.body;
    try {
        const newUser = await User.findByIdAndUpdate(LocalId,LocalBody);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

module.exports = { insertOneFunc, insertManyFunc, findAllFunc, findOneFunc, deleteOneFunc, deleteManyFunc,PutOneFunc };
