const express = require('express');
const { createList, getListsByBoard } = require('../controllers/listController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createList);
router.get('/:boardId', authMiddleware, getListsByBoard);

module.exports = router;