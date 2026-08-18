import express from 'express';
import cors from 'cors';
import contactRoute from './routes/contact.js';

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

app.use('/api/contact', contactRoute);

export default app;