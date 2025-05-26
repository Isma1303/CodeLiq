import express from 'express';
import cors from 'cors';
import contactHandler from './src/api/contact.js';

const app = express();
const port = 3000;

// Configuración de CORS más permisiva para desarrollo
app.use(cors({
    origin: true, // Permite cualquier origen en desarrollo
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Middleware para manejar errores
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

// Iniciar el servidor
const server = app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
    console.error('Error no manejado:', err);
    server.close(() => {
        process.exit(1);
    });
});
