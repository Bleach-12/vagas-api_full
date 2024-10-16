const express = require('express');
const bodyParser = require('body-parser');
const vagaRoutes = require('./routes/vagaRoutes');
const sequelize = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/vagas', vagaRoutes);

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(error => console.log('Erro ao sincronizar o banco de dados:', error));
