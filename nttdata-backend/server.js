import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/users', async (req, res) => {
  let count = 10;

  if (req.query.count) {
    const parsed = Number(req.query.count);
    if (isNaN(parsed) || parsed < 1 || parsed > 100) {
      return res.status(400).json({ error: "El parámetro 'count' debe ser un número entre 1 y 100." });
    }
    count = parsed;
  }

  try {
    const response = await axios.get(process.env.API_URL, {
      params: { results: count }
    });

    res.json(response.data.results);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
});
