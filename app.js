import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import { MONGODB_URI, JWT_SECRET, PORT } from './config';
import questionRoutes from './routes/questionRoutes';
import authRoutes from './routes/authRoutes';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  const token = req.header('Authorization');

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        req.user = null;
      } else {
        req.user = decodedToken;
      }

      next();
    });
  } else {
    req.user = null;
    next();
  }
});

app.use('/auth', authRoutes);
app.use('/questions', questionRoutes);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
