const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router();

router
.post("/roles", RoleController.cadastrar)
.get('/roles', RoleController.allRoles)
.get('/roles/:id', RoleController.roleById)
.delete('/roles/:id')
.put('/roles/:id', RoleController.roleUpdate)

module.exports = router 