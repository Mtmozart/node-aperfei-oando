const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./userRoute')
const auth = require('./authRoute')
const role = require('./roles')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    role,
    produto

  )
}
