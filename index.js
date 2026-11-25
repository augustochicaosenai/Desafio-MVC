import express from 'express';
import desafioRoutes from './Routes/desafioRoutes.js';

const app = express();
app.use(express.json());
app.use('/', desafioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});