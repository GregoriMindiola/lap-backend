import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from 'cors'
import placeRoutes from '../routes/place.routes.js'
import userRoutes from '../routes/user.routes.js'
import verifyToken from "../helpers/verifyToken.js";

config()
const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

app.use('/place', placeRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello world')
})

export default app