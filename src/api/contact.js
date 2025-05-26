import connection from '../database/connection.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  if (message.length > 255) {
    return res.status(400).json({ error: 'El mensaje no debe exceder 255 caracteres' });
  }

  try {
    const [result] = await connection.query(
      'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
