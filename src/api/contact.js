import connection from '../database/connection.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, lastName, phone, company, position, email, message } = req.body;

  // Validar que todos los campos requeridos estén presentes
  if (!name || !lastName || !phone || !company || !position || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'El formato del email no es válido' });
  }

  // Validar longitud del mensaje
  if (message.length > 255) {
    return res.status(400).json({ error: 'El mensaje no debe exceder 255 caracteres' });
  }

  // Validar formato de teléfono (acepta números y algunos caracteres especiales)
  const phoneRegex = /^[0-9+\-() ]{8,15}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'El formato del teléfono no es válido' });
  }

  try {
    const [result] = await connection.query(
      'INSERT INTO contact (name, lastName, phone, company, position, email, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, lastName, phone, company, position, email, message]
    );
    
    return res.status(200).json({ 
      success: true,
      message: '¡Mensaje enviado exitosamente!' 
    });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
