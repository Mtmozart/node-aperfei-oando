const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./userRoute')
const auth = require('./authRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    produto,
    usuario
    

  )
}
