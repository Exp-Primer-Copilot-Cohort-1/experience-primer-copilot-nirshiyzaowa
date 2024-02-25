//Create web server

//import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//routes
router.post('/add', commentController.addComment);
router.put('/update', commentController.updateComment);
router.delete('/delete', commentController.deleteComment);
router.get('/get', commentController.getComment);
router.get('/getall', commentController.getAllComments);

//export module
module.exports = router;