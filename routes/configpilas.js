'use strict'

var express = require('express');
var ConfigpilasController = require ('../controllers/configpilas');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/imgpilas'});

 api.post('/registra-configpilas',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], ConfigpilasController.registraItem);
 api.put('/actualiza-configpilas/:id',[md_auth.ensureAuth, md_auth.ensureAdminUserPila], ConfigpilasController.actualizaItem);
 api.get('/configpilas-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserPila], ConfigpilasController.itemUltimo);
 api.put('/upload-image-configpilas/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPila, md_upload],ConfigpilasController.uploadImage);
 api.get('/get-image-configpilas/:imageFile',ConfigpilasController.getImageFile);
module.exports = api;