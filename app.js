import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app = express();

const handleHome = (req, res) => res.send('Hello from Home');

const handleProfile = (req, res) => res.send('You are on my profile');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

const middleware = (req, res, next) => {
  console.log('Helloe middleware');
  next();
};

app.use(middleware);

app.get('/', handleHome);

app.get('/profile', handleProfile);

export default app;
