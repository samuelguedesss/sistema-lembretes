import 'dotenv/config'
import app from './app.js'
import db from './models/index.js'

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try {

        await db.sequelize.authenticate();
        console.log('Conexao com o banco de dados estabelecida com sucesso.');

        const servidor = app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        });

        servidor.on('error', (error) => {
            console.error('Erro ao iniciar o servidor', error)
            process.exit(1)
        });
    } catch (error) {
        console.error('Erro ao conectar no banco', error);
        process.exit(1)
    }
};

startServer()