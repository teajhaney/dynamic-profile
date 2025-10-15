import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { PORT } from './config/index.ts';
import errorHandler from './middleware/errorHandler.ts';
import profileRoutes from './routes/profile.routes.ts';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(errorHandler);
// Start the server

//profile route
app.use('/', profileRoutes);

app
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
  .on('error', err => {
    console.error('❌ Server failed to start:', err);
  });
