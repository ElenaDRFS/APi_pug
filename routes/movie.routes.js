const {getMovie, postMovie} = require('../controllers/movie.controller');
const router = require('express').Router();


// le decimos con que ruta va a ejercutarse, en este caso /
// router.get('/film', getFormcontroller);

router.get('/:title', getMovie)
router.post('/', postMovie)  

module.exports = router;