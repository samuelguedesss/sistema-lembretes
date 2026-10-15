import express from 'express'
import {erroHandler} from './middleware/erroHandler.js'

const app = express();
app.use(express.json());
//app.use(loggerMiddleware)
//app.use(apiLimiter)
//app.use(routes)
app.use(erroHandler);


export default app