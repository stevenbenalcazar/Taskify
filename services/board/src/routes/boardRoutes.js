const express = require('express');
const router = express.Router();
const { createBoard } = require('../controllers/boardController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createBoard);

module.exports = router;