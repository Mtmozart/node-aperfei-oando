const uuid = require('uuid')
const database = require('../models')

class RoleService {
  async cadastrar(dto){
    const role = await  database.roles.findOne({
      where:{
        nome: dto.nome
      }
    })
    if (role){
      throw new Error('Role já cadastrada')
    }

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao
      })
      
      return newRole

    } catch (error) {
   
      throw new Error(error)
    }

  }

  async allRoles(){
   
    try {
      const roles = await database.roles.findAll()
      
      return roles

    } catch (error) {
   
      throw new Error(error)
    }

  }

  async roleById(dto){
   
    try {
      const role = await database.roles.findOne({
        where: {
          id: dto.id
        }
      })
      
      return role

    } catch (error) {
   
      throw new Error(error)
    }

  }

  async roleUpdate(dto){
   
    const role = await this.roleById(dto.id)

  

    try {
      
      role.nome = dto.nome;
      role.descricao = dto.descricao

      await role.save

      
      return role

    } catch (error) {
      
      throw new Error(error)
    }

  }
}

module.exports = RoleService