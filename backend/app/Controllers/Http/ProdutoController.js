'use strict'
const Produto = use('App/Models/Produto')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {
  /**
   * Show a list of all produtos.
   * GET produtos
   */
  async index ({ request, response, view }) {
    const produto = await Produto.query()
      .with("grupo") //nome do relacionamento
      .with("marca")
      .fetch()

    return produto
  }

  /**
   * Create/save a new produto.
   * POST produtos
   */
  async store ({ request, params }) {
    const data = request.only(
      ['grupo_id', 'marca_id','produto', 'ativo', 'unidade', 'ncm'])

    const produto = await Produto.create(data)

    return produto
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   */
  async show ({ params }) {
    const produto = await Produto.findOrFail(params.id)


    return produto
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   */
  async update ({ params, request, response }) {
    const produto = await Produto.find(params.id)

    if(produto) {
      produto.merge(request.only(
        ['grupo_id', 'marca_id','produto', 'ativo', 'unidade', 'ncm']))
      await produto.save()
    }
    response.status(200).json(produto)
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   */
  async destroy ({ params, request, response }) {

    const produto = await Produto.findOrFail(params.id)

    await produto.delete()
  }
}

module.exports = ProdutoController
