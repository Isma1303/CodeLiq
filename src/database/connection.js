import mysql from 'mysql2/promise';
import dbConfig from './config.js';

const connection = mysql.createPool(dbConfig);

// Verificar la conexión
connection.getConnection()
    .then(conn => {
        console.log('Base de datos conectada exitosamente');
        conn.release();
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err.message);
        console.error('Configuración utilizada:', {
            host: dbConfig.host,
            port: dbConfig.port,
            user: dbConfig.user,
            database: dbConfig.database
        });
        process.exit(1);
    });

export default connection;


