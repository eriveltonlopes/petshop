'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table
        .integer('grupo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('grupos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        table
        .integer('marca_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('marcas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('produto', 240).notNullable()
      table.string('ativo', 5)
      table.string('unidade', 15).notNullable()
      table.string('ncm', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
