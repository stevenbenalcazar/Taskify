import express from 'express';
import { createCard } from '../controllers/cardController.js';
import authenticate from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post("/cards", authenticate, createCard);

export default router;