import express from 'express';
import cors from 'cors';
import cardRoutes from './routes/cardRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", cardRoutes);

export default app;