const express = require('express');
const router = express.Router();


var multer  = require('multer')
const upload = multer({
  storage: multer.memoryStorage(),
});

const controller = require('../controllers/post')

//get posts by user
router.get('/u/:id', (req, res) => {

});

// get one post by id
router.get('/:id', (req, res) => {

});

router.post('/send',upload.single('img'), controller.send);

//create post
router.post('/', controller.create);

//delete post
router.delete('/:id', (req, res) => {

});


module.exports = router;