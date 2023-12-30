const PermissaoService = require('../services/permissaoService')

const permissaoService = new PermissaoService()

class PermissaoController {

  static async cadastrar(req, res){
   
   const {nome, descricao} = req.body
  
    try {
      
      const permissao = await permissaoService.cadastrar({nome, descricao}) 
      res.status(201).send(permissao)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
 
  }

  static async findAll(req, res){
    
     
    try {
      const permissoes = await permissaoService.findAll() 
      res.status(201).send(permissoes)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
  }

  static async findById(req, res){
    
    const { id } = req.params

    try {
      const permissao = await permissaoService.findById({id}) 
      res.status(201).send(permissao)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
  }

  static async update(req, res){
    
    const  id = req.params
    const {nome, descricao} = req.body


    try {
      const permissao = await permissaoService.update({id, nome, descricao}) 
      res.status(201).send(permissao)
    } catch (error) {
      res.status(400).send({ message: "erro aqui " + error.message })
    }
  }


  static async delete(req, res){
    
    const  id = req.params
    
    try {
      await permissaoService.delete({id}) 
      res.status(201).send({ message: "Permissão deletada com sucesso"})
    } catch (error) {
      res.status(400).send({ message: "erro aqui " + error.message })
    }
  }

}
module.exports = PermissaoController