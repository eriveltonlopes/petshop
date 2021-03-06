'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
  marca() {
    return this.belongsTo("App/Models/Marca")
  }
  grupo() {
    return this.belongsTo("App/Models/Grupo")
  }
}

module.exports = Produto
