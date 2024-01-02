const { Router } = require('express')
const router = Router()
const seguranca = require('../controllers/segurancaController');
const SegurancaController = require('../controllers/segurancaController');

router
  .post('seguranca/acl', SegurancaController.cadastrarAcl)



module.exports = router;