import express from 'express';
import casaRoutes from './routes/casa.routes';

const app = express();

app.use(express.json());
app.use('/casa', casaRoutes);

export default app;
