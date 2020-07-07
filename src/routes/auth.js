const express = require('express');
const router = express.Router();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

router.use(session({secret: 'Its a secret'}));
router.use(cookieParser());
router.use(bodyParser());

router.post('/login', (req, res) => {
	if(req.body.name && req.body.password) {
		var token = jwt.sign({name: req.body.name}, 'shhhhh');
		res.json(token);
	} else {
		res.json({auth: false});
	}
});

router.post('/register', (req, res) => {
	if(req.body.email && req.body.name && req.body.password) {
		
	}
})

module.exports = router;
