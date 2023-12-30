const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./userRoute')
const auth = require('./authRoute')
const role = require('./roles')
const permissao = require('./permissoes')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    role,
    produto,
    permissao

  )
}
