import 'express-async-errors'
import Routes from './routes';
import express from 'express';


const app = express()

app.use(express.json())
app.use(Routes)


app.listen(3333)