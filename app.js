require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


// Middleware para o Express entender JSON (essencial para APIs)
app.use(express.json());

// Exemplo de uma Rota Direta (sem MVC por enquanto)
app.get('/', (req, res) => {
  res.send('Servidor Node.js rodando com sucesso! 🚀');
});

// Exemplo de como seria a chamada de uma Rota no padrão MVC
// const produtoRoutes = require('./routes/produtoRoutes');
// app.use('/produtos', produtoRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Pressione CTRL+C para parar');
});