const moviesModels = require ("../../db/models/moviesModels");

const getmovies = async (req, res) => {
    
    try {
        const movies = await moviesModels.find({}).populate("userId");
        // تبحث لي على جميع الاوبجكت الي بالاسكيما
        // populate تجيب لي user
        res.status(200).json(movies);
      } catch (error) {
        res.send(error);
      }
};

console.log("data");


const postmovies = async (req, res) => {
    const {name, img,description,userId } = req.body;
    const newmovies = new moviesModels({
        name,
        img,
        description,
        userId,
    })
    try {
        const savemovies = await newmovies.save();
        const movies = await moviesModels.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.send(error);
    }
};




module.exports = { getmovies, postmovies };