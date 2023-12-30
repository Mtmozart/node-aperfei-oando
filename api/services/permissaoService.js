const uuid = require('uuid')
const database = require('../models')

class PermissaoService {
 
  async cadastrar(dto){
   
      const permission = await database.permissoes.findOne({
        where: {
          nome: dto.nome
        }
      })
    if (permission){
      throw new Error('Permissão já cadastrada')
    }

    try {
      const newPermission = await database.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao
      })
      
      return newPermission 

    } catch (error) {
   
      throw new Error(error)
    }


  }

  async findAll(){
   
    try {
      const permission = await database.permissoes.findAll();
      
      return permission

    } catch (error) {
   
      throw new Error(error)
    }

  }

  async findById(dto){
   
    try {
      const permission = await database.permissoes.findOne({
        where: {
          id: dto.id
        }
      })
    
      return permission

    } catch (error) {
   
      throw new Error(error)
    }

  }

  async update(dto){
   
    const role = await this.findById(dto.id)

  

    try {
      
      role.nome = dto.nome;
      role.descricao = dto.descricao

      await role.save()

      
      return role

    } catch (error) {
      
      throw new Error(error)
    }

  }

  async delete(dto){
   
    const role =  await this.findById(dto.id)

   try {
      
    await database.permissoes.destroy({
      where: {
        id: role.id
      }
    })

    } catch (error) {
      
      throw new Error('Erro ao tentar deletar o usuario!')
    }

  }
}

module.exports = PermissaoService