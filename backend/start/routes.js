'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  Route.resource('grupo', 'GrupoController').apiOnly()
}).middleware(['auth'])

Route.group(() => {
  Route.resource('marcas', 'MarcaController').apiOnly()
}).middleware(['auth'])

Route.group(() => {
  Route.resource('produtos', 'ProdutoController').apiOnly()
}).middleware(['auth'])

//Route.get('/app', 'AppController.index').middleware(['auth'])
