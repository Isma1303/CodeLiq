import express from 'express';
import cors from 'cors';
import contactHandler from './src/api/contact.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: true, 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.use((err, req, res, next) => {
    console.error('Error en el servidor:', err);
    res.status(500).json({ 
        error: 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.post('/api/contact', async (req, res, next) => {
    try {
        await contactHandler(req, res);
    } catch (error) {
        next(error);
    }
});

const server = app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

process.on('unhandledRejection', (err) => {
    console.error('Error no manejado:', err);
    server.close(() => {
        process.exit(1);
    });
});
