'use strict'

var express = require('express');
var IdharneroController = require ('../controllers/idharnero');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');
                                     
api.get('/idharnero-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUser], IdharneroController.itemUltimo);
api.put('/actualiza-idharnero/:id',[md_auth.ensureAuth, md_auth.ensureAdminUser], IdharneroController.actualizaItem);

module.exports = api;