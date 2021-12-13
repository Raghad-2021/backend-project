const moviesModels = require ("../../db/models/moviesModels");

const getmovies = async (req, res) => {
    
};

const postmovies = async (req, res) => {
    const {name, img,description } = req.body;
    const newmovies = new moviesModels({
        name,
        img,
        description
    })
    try {
        const savemovies = await newmovies.save();
        const movies = await moviesModels.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.send(error);
    }
};



module.exports = { getmovies, postmovies ,};