import express, {Application} from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express();

// Ajustes
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));

// Rutas
app.use(authRoutes);

export default app;