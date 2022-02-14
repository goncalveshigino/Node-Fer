

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, revalidarToken } = require('../controllers/auth.controller');
const { loginUser } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/auth.middleware')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();


//Criar um novo usuario
router.post('/new', [
    check('name', 'O nome é obrigatório').not().isEmpty(),
    check('email', 'O e-mail é obrigatório').isEmail(),
    check('password', 'A senha é obrigatória').isLength({ min: 6 }),
    validarCampos
], createUser );

//Fazer login do usuario
router.post('/', [
    check('email', 'O e-mail é obrigatório').isEmail(),
    check('password', 'A senha é obrigatória').isLength({ min: 6 }),
    validarCampos
],loginUser );


//Validar e Revalidar token 
router.get('/renew',validarJWT, revalidarToken );




module.exports = router;