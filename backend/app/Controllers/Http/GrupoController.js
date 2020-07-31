'use strict'

const Grupo = use('App/Models/Grupo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with grupos
 */
class GrupoController {

  async index() {
    const grupos = await Grupo.all()

    return grupos
  }

  /**
   * Create/save a new grupo.
   * POST grupos
   */
  async store ({ request }) {
    const data = request.only(['grupo', 'ativo'])

    //const grupo = await Grupo.create({ user_id: auth.user.id, ...data})
    const grupo = await Grupo.create(data)

    return grupo
  }

  /**
   * Display a single grupo.
   * GET grupos/:id
   */
  async show ({ params }) {
    const grupo = await Grupo.findOrFail(params.id)

    return grupo
  }

  /**
   * Update grupo details.
   * PUT or PATCH grupos/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a grupo with id.
   * DELETE grupos/:id
   */
  async destroy ({ params }) {
    const grupo = await Grupo.findOrFail(params.id)

    await grupo.delete()
  }
}

module.exports = GrupoController
