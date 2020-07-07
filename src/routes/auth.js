const express = require('express');
const router = express.Router();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

router.use(session({secret: 'Its a secret'}));
router.use(cookieParser());
router.use(bodyParser());

const controller = require('../controllers/auth');

router.post('/login', controller.login);

router.post('/register', controller.register);

router.get('/user/:id', controller.user)

module.exports = router;
