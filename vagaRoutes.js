const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController');

router.post('/', vagaController.createVaga);
router.get('/', vagaController.getVagas);
router.get('/:id', vagaController.getVagaById);
router.put('/:id', vagaController.updateVaga);
router.delete('/:id', vagaController.deleteVaga);
router.get('/cargo/:cargo', vagaController.getVagasByCargo);
router.get('/localizacao/:cidade', vagaController.getVagasByCidade);

module.exports = router;
