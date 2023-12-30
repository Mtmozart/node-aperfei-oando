const { Router } = require('express')
const router = Router()
const PermissaoController = require('../controllers/permissaoController')


router
.post("/permissao", PermissaoController.cadastrar)
.get('/permissao', PermissaoController.findAll)
.get('/permissao/:id', PermissaoController.findById)
.delete('/permissao/:id', PermissaoController.delete)
.put('/permissao/:id', PermissaoController.update)

module.exports = router