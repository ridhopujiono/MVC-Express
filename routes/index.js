const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController.js');

router.get('/', (req, res) => {
    movieController.index(req, res);
});
router.get('/:id', (req, res) => {
    movieController.getById(req, res);
});
router.post('/', (req, res) => {
    movieController.store(req, res);
});
router.put('/:id', (req, res) => {
    movieController.update(req, res);
});
router.delete('/:id', (req, res) => {
    movieController.destroy(req, res);
});


module.exports = router;