import express from 'express'
import {erroHandler} from './middleware/erroHandler.js'
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use('/api', routes)
app.use(erroHandler);


export default app