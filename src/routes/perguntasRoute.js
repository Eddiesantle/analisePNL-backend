const express = require('express');
const router = express.Router();

const controller = require('../controllers/perguntasController')

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.delete);

module.exports = router