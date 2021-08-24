import 'reflect-metadata';
import express from 'express';
import './database/connect';
import userRoutes from './routes/doctorRouter';
import justificationRouter from './routes/justificationRouter';
import morgan from 'morgan';
import 'express-async-errors';
import examRouter from './routes/examsRouter';
import userRouter from './routes/userRouter';
import doctorRouter from './routes/doctorRouter';



const app = express();

const cors = require('cors');

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use(userRoutes);
app.use(justificationRouter);
app.use(examRouter);
app.use(userRouter);
app.use(doctorRouter);
app.listen(8081, () => console.log('Server started'));