'use strict'

var express = require('express');
var ConfigpiscinaController = require ('../controllers/configpiscina');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/imgpiscina'});

 api.post('/registra-configpiscina',[md_auth.ensureAuth, md_auth.ensureAdminUserPiscina], ConfigpiscinaController.registraItem);
 api.put('/actualiza-configpiscina/:id',[md_auth.ensureAuth, md_auth.ensureAdminUserPiscina], ConfigpiscinaController.actualizaItem);
 api.get('/configpiscina-ultimo',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina], ConfigpiscinaController.itemUltimo);
 api.put('/upload-image-configpiscina/:id',[md_auth.ensureAuth,md_auth.ensureAdminUserPiscina, md_upload],ConfigpiscinaController.uploadImage);
 api.get('/get-image-configpiscina/:imageFile',ConfigpiscinaController.getImageFile);
module.exports = api;