const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//Model de usuario
require('../modulos/Usuario')
const Usuario = mongoose.model('usuarios')

module.exports = function(passport){
    //usernameField vai analizar por email
    passport.use(new localStrategy({usernameField: 'email'}, (email, senha, done) => {
        Usuario.findOne({email: email}).then((usuario) => {
            if(!usuario){
                return done(null, false, {message: 'Esta conta não existe'})
            }

            bcrypt.compare(senha, usuario.senha, (erro, batem) => {
                if(batem){
                    return done(null, user)
                }else {
                    return done(null, false, {message: 'Senha incorreta'})
                }
            })
        })

    }))

    //Salvar dados em uma sessão
    passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, usuario) => {
            done(err, user)
        })
    })
}