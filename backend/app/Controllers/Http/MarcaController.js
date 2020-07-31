'use strict'
const Marca = use('App/Models/Marca')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with marcas
 */
class MarcaController {
  /**
   * Show a list of all marcas.
   * GET marcas
   */
  async index () {
    const marcas = await Marca.all()

    return marcas
  }

  /**
   * Create/save a new marca.
   * POST marcas
   */
  async store ({ request, response }) {
    const data = request.only(['marca', 'ativo'])
    const marca = await Marca.create(data)

    return marca
  }

  /**
   * Display a single marca.
   * GET marcas/:id
   */
  async show ({ params}) {

    const marca = await Marca.findOrFail(params.id)

    console.log(marca.id)
    return marca
  }

  /**
   * Update marca details.
   * PUT or PATCH marcas/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a marca with id.
   * DELETE marcas/:id
   */
  async destroy ({ params, response }) {
    const marca = await Marca.findOrFail(params.id)
    try {
      if(marca) {
        await marca.delete()
      }
    } catch (error) {
      response.end('error')
    }

  }
}

module.exports = MarcaController
