'use strict'

var express = require('express');
var BateriachancadorController = require ('../controllers/bateriachancador');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');
                                     
api.get('/bateriachancador-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminAvanzadoEsfuerzo], BateriachancadorController.itemUltimo);

module.exports = api;