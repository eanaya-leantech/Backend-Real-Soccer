'use strict'

const { jsonResponse } = require('../tools/jsonResponse')
const Code = require('../values/errorCode')

function validator_res (err, objet){
    if(err) return jsonResponse(false,Code.e001)
    if(!objet) return jsonResponse(false,Code.e002)

    return jsonResponse(true,Code.e000)
}

module.exports = {validator_res}