'use strict'

const Model = require('../models/user')
const service = require('../services')

function signUp (req, res) {

    if (!req.body.displayName || !req.body.username || !req.body.email || !req.body.password || !req.body.birthday) return res.status(400).send({ msg: 'Faltan parámetros' })

    Model.findOne({ email: req.body.email}, (err, user) => {

        const userRequest = new Model({
            displayName: req.body.displayName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday
        })

        if (err) return res.status(500).send({msg: err})
        if(user) return res.status(404).send({msg: `Ya Existe el usuario!`})

        userRequest.save((err)=>{
            if(err) return res.status(500).send({ msg: `Error al crear usuario ${err}` })
        
            return res.status(200).send({ msg: `Usuario creado exitosamente!`, /*token: service.createToken(user)*/ })
        })
    })
}

function signIn (req, res) {

    if (!req.body.username || !req.body.password) return res.status(400).send({ msg: 'Faltan parámetros' })

    Model.findOne({ username: req.body.username}, (err, user) => {
        if (err) return res.status(500).send({msg: err})
        if(!user) return res.status(404).send({msg: `No existe el usuario!`})

        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) return res.status(500).send({msg: `! ${err}`})
            if(!isMatch) return res.status(404).send({msg: `Contraseña errada!`})

            req.user = user
                res.status(200).send({
                    profile: user.gravatar(),
                    msg: 'Te has logueado correctamente.',
                    token: service.createToken(user)
                })
        })
    })
}

function resetPassword (req, res) {
    if(!req.body.email || !req.body.password) return res.status(400).send({ msg: 'Faltan parámetros' })

    return res.status(200).send({ msg: 'Password actualizado correctamente' })
}

//TO DO 
function forgotPassword (req, res) {
    if(!req.body.email) return res.status(400).send({ msg: 'Faltan parámetros' })
    
    return res.status(200).send({ msg: 'Email enviado correctamente!' })
}

module.exports = { signIn, signUp, resetPassword, forgotPassword }