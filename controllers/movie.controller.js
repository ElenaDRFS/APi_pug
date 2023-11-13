const fetchFilm = require('../utils/fetchFilms')

const getMovie = async function (req, res) {
    console.log(req.params);
    console.log('hola')
    const titleUrl = req.params.title;
    const { Title, Director, Plot, Poster } = await fetchFilm(titleUrl)
    res.render("film", { Title, Director, Plot, Poster });
};

const postMovie = function (req,res){
    let film = req.body.title;
    console.log(film)
    res.status(303).redirect(`/film/${film}`)   // esto no redirige 
}

module.exports = {getMovie, postMovie};