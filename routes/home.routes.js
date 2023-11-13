// importamos el controller con la lógica de la ruta
const getFormcontroller = require('../controllers/home.controller');


// ni idea de esto
const router = require('express').Router();

// le decimos con que ruta va a ejercutarse, en este caso /
router.get('/', getFormcontroller);

module.exports = router;