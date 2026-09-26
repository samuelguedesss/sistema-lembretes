import 'dotenv/config'
import app from './app.js'

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try {
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