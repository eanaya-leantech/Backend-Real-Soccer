'use strict'

const express = require('express')
const api = express.Router()

const auth = require('../middlewares/auth')

const userCtrl      = require('../controllers/user')
const authCtrl      = require('../controllers/auth')
// const epaycoCtrl    = require('../controllers/epayco')

api.get('/private', auth, (req,res) =>{
    res.status(200).send({msg: 'Tienes acceso!'})
})

api.get('/', (req,res) =>{
    res.status(200).send({msg: 'type your route for usage api :)'})
})

/*
* Routes for Auth
*/

api.post('/auth', authCtrl.signIn)
api.post('/auth/register', authCtrl.signUp)

/*
* Routes for users
*/

api.get('/user', auth, userCtrl.index)
api.get('/user/:userId', auth, userCtrl.show)
api.put('/user/:userId', auth, userCtrl.update)
api.delete('/user/:userId', auth, userCtrl.destroy)
api.get('/user/hello/:name', auth, userCtrl.hello)

// /*
// * Routes for Epayco
// */

// api.get('/epayco', auth, epaycoCtrl.index)
// api.post('/epayco', epaycoCtrl.epayco)
// api.post('/epayco/response', epaycoCtrl.url_response)
// api.post('/epayco/confirmation', epaycoCtrl.url_confirmation)

/*
* Routes for Real Soccer
*/

/**
 * write code here!
 */

api.use(function(req, res, next) {
    return res.status(404).send({ msg: 'Route'+req.url+' Not found.' });
});

module.exports = api