const RoleService = require('../services/roleServices')
const roleServices = new RoleService();

class RoleController {
  static async cadastrar(req, res){
    const {nome, descricao} = req.body

 
    try {
      const role = await roleServices.cadastrar({nome, descricao}) 
      res.status(201).send(role)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
  }

  static async allRoles(req, res){
    
     
    try {
      const roles = await roleServices.allRoles() 
      res.status(201).send(roles)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
  }

  static async roleById(req, res){
    
    const { id } = req.params

    try {
      const roleById = await roleServices.roleById({id}) 
      res.status(201).send(roleById)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
  }

  static async roleUpdate(req, res){
    
    const  id = req.params
    const {nome, descricao} = req.body


    try {
      const newRole = await roleServices.roleUpdate({id, nome, descricao}) 
      res.status(201).send(newRole)
    } catch (error) {
      res.status(400).send({ message: "erro aqui " + error.message })
    }
  }


  static async roleDelete(req, res){
    
    const  id = req.params
    
    try {
      await roleServices.roleDelete({id}) 
      res.status(201).send({ message: "Regra deletada com sucesso"})
    } catch (error) {
      res.status(400).send({ message: "erro aqui " + error.message })
    }
  }

}

module.exports = RoleController