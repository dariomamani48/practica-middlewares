let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController.js')

//creamos dos rutas bases
router.get('/', controller.index)
router.get('/admin', controller.index)

module.exports = router;