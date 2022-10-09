const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../modulos/Categoria')
const Categoria = mongoose.model('categorias')

router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Página de posts')
})

router.get('/categorias', (req, res) => {
    //Ordenar por data -> Categoria.find().sort({date: 'desc'}).then((categorias) => {
    Categoria.find().then((categorias) => {
        res.render('admin/categorias', {categorias: categorias})
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro na exibição das categorias.')
        res.redirect('/admin')
    })    
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

router.post('/categorias/nova', (req, res) => {

    //Validando dados
    var erros = []

    if(!req.body.nome && req.body.nome == undefined || req.body.nome == null || req.body.nome.length <= 2){
        erros.push({texto: "Nome inválido"}) 
    }

    if(!req.body.slug && req.body.slug == undefined || req.body.slug == null || req.body.slug.length <= 2){
        erros.push({texto: "Slug inválido"}) 
    }

    if(erros.length > 0){
        res.render('admin/addcategorias', {erros: erros})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
    
        new Categoria(novaCategoria).save().then(() => {
            console.log(`Categoria "${req.body.nome}" foi criada com sucesso!`)
            //Passando valores para variaveis globais
            req.flash('success_msg', 'Categoria criada com sucesso!')
            res.redirect('/admin/categorias')//Será redirecionado para essa rota se cadastro der certo.
        }).catch((err) => {
            //Passando valores para variaveis globais
            req.flash('error_msg', 'Hove um erro ao salvar a Categoria, tente novamente!')
            console.log('Houve um erro na criação da categoria: '+err)
            res.redirect('/admin')
        })
    }
})


module.exports = router