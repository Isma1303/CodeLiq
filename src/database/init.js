import connection from './connection.js';

async function initDatabase() {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS contact (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                lastName VARCHAR(100) NOT NULL,
                phone VARCHAR(15) NOT NULL,
                company VARCHAR(100) NOT NULL,
                position VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                message VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        
        await connection.query(createTableQuery);
        console.log('Tabla contact creada o verificada correctamente');
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
        throw error;
    }
}

await initDatabase();
