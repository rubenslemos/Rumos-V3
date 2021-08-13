const express = require('express')
const read = require('./CreateTables')
const readpost = (req, res) => {
    read.Orcamento.findAll().then((postagem) => {
        res.render('post', { postagem: postagem })
    })
}
const readuser = (req, res) => {
    read.Usuarios.findAll()
        //.then((readuser) => {res.render('/listaclientes', { readuser: readuser })})
}
module.exports = {
    readpost: readpost,
    readuser: readuser
}