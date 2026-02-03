require('dotenv').config(); // Carrega as variáveis do .env
const { Sequelize } = require('sequelize');

// Parâmetros: nome_do_banco, usuário, senha
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  } );
// Testando a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao MySQL com sucesso via Sequelize! 🚀');
  } catch (error) {
    console.error('Não foi possível conectar ao banco:', error);
  }
}

testConnection();

module.exports = sequelize;