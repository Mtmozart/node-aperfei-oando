const database = require('../models')


class SegurancaService {
  async cadastrarAcl(dto){

    const usuario = await database.usuarios.findOne({
      include: [
        {
          model: database.roles,
          as: 'usuario_roles',
          attributes: ['id', 'nome', 'description']
        },
        {
          model: database.permissoes,
          as: 'usuario_permissoes',
          attributes: ['id', 'nome', 'description']
        },

      ],  
      where: {
        id: dto.usuariosId
      },
     })


  }
}

module.exports = SegurancaService;