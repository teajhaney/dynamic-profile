import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import { PORT } from './config/index.ts';
import errorHandler from './middleware/errorHandler.ts';
import profileRoutes from './routes/profile.routes.ts';
import logger from './utils/logger.ts';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

//rate limitng
const endpointRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn(`Endpoint rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({
      success: false,
      message: 'Too many requests',
    });
  },
});

app.use(endpointRateLimit);

// Start the server

//profile route
app.use('/', profileRoutes);

app.use(errorHandler);
app
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
  .on('error', err => {
    console.error('❌ Server failed to start:', err);
  });
