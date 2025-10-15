import logger from '../utils/logger.ts';
import type { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
  stack?: string;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal Server Error' });
};

export default errorHandler;
