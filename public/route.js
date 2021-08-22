const express = require('express')
const route = express()
const insert = require('./Insert')
const deletar = require('./delete')
const read = require('./read')
const create = require('./CreateTables')
const edit = require('./edit')
route.get('/', (req, res) => res.render("index", { page: 'home' }))
route.get('/conhecimento', (req, res) => res.render("index", { page: 'conhecimento' }))
route.get('/clientes', (req, res) => res.render("index", { page: 'clientes' }))

route.get('/editarCliente/:id', edit.exibirCliente)
route.post('/editarCliente', edit.editarCliente)

route.get('/editarOrcamento/:id', edit.exibirOrcamento)
route.post('/editarOrcamento', edit.editarOrcamento)

route.get('/listaclientes', (read.readuser))
route.get('/listaorcamento', (read.readorca))

route.get('/contato', (req, res) => res.render("index", { page: 'contato' }))
route.get('/orcamento', (req, res) => res.render("index", { page: 'orcamento' }))

route.post('/add', (insert.orcamento))
route.post('/add2', (insert.usuarios))

route.get('/listaorcamento/:id', deletar.deletepost)
route.get('/listaclientes/:id', deletar.deleteuser)

module.exports = route